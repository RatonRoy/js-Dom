// select the buttons 
const redButton = document.getElementById('red');
const yellowButton = document.getElementById('yellow');
const greenButton = document.getElementById('green');
const chocolateButton = document.getElementById('chocolate');
const crimsonButton = document.getElementById('crimson');
const orangeButton = document.getElementById('orange');
// end of select buttons 
function makeRed() {
    document.body.style.backgroundColor = 'red';
}
function makeYellow() {
    document.body.style.backgroundColor = 'yellow';
}
function makeGreen() {
    document.body.style.backgroundColor = 'green';
}
redButton.onclick = makeRed;
yellowButton.onclick = makeYellow;
greenButton.onclick = makeGreen;
// anonimaus function 
chocolateButton.onclick = function () {
   document.body.style.backgroundColor = 'chocolate';
}
function makeCrimson() {
   document.body.style.backgroundColor = 'crimson';
}
// add event lisener 
function makeCrimson() {
     document.body.style.backgroundColor = 'crimson';
}
crimsonButton.addEventListener('click', makeCrimson);
// the anonomuse functions 
orangeButton.addEventListener('click', function () {
     document.body.style.backgroundColor = 'orange';
})