function triangle(char, height, currentLine = 1, line = "", rslt = "") {
    if (currentLine > height) {
        return rslt
    }

    line += char
    rslt += line + (currentLine < height ? "\n" : "")

    return triangle(char, height, currentLine + 1, line, rslt)
}