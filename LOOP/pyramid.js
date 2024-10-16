function pyramid(char, height) {
    let rslt = "";
    for (let i = 0; i < height; i++) {
        // Calculate the number of spaces for the current row
        let numSpaces = (height - i - 1) * char.length;

        // Create the spaces and characters for the current row
        let spaces = " ".repeat(numSpaces);
        let chars = char.repeat(2 * i + 1);

        // Construct the line and add it to the result
        rslt += spaces + chars;

        // Add a newline character if it's not the last line
        if (i < height - 1) {
            rslt += "\n";
        }
    }
    return rslt;
}
