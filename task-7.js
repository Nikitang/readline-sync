const readlineSync = require('readline-sync');

const countWords = (sentence) => {
    sentence = readlineSync.question('Предложение');
    const pred = sentence.split(' ');
    const last = pred.length;
    return console.log(last);
}

countWords();