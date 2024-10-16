import { places } from "./where-do-we-go.data.js";

var scroll = window.scrollY;
const location = document.createElement("a");
location.classList.add("location");
document.body.appendChild(location);

document.addEventListener("DOMContentLoaded", () => {
    selectPlace();
});

document.addEventListener("scroll", () => {
    selectPlace();
    scroll > window.scrollY
        ? (document.querySelector(".direction").innerHTML = "N")
        : (document.querySelector(".direction").innerHTML = "S");
    scroll = window.scrollY;
});

function explore() {
    places.sort(compareCoordinates);
    console.log(places);
    places.forEach((place) => {
        createSection(place);
    });
    const compass = document.createElement("div");
    compass.classList.add("direction");
    document.body.appendChild(compass);
}

function createSection(place) {
    let section = document.createElement("section");
    section.style.background = `url('./where-do-we-go_images/${
        place.name.toLowerCase().replaceAll(/ /g, "-").split(",")[0]
    }.jpg')`;
    section.style.backgroundSize = "cover";
    section.style.backgroundPosition = "center";
    section.style.backgroundRepeat = "no-repeat";
    section.style.width = "100%";
    section.style.height = "100vh";
    document.body.appendChild(section);
}

function selectPlace() {
    const sectionHeight = window.innerHeight;
    const scroll = window.scrollY + sectionHeight / 2;
    const sectionIndex = Math.floor(scroll / sectionHeight);
    const place = places[sectionIndex];
    location.textContent = `${place.name}\n${place.coordinates}`;
    location.href = `https://www.google.com/maps/place/${urlEncodeCoordinates(
        place.coordinates
    )}/`;
    console.log(
        location.href
            .split("%C2%B0")
            .join("°")
            .split("%22")
            .join('"')
            .split("%20")
            .join(" ")
    );
    location.target = "_blank";
    location.style.color = place.color;
}

function urlEncodeCoordinates(coordinates) {
    return coordinates
        .replaceAll(" ", "%20")
        .replaceAll("°", "%C2%B0")
        .replaceAll('"', "%22");
}

function compareCoordinates(a, b) {
    const aDirection = a.coordinates.split(" ")[0].split('"')[1];
    const bDirection = b.coordinates.split(" ")[0].split('"')[1];
    const xLat = a.coordinates.split(" ")[0];
    const yLat = b.coordinates.split(" ")[0];
    let xLatDeg = parseInt(xLat.split("°")[0]);
    let xLatMin = parseInt(xLat.split("°")[1].split("'")[0]);
    let xLatSec = parseInt(xLat.split("°")[1].split("'")[1].split('"')[0]);
    let yLatDeg = parseInt(yLat.split("°")[0]);
    let yLatMin = parseInt(yLat.split("°")[1].split("'")[0]);
    let yLatSec = parseInt(yLat.split("°")[1].split("'")[1].split('"')[0]);
    if (aDirection === "S") {
        xLatDeg = -xLatDeg;
        xLatMin = -xLatMin;
        xLatSec = -xLatSec;
    }
    if (bDirection === "S") {
        yLatDeg = -yLatDeg;
        yLatMin = -yLatMin;
        yLatSec = -yLatSec;
    }
    if (xLatDeg > yLatDeg) {
        return -1;
    }
    if (xLatDeg < yLatDeg) {
        return 1;
    }
    if (xLatDeg === yLatDeg) {
        if (xLatMin > yLatMin) {
            return -1;
        }
        if (xLatMin < yLatMin) {
            return 1;
        }
        if (xLatMin === yLatMin) {
            if (xLatSec > yLatSec) {
                return 1;
            }
            if (xLatSec < yLatSec) {
                return -1;
            }
            if (xLatSec === yLatSec) {
                return 0;
            }
        }
    }
}

export { explore };