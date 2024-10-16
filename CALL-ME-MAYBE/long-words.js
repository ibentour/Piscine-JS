const isLongWord = (word, minLength) => word.length >= minLength;

const longWords = (arr) => arr.every((item) => isLongWord(item, 5));

const oneLongWord = (arr) => arr.some((item) => isLongWord(item, 10));

const noLongWords = (arr) => arr.every((item) => !isLongWord(item, 7));