// Define a regular expression to match vowels
const vowels = /[aeiou]/gi;

function vowelDots(inputString) {    
    // Replace each vowel with the vowel followed by a dot
    const resultString = inputString.replace(vowels, (match) => match + '.');
    
    return resultString;
}
