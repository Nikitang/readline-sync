const readlineSync = require('readline-sync');

const celsiusToFahrenheit = (celsius) => {
    celsius = readlineSync.question('Градусы');
    const calc = (celsius * 9/5) + 32;
    return calc;
}

console.log(celsiusToFahrenheit());