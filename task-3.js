const readlineSync = require('readline-sync');

const calculateDiscount = (price, discountPercentage) => {
    price = readlineSync.question('Цена');
    discountPercentage = readlineSync.question('Проценты');
    const calc = (price / 100) * discountPercentage;
    return calc;
}

console.log(calculateDiscount());