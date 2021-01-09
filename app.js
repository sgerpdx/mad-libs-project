// import functions and grab DOM elements
import { clickHandler } from './handler.js';
// initialize state
const submitButton = document.getElementById('submitBtn');
// set event listeners to update state and DOM
submitButton.addEventListener('click', clickHandler);

