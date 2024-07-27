const calculateButton = document.querySelector('#submitParameters');

const calculatePace = () => {

const maxHR = document.querySelector('#maxHR');
const restHR = document.querySelector('#restHR');
const vVO2 = document.querySelector('#vvo2');
const pbLength = document.querySelector('#pbLength');
const pbTime = document.querySelector('#pbTime');

const reserveHR = (maxHR, restHR) => maxHR - restHR;

const fundEndMin = (reserveHR, restHR) => restHR + (0,6*reserveHR);
const fundEndMax = (reserveHR, restHR) => restHR + (0,7*reserveHR);



}


calculateButton.addEventListener('click', (calculatePace));