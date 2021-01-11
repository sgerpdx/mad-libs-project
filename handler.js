import { replaceText } from './utils.js';

// sections to be manipulated with style.display
const zooParagraph = document.getElementById('zoo');
const inputDisplay = document.getElementById('inputs');

// blank spans in paragraph
const adj1 = document.getElementById('adj-1');
const noun1 = document.getElementById('noun-1');
const verbPast1 = document.getElementById('verb-pt-1');
const adverb1 = document.getElementById('adverb-1');
const adj2 = document.getElementById('adj-2');
const noun2 = document.getElementById('noun-2');
const noun3 = document.getElementById('noun-3');
const adj3 = document.getElementById('adj-3');
const verb1 = document.getElementById('verb-1');
const adverb2 = document.getElementById('adverb-2');
const verbPast2 = document.getElementById('verb-pt-2');
const adj4 = document.getElementById('adj-4');

// user input to be inserted into blank spans
const adj1Input = document.getElementById('adj-1-input');
const noun1Input = document.getElementById('noun-1-input');
const verbPast1Input = document.getElementById('verb-pt-1-input');
const adverb1Input = document.getElementById('adverb-1-input');
const adj2Input = document.getElementById('adj-2-input');
const noun2Input = document.getElementById('noun-2-input');
const noun3Input = document.getElementById('noun-3-input');
const adj3Input = document.getElementById('adj-3-input');
const verb1Input = document.getElementById('verb-1-input');
const adverb2Input = document.getElementById('adverb-2-input');
const verbPast2Input = document.getElementById('verb-pt-2-input');
const adj4Input = document.getElementById('adj-4-input');

// put the blanks and inputs into arrays
const blanks = [
    adj1,
    noun1,
    verbPast1,
    adverb1,
    adj2,
    noun2,
    noun3,
    adj3,
    verb1,
    adverb2,
    verbPast2,
    adj4
];

const inputs = [
    adj1Input,
    noun1Input,
    verbPast1Input,
    adverb1Input,
    adj2Input,
    noun2Input,
    noun3Input,
    adj3Input,
    verb1Input,
    adverb2Input,
    verbPast2Input,
    adj4Input
];

// things that should happen on click
export function clickHandler() {
    replaceText(blanks, inputs);
    zooParagraph.style.display = 'block';
    inputDisplay.style.display = 'none';
}