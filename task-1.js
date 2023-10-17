const readlineSync = require('readline-sync');

const incomeTaxCalculator = (income) => {
    income = readlineSync.question('Число');
    const procent = 15;
    const allsum = (income / 100 * procent);
    return allsum;
}

console.log(incomeTaxCalculator());