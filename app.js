// import functions and grab DOM elements
import { clickHandler } from './handler.js';
const submitButton = document.getElementById('submit-button');

// set event listeners to update state and DOM
submitButton.addEventListener('click', clickHandler);

