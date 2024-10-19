// calculation.js

// Function to increment the value of the input field
function increment(inputName) {
    var input = document.getElementsByName(inputName)[0];
    if (input.value === "") {
        input.value = 0;
    }
    input.value = parseInt(input.value) + 1;
}

// Function to decrement the value of the input field
function decrement(inputName) {
    var input = document.getElementsByName(inputName)[0];
    if (input.value === "") {
        input.value = 0;
    }
    input.value = parseInt(input.value) - 1;
}

// Function to calculate the result
function calculate() {
    var operand1 = parseFloat(document.getElementsByName("operand1")[0].value);
    var operand2 = parseFloat(document.getElementsByName("operand2")[0].value);
    var operator = document.getElementById("operator-1").value;
    var result = document.getElementsByName("result")[0];

    switch (operator) {
        case "+":
            result.value = operand1 + operand2;
            break;
        case "-":
            result.value = operand1 - operand2;
            break;
        case "*":
            result.value = operand1 * operand2;
            break;
        case "/":
            if (operand2 !== 0) {
                result.value = operand1 / operand2;
            } else {
                result.value = "Error: Division by zero";
            }
            break;
        default:
            result.value = "Invalid operator";
            break;
    }
}
