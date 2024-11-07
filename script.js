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
    let firstNumberInt = parseInt(firstNumberP);
    let secondNumberInt = parseInt(secondNumberP);
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

function addDigitToDisplay(currentBtn) {
    if (operator !== "" && secondNumber === "") {
        displayInput.value += " " + currentBtn.textContent;
        secondNumber += currentBtn.textContent;
    } else {
        if (secondNumber !== "") {
            displayInput.value += currentBtn.textContent;
            secondNumber += currentBtn.textContent;
        } else { 
            displayInput.value += currentBtn.textContent;
            firstNumber += currentBtn.textContent;
        }
    }
}

//this function adds the operators

function addOperatorToDisplay(currentBtn) {
    if (firstNumber !== "" && operator === "") {
        displayInput.value += " " + currentBtn.textContent;
        operator = currentBtn.textContent;
    } 

    if (secondNumber !== "") {
        checkTheCalc();
        displayInput.value += " " + currentBtn.textContent;
        operator = currentBtn.textContent;
    }
}

//This function adds input to the display

function addInputToDisplay(e) {
    let currentBtn = e.target;
    if (currentBtn.classList.contains("digit")) {
        addDigitToDisplay(currentBtn);
    } else if(currentBtn.classList.contains("operator")) {
        addOperatorToDisplay(currentBtn);}
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

let equalbtn = document.getElementById("equal");

function checkTheCalc() {
    if (firstNumber !== "" && operator !== "" & secondNumber !== "") {
        operate(firstNumber, secondNumber, operator);
    }
}

equalbtn.addEventListener("click", checkTheCalc)


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





