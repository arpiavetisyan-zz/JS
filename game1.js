function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max))
}

const randomNum = getRandomInt(10);

while (true) {
    const userGuess = +prompt('Enter number between 1 - 10');

    if (userGuess === randomNum) {
        alert('Win');
        break;
    } else if (userGuess < randomNum) {
        alert('Too low, try again')
    } else if (userGuess > randomNum) {
        alert('Too high, try again')
    }
}