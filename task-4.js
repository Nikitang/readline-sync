const readlineSync = require('readline-sync');


const calculateRectangleProperties = (width, height) => {
    width = readlineSync.question('Ширина');
    height = readlineSync.question('Высота');
    const numb1 = +width;
    const numb2 = +height;
    const perimetr = (numb1 + numb2) * 2;
    const S = numb1 * numb2;
    return console.log(`${perimetr}  ${S}`); 
}

calculateRectangleProperties();