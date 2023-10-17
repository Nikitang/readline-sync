const readlineSync = require('readline-sync');

const generateRandomEquation = () => {
    const a = Math.random(0);
    const b = Math.random(0);
    const c = Math.random(0);
    const abc = (`${a}x + ${b} = ${c}`)
    return console.log(abc);
}

generateRandomEquation();