import { styles } from "./pimp-my-style.data.js";

let counter = 0;

const pimp = () => {
    const button = document.querySelector("button.button");
    const isUnpimping = button.classList.contains("unpimp");

    isUnpimping ? counter-- : counter++;
    
    button.classList.toggle(styles[isUnpimping ? counter : counter - 1]);
    
    if (counter === 0 || counter === styles.length) {
        button.classList.toggle("unpimp");
    }
};

export { pimp };