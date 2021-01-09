// import { words } from './utils.js';

// const span = document.getElementById();
// const input = document.getElementById();
const zoo = document.getElementById('zoo');
const inputs = document.getElementById('inputs');
const blank1 = document.getElementById('adj-1');
const input1 = document.getElementById('adj-1-input');

export function clickHandler() {
    blank1.textContent = input1.value;
    //blank1.textcontent = words(blank1, input1);
    zoo.style.display = 'block';
    inputs.style.display = 'none';
}