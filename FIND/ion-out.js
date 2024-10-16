function ionOut(str) {
    // Split the input string into words
    let arr = str.split(" ");
    // Define a regular expression to match 'tion'
    let rexp = /tion\b/g;
    let res = [];
    arr.forEach((word) => {
        word.match(rexp)
            ? res.push(word.replace(/[.,?!]/g, "").slice(0, -3))
            : null;
    });
    return res;
}

// Example usage:
console.log(ionOut("This is a function. It should return words ending with tion.")); // Output: ["funct", "t"]