const generateLetters = () => {
    const fragment = document.createDocumentFragment();
    for (let i = 0; i < 120; i++) {
        const letter = document.createElement("div");
        letter.style.cssText = `font-size: ${11 + i}px; font-weight: ${i < 40 ? 300 : i < 80 ? 400 : 600}`;
        letter.textContent = String.fromCharCode(65 + Math.floor(Math.random() * 26));
        fragment.appendChild(letter);
    }
    document.body.appendChild(fragment);
};

export { generateLetters };