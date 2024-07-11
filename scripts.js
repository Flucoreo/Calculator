// basic add, subtract, multiply, divide functions
function add(a, b){
    a = Number(a);
    b = Number(b);
    return a + b;
}

function subtract(a, b){
    a = Number(a);
    b = Number(b);
    return Number((a - b).toFixed(4));
}

function divider(a, b){
    a = Number(a);
    b = Number(b);

    if (b == 0){
        alert('You and I both know you can\'t divide by Zero');
        typingFirstNumber = false;
        typingSecondNumber = false;
        typingOperater = false;
        operatorExists = false;
        operator = '';
        number1 = null;
        number2 = null;
        displayText = '';
        updateDisplay();
        logData();
        return 0;
    } else {
        return Number((a / b).toFixed(4));
    }
}

function multiplier(a, b){
    a = Number(a);
    b = Number(b);

    return Number((a * b).toFixed(4));
}

// solving the given equation
function solve(a, b, op){
    let solution = null;

    if (op == "+"){
        solution = add(a,b);
    } else if (op == "-"){
        solution = subtract(a,b);
    } else if (op == "/"){
        solution = divider(a,b);
    } else if (op == "x"){
        solution = multiplier(a,b);
    } else {
        alert('Something went wrong, please refresh page and continue');
        return(':(')
    }

    return Number((solution).toFixed(4));
}

// number and operation variables
let number1 = null;
let number2 = null;
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

// security variables and functions to prevent user from breaking calculator
let typingFirstNumber = false;
let typingSecondNumber = false;
let typingOperater = false;
let operatorExists = false;
let hitEqual = true;
let number1HasDot = false;
let number2HasDot = false;

function checkUserActionsNumber(button){
    if (typingSecondNumber == true){
        typingOperater = false;
        hitEqual = false;

        if (number2 == null){
            number2 = `${button}`;
        } else {
            number2 += `${button}`;
        }
    } else {
        typingFirstNumber = true;

        if (number1 == null){
            number1 = `${button}`;
        } else {
            number1 += `${button}`;
        }
    }

    displayText += `${button}`;
    updateDisplay();

    logData();
}

function checkUserActionsOperator(button){
    if (typingOperater == true){
        console.log('was true somehow');
        // code to calulate total and continue
    } else {
        if (number2 == null && number1 != null){
            if (operatorExists == true){
                console.log('solve');
                operatorExists = false;
            } else {
                typingOperater = true;
                typingSecondNumber = true;
                typingFirstNumber = false;
                operatorExists = true;
                operator = `${button}`;
                console.log(`operator: ${operator}`);
            }
            
            displayText += ` ${button} `;
            updateDisplay();
        }

    }
}

// updating the display as the user clicks buttons
const buttonsContainer = document.querySelector('.buttons-container');

buttonsContainer.addEventListener('click', (e) => {

    let target = e.target;
    
    if (target.classList.contains("zero")){
        checkUserActionsNumber(0);
    } else if (target.classList.contains("one")){
        checkUserActionsNumber(1)
    } else if (target.classList.contains("two")){
        checkUserActionsNumber(2);
    } else if (target.classList.contains("three")){
        checkUserActionsNumber(3);
    } else if (target.classList.contains("four")){
        checkUserActionsNumber(4);
    } else if (target.classList.contains("five")){
        checkUserActionsNumber(5);
    } else if (target.classList.contains("six")){
        checkUserActionsNumber(6);
    } else if (target.classList.contains("seven")){
        checkUserActionsNumber(7);
    } else if (target.classList.contains("eight")){
        checkUserActionsNumber(8);
    } else if (target.classList.contains("nine")){
        checkUserActionsNumber(9);
    } else if (target.classList.contains("plus")){
        checkUserActionsOperator('+');
    } else if (target.classList.contains("minus")){
        checkUserActionsOperator('-');
    } else if (target.classList.contains("multiply")){
        checkUserActionsOperator('x');
    } else if (target.classList.contains("divide")){
        checkUserActionsOperator('/');
    } else if (target.classList.contains("pi")){
        checkUserActionsNumber('3.14');
    } else if (target.classList.contains("negate")){
        // updateDisplay();
    } else if (target.classList.contains("modulo")){
        // updateDisplay();
    } else if (target.classList.contains("clear")){
        // reset everything to orriginal values
        typingFirstNumber = false;
        typingSecondNumber = false;
        typingOperater = false;
        operatorExists = false;
        operator = '';
        number1 = null;
        number2 = null;
        displayText = '';
        updateDisplay();
        logData();
    } else if (target.classList.contains("dot")){
        // making sure the user can't type multiple decimals in 1 number
        if (typingFirstNumber){
            if (!number1HasDot){
                checkUserActionsNumber('.')
                number1HasDot = true;
            }
        } else if (typingSecondNumber){
            if (!number2HasDot){
                checkUserActionsNumber('.')
                number2HasDot = true;
            }
        }
    } else if (target.classList.contains("equal")){
        // reset everything back to normal, and set number1 = to their previous solution incase they want to operate on it
        if (hitEqual == false){
            displayText = solve(number1, number2, operator);

            hitEqual = true;
            number1 = null;
            number2 = null;
            operator = '';
            typingSecondNumber = false;
            typingOperater = false;
            operatorExists = false;
            number1 = displayText;
            logData();
            updateDisplay();

            // code for multiple decimal prevention
            number2HasDot = false;
            if (Number.isInteger(number1)){
                number1HasDot = false;
            }
        }
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






function logData(){
    console.log(`|`)
    console.log(`Number1: ${number1}`)
    console.log(`Number2: ${number2}`)
    console.log(`operator: ${operator}`)
    console.log(`|`)
}

function logMoreData(){
    console.log('|');
    console.log(`typing 1st number: ${typingFirstNumber}`);
    console.log(`typing 2nd number: ${typingSecondNumber}`);
    console.log(`typing operator: ${typingOperater}`);
    console.log('|');
}