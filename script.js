// function for the add operation

function add(a, b) {
    let result = a + b;
    console.log(result);
    return result
}

//function for the multiply operation

function multiply(a, b) {
    let result = a * b;
    console.log(result);
    return result;
}

//function for the subtract operation

function subtract(a, b) {
    let result = a - b;
    console.log(result);
    return result;
}

//function for the divide operation

function divide(a, b) {
    let result = a / b;
    console.log(result);
    return result;
}

let firstNumber = "";
let secondNumber = "";
let operator = "";
let displayInput = document.getElementById("display");
console.log(displayInput.length);

//function that will do a specific operation based on the input

function operate(firstNumberP, secondNumberP, operatorP) {
    let firstNumberInt = parseFloat(firstNumberP);
    let secondNumberInt = parseFloat(secondNumberP);
    console.log(secondNumberP);
    let result = 0;
    switch (operatorP) {
        case "+":
            result = add(firstNumberInt, secondNumberInt);
            break;
        case "*":
            result = multiply(firstNumberInt, secondNumberInt);
            break;
        case "-":
            result = subtract(firstNumberInt, secondNumberInt);
            break;
        default:
            result = divide(firstNumberInt, secondNumberInt)
            break;
    }
    firstNumber = `${result}`;
    secondNumber = "";
    operator = "";
    console.log(result >= 1000000000);
    if (result >= 1000000000) {
        displayInput.value = Number(result).toPrecision(5);
    } else {
        displayInput.value = result;
    }
    
}

//this function adds the digits

function addDigitToDisplay(charToAdd) {
    if (operator !== "" && secondNumber === "") {
        displayInput.value += " " + charToAdd;
        secondNumber += charToAdd;
    } else {
        if (secondNumber !== "") {
            displayInput.value += charToAdd;
            secondNumber += charToAdd;
        } else { 
            displayInput.value += charToAdd;
            firstNumber += charToAdd;
        }
    }
}

//this function adds the operators

function addOperatorToDisplay(charToAdd) {
    if (firstNumber !== "" && operator === "") {
        displayInput.value += " " + charToAdd;
        operator = charToAdd;
    } 

    if (secondNumber !== "") {
        checkTheCalc();
        displayInput.value += " " + charToAdd;
        operator = charToAdd;
    }
}

//This function adds input to the display

function addInputToDisplay(e) {
    let currentBtn = e.target;
    let charToAdd = currentBtn.textContent;
    console.log(charToAdd);
    if (currentBtn.classList.contains("digit")) {
        addDigitToDisplay(charToAdd);
    } else if(currentBtn.classList.contains("operator")) {
        addOperatorToDisplay(charToAdd);}
}

//This cycle adds click event to all digit buttons

let allDigitBtns = document.querySelectorAll(".button.digit");

for (let i = 0; i < allDigitBtns.length; i++) {
    allDigitBtns[i].addEventListener("click", addInputToDisplay)
}



//this cycle add click event to all operator buttons

let allOperatorBtns = document.querySelectorAll(".button.operator");

for (let i = 0; i < allOperatorBtns.length; i++) {
    allOperatorBtns[i].addEventListener("click", addInputToDisplay);
}


//this function checks if the calculator have all the needed variables before the running operate

let equalBtn = document.getElementById("equal");

function checkTheCalc() {
    if (firstNumber !== "" && operator !== "" & secondNumber !== "") {
        operate(firstNumber, secondNumber, operator);
    }
}

equalBtn.addEventListener("click", checkTheCalc)


// This part of the code is for clearing the calculator

clearBtn = document.getElementById("clear");

clearBtn.addEventListener("click", clearTheCalc)

function clearTheCalc() {

    firstNumber = "";
    secondNumber = "";
    operator = "";
    displayInput.value = "";
    
}

// the code below is for removing single characters from the code.

backspaceBtn = document.getElementById("backspace");

backspaceBtn.addEventListener("click", deleteEntry)

function deleteEntry() {

    if(secondNumber !== "") {
        deleteFromSecondNumber();
    } else if (operator !== ""){
        operator = "";
        displayInput.value = displayInput.value.slice(0, -2);
    } else if (firstNumber !== "") {
        deleteFromFirstNumber();
    }
        

    function deleteFromSecondNumber() {
        secondNumber = secondNumber.slice(0, -1);
        if(secondNumber.length === 0) {
            displayInput.value = displayInput.value.slice(0, -2);
            
        } else {
            displayInput.value = displayInput.value.slice(0, -1);
        }
    }

    function deleteFromFirstNumber() {
        firstNumber = firstNumber.slice(0, -1);
        displayInput.value = displayInput.value.slice(0, -1);
    }
    
}

// Adds a point to the numbers in the calculator

pointBtn = document.getElementById("point");

pointBtn.addEventListener("click", addPointToNumber)

function addPointToNumber() {
    if(firstNumber !== "" && operator === "") {
        if (firstNumber.includes(".")){
            return;
        }
        firstNumber += ".";
        displayInput.value += "."; 
    } else if (secondNumber !== "") {
        if(secondNumber.includes(".")){
            return;
        }
        secondNumber += ".";
        displayInput.value += ".";
    }
}

//this code provides keyboard support to my function

displayInput.addEventListener("keydown", keyboardInputToCalc);

function keyboardInputToCalc(e){
    const allowedKeys = ["0","1","2","3","4","5","6","7","8","9",".","+","-","/","*","=","Backspace","Enter"];

    const digits = ["0","1","2","3","4","5","6","7","8","9"];
    const operators = ["+","-","/","*"];
    if (!allowedKeys.includes(e.key)) { 
        e.preventDefault();
        }

    if (digits.includes(e.key)) {
        e.preventDefault();
        addDigitToDisplay(e.key);
        console.log(firstNumber);
        console.log(secondNumber);
    } else if (operators.includes(e.key)){
        e.preventDefault();
        addOperatorToDisplay(e.key);
    } else if (e.key === "."){
        e.preventDefault();
        addPointToNumber();
    } else if (e.key === "Backspace"){
        console.log("red");
        e.preventDefault();
        deleteEntry();
    } else if (e.key === "=" || e.key === "Enter") {
        e.preventDefault();
        checkTheCalc();
    }
}





