const readlineSync = require('readline-sync');

const calculateDistance = (x1, y1, x2, y2) => {
    x1 = readlineSync.question('Координаты 1 точки');
    y1 = readlineSync.question('Координаты 1 точки');
    x2 = readlineSync.question('Координаты 2 точки');
    y2 = readlineSync.question('Координаты 2 точки');
    const xm = Math.sqrt(((x2 - x1) ** 2) + ((y2 - y1) ** 2));
    return console.log(xm);
}

calculateDistance();