import { colors } from "./fifty-shades-of-cold.data.js";

const generateClasses = () => {
    const style = document.createElement("style");
    style.textContent = colors.map(color => `.${color} { background: ${color}; }`).join('\n');
    document.head.appendChild(style);
};

const generateColdShades = () => {
    const fragment = document.createDocumentFragment();
    const coldColors = /(aqua|blue|turquoise|green|cyan|navy|purple)/;
    colors.forEach(color => {
        if (coldColors.test(color)) {
            const div = document.createElement("div");
            div.className = color;
            div.textContent = color;
            fragment.appendChild(div);
        }
    });
    document.body.appendChild(fragment);
};

const choseShade = (shade) => {
    document.querySelectorAll("div").forEach(div => div.className = shade);
};

export { generateClasses, generateColdShades, choseShade };