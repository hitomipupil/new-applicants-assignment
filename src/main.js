// Add your JavaScript here
const buttons = document.querySelectorAll('.button');
const input = document.querySelector('.display');

let calculation;
let result;

// initialize the input.value
input.value = 0;

// When the button is clicked
buttons.forEach((element) => {
    element.addEventListener('click', () => {
        const buttonAction = element.dataset.action;
        if (
            checkIfNumber(buttonAction) ||
            buttonAction == '/' ||
            buttonAction == '*' ||
            buttonAction == '-' ||
            buttonAction == '+'
        ) {
            if (input.value != 0) {
                input.value += buttonAction;
            } else {
                if (buttonAction == 0) {
                    input.value = 0;
                } else if (buttonAction == '/' || buttonAction == '*') {
                    input.value += buttonAction;
                } else {
                    input.value = buttonAction;
                }
            }
        } else if (buttonAction == 'ac') {
            // clear the input
            input.value = 0;
        } else if (buttonAction == 'del') {
            // delete the input value one by one
            if (input.value.length > 1) {
                input.value = input.value.slice(0, -1);
            } else {
                input.value = 0;
            }
        } else if (buttonAction == '%') {
            // It works with number but when it's with actions before it like "1+5%", it shows NaN
            input.value /= 100;
        } else if (buttonAction == '.') {
            if (input.value.includes('.')) {
                return;
            } else {
                input.value += '.';
            }
        } else if (buttonAction === '00') {
            input.value *= 100;
        } else if (buttonAction == '=') {
            // show the result of the calculation on the input
            calculation = input.value;
            result = eval(calculation);
            input.value = result;
        }
    });
});

// function checking if the value of the button is the number or not
function checkIfNumber(string) {
    return /^[0-9]*$/.test(string);
}
