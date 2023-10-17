const readlineSync = require('readline-sync');

const calculateTime = (distance, speed) => {
    distance = readlineSync.question('Дистанция');
    speed = readlineSync.question('Скорость');
    const time = distance / speed;
    const minut = time * 60 % 60;
    return console.log(`${time}:${minut}`);
}

calculateTime();