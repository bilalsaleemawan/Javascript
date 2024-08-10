
const finaloutput = document.getElementById('output');
const val1 = document.getElementById('num1');
const val2 = document.getElementById('num2');
const actioninput = document.getElementById('operator');

let result;

if (actioninput.value === '+') {
    result = addition(val1, val2);

} else if (actioninput.value === '-') {
    result = subtraction(val1, val2);

} else if (actioninput.value === '*') {
    result = multiplication(val1, val2);

} else if (actioninput.value === '/') {
    result = division(val1, val2);

} else {
    result = ("Invalid value");
}

finaloutput.innerHTML = result;

// Addition Function
function addition(val1, val2) {
    return parseInt(val1.value) + parseInt(val2.value);
}

// Subtraction

function subtraction(val1, val2) {
    return parseInt(val1.value) - parseInt(val2.value);
}

// Multiplication
function multiplication(val1, val2) {
    return parseInt(val1.value) * parseInt(val2.value);
}

// Division
function division(val1, val2) {
    return parseInt(val1.value) / parseInt(val2.value);
}


















// function calculate() {
//     // Retrieve values from input fields
//     const val1 = document.getElementById('num1').value;
//     const val2 = document.getElementById('num2').value;
//     const actioninput = document.getElementById('operator').value;
//     const finaloutput = document.getElementById('output');

//     // Convert values to numbers
//     const num1 = parseFloat(val1);
//     const num2 = parseFloat(val2);

//     let result;

//     // Perform calculation based on operator
//     if (actioninput === '+') {
//         result = addition(num1, num2);
//     } else if (actioninput === '-') {
//         result = subtraction(num1, num2);
//     } else if (actioninput === '*') {
//         result = multiplication(num1, num2);
//     } else if (actioninput === '/') {
//         result = division(num1, num2);
//     } else {
//         result = "Invalid operator";
//     }
    
//     // Display result in the output div
//     finaloutput.innerHTML = result;
// }

// // Addition Function
// function addition(num1, num2) {
//     return num1 + num2;
// }

// // Subtraction Function
// function subtraction(num1, num2) {
//     return num1 - num2;
// }

// // Multiplication Function
// function multiplication(num1, num2) {
//     return num1 * num2;
// }

// // Division Function
// function division(num1, num2) {
//     if (num2 === 0) {
//         return "Cannot divide by zero";
//     }
//     return num1 / num2;
// }








