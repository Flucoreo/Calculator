// basic add, subtract, multiply, divide functions

function add(a, b){
    return a + b;
}

function subtract(a, b){
    return Number((a - b).toFixed(4));
}

function divider(a, b){
    return Number((a / b).toFixed(4));
}

function multiplier(a, b){
    return Number((a * b).toFixed(4));
}

// number and operation variables
let number1 = 0;
let number2 = 0;
let operator = '';
let displayText = '';

// variables for the buttons
const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const four = document.querySelector(".four");
const five = document.querySelector(".five");
const six = document.querySelector(".six");
const seven = document.querySelector(".seven");
const eight = document.querySelector(".eight");
const nine = document.querySelector(".nine");

const pi = document.querySelector(".pi");
const negate = document.querySelector(".negate");
const modulo = document.querySelector(".modulo");
const clear = document.querySelector(".clear");
const equal = document.querySelector(".one");
const dot = document.querySelector(".one");

const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");
const multiply = document.querySelector(".muliply");
const divide = document.querySelector(".divide");

// updating the display as the user clicks buttons
const buttonsContainer = document.querySelector('.buttons-container');

buttonsContainer.addEventListener('click', (e) => {

    let target = e.target;
    
    if (target.classList.contains("zero")){
        displayText += 0;
        updateDisplay();
    } else if (target.classList.contains("one")){
        displayText += 1;
        updateDisplay();
    } else if (target.classList.contains("two")){
        displayText += 2;
        updateDisplay();
    } else if (target.classList.contains("three")){
        displayText += 3;
        updateDisplay();
    } else if (target.classList.contains("four")){
        displayText += 4;
        updateDisplay();
    } else if (target.classList.contains("five")){
        displayText += 5;
        updateDisplay();
    } else if (target.classList.contains("six")){
        displayText += 6;
        updateDisplay();
    } else if (target.classList.contains("seven")){
        displayText += 7;
        updateDisplay();
    } else if (target.classList.contains("eight")){
        displayText += 8;
        updateDisplay();
    } else if (target.classList.contains("nine")){
        displayText += 9;
        updateDisplay();
    } else if (target.classList.contains("plus")){
        displayText += ' + ';
        updateDisplay();
    } else if (target.classList.contains("minus")){
        displayText += ' - ';
        updateDisplay();
    } else if (target.classList.contains("multiply")){
        displayText += ' x ';
        updateDisplay();
    } else if (target.classList.contains("divide")){
        displayText += ' / ';
        updateDisplay();
    } else if (target.classList.contains("pi")){
        displayText += 'π';
        updateDisplay();
    } else if (target.classList.contains("negate")){
        // updateDisplay();
    } else if (target.classList.contains("modulo")){
        // updateDisplay();
    } else if (target.classList.contains("clear")){
        displayText = '';
        updateDisplay();
    } else if (target.classList.contains("dot")){
        displayText += '.';
        updateDisplay();
    } else if (target.classList.contains("equal")){
        // updateDisplay();
    } 

});

const textBox = document.querySelector('.text-box');

function updateDisplay(){
    // perform operation to remove spaces when calculating character length
    
    if (displayText.length > 30){
        alert('Exceeded maximum character input');
    } else {
        textBox.textContent = `${displayText}`;
        textBox.setAttribute('style', "padding: 1rem 1rem; font-size: 1.5rem; text-align: right;")
    }
}