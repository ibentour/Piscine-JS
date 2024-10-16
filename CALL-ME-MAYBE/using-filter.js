// Count vowels
const countVowels = (str) => (str.match(/[aeiou]/gi) || []).length;

// Check if a string starts with a vowel
const startsWithVowel = (str) => /^[aeiou]/i.test(str);

function filterShortStateName(arr) {
    return arr.filter(item => item.length < 7);
}

function filterStartVowel(arr) {
    return arr.filter(startsWithVowel);
}

function filter5Vowels(arr) {
    return arr.filter(item => countVowels(item) >= 5);
}

function filter1DistinctVowel(arr) {
    return arr.filter(item => new Set(item.toLowerCase().match(/[aeiou]/gi)).size === 1);
}

function multiFilter(arr) {
    return arr.filter(({ capital, name, tag, region }) => 
        capital.length >= 8 &&
        !startsWithVowel(name) &&
        /[aeiou]/i.test(tag) &&
        region !== "South"
    );
}