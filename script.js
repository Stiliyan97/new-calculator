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

//function that will do a specific operation based on the input

function operate(firstNumber, secondNumber, operator) {
    let result = 0;
    switch (operator) {
        case "+":
            result = add(firstNumber, secondNumber);
            break;
        case "*":
            result = multiply(firstNumber, secondNumber);
            break;
        case "-":
            result = subtract(firstNumber, secondNumber);
            break;
        default:
            result = divide(firstNumber, secondNumber)
            break;
    }
}

let allDigitBtns = document.querySelectorAll(".button.digit");


function addToTheInput(e) {
    let currentBtn = e.target;
    let displayInput = document.getElementById("display");
    console.log(currentBtn.classList.contains("digit"));

    if (currentBtn.classList.contains("operator")) {
        displayInput.value += " " + currentBtn.textContent;
    }

    // displayInput.value += digitbtn.textContent;
    //firstNumber += digitbtn.textContent;
//console.log(firstNumber);

}

//This cycle adds click event to all digit buttons

for (let i = 0; i < allDigitBtns.length; i++) {
    allDigitBtns[i].addEventListener("click", addToTheInput)
}

allOperatorBtns = document.querySelectorAll(".button.operator");


for (let i = 0; i < allOperatorBtns.length; i++) {
    allOperatorBtns[i].addEventListener("click", addToTheInput);
}



