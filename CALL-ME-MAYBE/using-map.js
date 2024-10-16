// Capitalize words
const capitalizeWords = (str) => str.replace(/\b\w/g, c => c.toUpperCase());

// Convert Fahrenheit to Celsius
const convertToCelsius = (fahrenheit) => Math.floor((fahrenheit - 32) * (5 / 9));

function citiesOnly(arr) {
    return arr.map(({ city }) => city);
}

function upperCasingStates(arr) {
    return arr.map(capitalizeWords);
}

function fahrenheitToCelsius(arr) {
    return arr.map(temp => `${convertToCelsius(parseInt(temp))}°C`);
}

function trimTemp(arr) {
    return arr.map(item => ({
        ...item,
        temperature: item.temperature.replace(/\s/g, '')
    }));
}

function tempForecasts(arr) {
    return arr.map(({ temperature, city, state }) => 
        `${convertToCelsius(parseInt(temperature))}°Celsius in ${city}, ${capitalizeWords(state)}`
    );
}