const pronoun = (str) => {
    const pronouns = new Set(["i", "you", "he", "she", "it", "they", "we"]);
    const words = str.toLowerCase().match(/\b\w+\b/g) || [];
    
    return words.reduce((result, word, index) => {
        if (pronouns.has(word)) {
            if (!result[word]) {
                result[word] = { word: [], count: 0 };
            }
            result[word].count++;
            
            const nextWord = words[index + 1];
            if (nextWord && !pronouns.has(nextWord) && !result[word].word.includes(nextWord)) {
                result[word].word.push(nextWord);
            }
        }
        return result;
    }, {});
};