const readlineSync = require('readline-sync');

const calculateBalance = (incomes, expenses) => {
    incomes = readlineSync.question('Доход');
    expenses = readlineSync.question('Расход');
    const calcBalance = incomes - expenses;
    return console.log(calcBalance);
}

calculateBalance();