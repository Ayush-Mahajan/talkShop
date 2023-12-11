function cleanTextAndSplit(text) {
    const cleanedText = text.replace(/[,.;?!]/g, ' ');

    const words = cleanedText.split(/\s+/);

    return words;
}

function getWordCountAndAverageWordLength(wordsArray) {
    let wordCount = 0, wordLen = 0;

    wordsArray.forEach(word => {
        wordCount += 1;
        wordLen += word.length;
    });
    return [wordCount, wordLen/wordCount];
}

module.exports = {
    cleanTextAndSplit,
    getWordCountAndAverageWordLength
};