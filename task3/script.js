const greenLight = document.getElementById('green');
const yellowLight = document.getElementById('yellow');
const redLight = document.getElementById('red');

function makeGreen() {
    greenLight.style.background = 'green';
    yellowLight.style.background = 'black';
    redLight.style.background = 'black';

    greenLight.removeEventListener('click', makeGreen);
    yellowLight.addEventListener('click', makeYellow);
}

function makeYellow() {
    greenLight.style.background = 'black';
    yellowLight.style.background = 'yellow';
    redLight.style.background = 'black';

    yellowLight.removeEventListener('click', makeYellow);
    redLight.addEventListener('click', makeRed);
}

function makeRed() {
    greenLight.style.background = 'black';
    yellowLight.style.background = 'black';
    redLight.style.background = 'red';

    redLight.removeEventListener('click', makeRed);
    greenLight.addEventListener('click', makeGreen);
}

greenLight.addEventListener('click', makeGreen);
