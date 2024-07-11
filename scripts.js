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
        // if the user tried to divide by zero, reset everything 
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

// instances for the buttons
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

// number and operation variables
let number1 = null; // the number on the left side of an operator, ex: 3x6, 3 is number1
let number2 = null; // the number on the right side of an operator, ex: 3x6, 6 is number2
let operator = ''; // + - x /
let displayText = ''; // content that the calculator displays

// security variables and functions to prevent user from breaking calculator
let typingFirstNumber = false; // controls if user can type number1
let typingSecondNumber = false; // controls if user can type number2
let typingOperater = false; // controls if user can type an operator
let operatorExists = false; // a way to know if an operator is in the equation
let allowedToHitEqual = false; // controls if user can hit equal
let number1HasDot = false; // controls if user can add a decimal number1
let number2HasDot = false; // controls if user can add a decimal number2

// function update numbers correctly as user types them
function checkUserActionsNumber(button){
    // if the second number is being typed
    if (typingSecondNumber == true){
        typingOperater = false; // if the second number is being typed, then an operator can nolonger be added to the equation
        allowedToHitEqual = true; // you can only hit equal if the second number is in the process of being typed

        if (number2 == null){
            // if the second number variable was empty, re-write it
            number2 = `${button}`;
        } else {
            // if the second number variable is already being typed, add to it
            number2 += `${button}`;
        }
    } else {
        // if the first number is being typed
        typingFirstNumber = true;

        if (number1 == null){
            // if the first number variable was empty (so the the result of a previous operation), re-write it
            number1 = `${button}`;
        } else {
            // if the first number variable is the product of a previous operation, add to it
            number1 += `${button}`;
        }
    }

    // update the display and log info
    displayText += `${button}`;
    updateDisplay();
    logData();
}

// function update operators correctly as user types them
function checkUserActionsOperator(button){
    if (typingOperater == true){
        // is the user tried to type 2 operators in a row nothing happens
    } else {
        // is the user has not typed an operator already in this equation, make sure it's being 
        // typed inbetween the first and second numbers
        if (number2 == null && number1 != null){

            if (operatorExists == true){
                // if an operater exists somehwere in the equation don't add another one
                // problem: this situation doesn't exist since inorder to get to here in the code, typingOperator has to be false. Since when operatorExists is turned true when TypingOperator is made false, then this code will never run.
            } else {
                // indicate that the operator is being typed, the second number is up next to be typed, and there is an operator in the equation
                typingOperater = true;
                typingSecondNumber = true;
                typingFirstNumber = false;
                operatorExists = true;
                operator = `${button}`;   
            }
            
            // update the display and log info
            displayText += ` ${button} `;
            updateDisplay();
            logData();
        }
    }
}

// capture the user's actions as they click buttons
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

        // update the display and log info
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
        if (allowedToHitEqual == true){
            // doslve the equation
            displayText = solve(number1, number2, operator);

            // reset everything back to normal, and set number1 = to the previous equation's solution incase user wants to operate on it
            allowedToHitEqual = false;
            number1 = null;
            number2 = null;
            operator = '';
            typingSecondNumber = false;
            typingOperater = false;
            operatorExists = false;
            number1 = displayText;
            
            // update display and log info
            updateDisplay();
            logData();

            // code for multiple decimal prevention
            number2HasDot = false; // after equal is hit, here is no number2. so it for sure doesn't have a decimal
            if (Number.isInteger(number1)){ // after equal is hit, the result might have a decimal, but if not, update its status to not having one
                number1HasDot = false;
            }
        }
    } 
});


// functionality to update the display 
const textBox = document.querySelector('.text-box');

function updateDisplay(){
    // NOTE: create operation to remove spaces when calculating character length

    if (displayText.length > 30){
        alert('Exceeded maximum character input');
    } else {
        textBox.textContent = `${displayText}`;
        textBox.setAttribute('style', "padding: 1rem 1rem; font-size: 1.5rem; text-align: right;")
    }
}





// side functions to check main calulator variables are they are changed
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