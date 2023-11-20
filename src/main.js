// Add your JavaScript here
// Get the elements
const buttons = document.querySelectorAll(".button");
const input = document.querySelector(".display");

let clickedBtn;
let clickedActBtn;
let numberBefore;
let result;

// When the button is clicked
buttons.forEach((element) => {
  element.addEventListener("click", () => {
    // identify which button was clicked
    const buttonAction = element.dataset.action;
    // if the number is clicked,
    if (checkIfNumber0(buttonAction)) {
      input.value += Number(buttonAction);
      // if the last button was "+",
      if (clickedBtn == "/") {
        input.value = Number(buttonAction);
      } else if(clickedBtn == "*"){
        input.value = Number(buttonAction);
      } else if(clickedBtn == "-"){
        input.value = Number(buttonAction);
      } else if(clickedBtn == "+"){
        input.value = Number(buttonAction);
      }
    } else if (buttonAction == "ac") {
      // clear the input
      input.value = "";
      // if the DEL is clicked,
    } else if (buttonAction == "del") {
      // delete the input value one by one
      input.value = input.value.slice(0, -1);
    } else if (buttonAction == "%") {
      input.value = input.value / 100;
    } else if (buttonAction == ".") {
      // how to add a decimal point?
      if (checkIfNumber(clickedBtn)) {
        input.value += '.';
      }
      } else if (buttonAction === "00") {
        input.value *= 100;
    } else if (buttonAction == "/") {
      clickedActBtn = "/";
      numberBefore = Number(input.value);
    } else if (buttonAction == "*") {
      clickedActBtn = "*";
      numberBefore = Number(input.value);
    } else if (buttonAction == "-") {
      clickedActBtn = "-";
      numberBefore = Number(input.value);
    } else if (buttonAction == "+") {
      // if(clickedActBtn != ""){
      //    result = numberBefore + Number(input.value);
      //    input.value = result;
      //  }
      clickedActBtn = "+";
      numberBefore = Number(input.value);      
      } else if (buttonAction == "=") {
      if (clickedActBtn == "/") {
        result = numberBefore / Number(input.value);
      } else if(clickedActBtn == "*") {
        result = numberBefore * Number(input.value);
      } else if(clickedActBtn == "-") {
        result = numberBefore - Number(input.value);
      } else if(clickedActBtn == "+") {
        result = numberBefore + Number(input.value);
      }
      // show the result of the calculation on the input
      input.value = result;
      clickedActBtn = "";
    }
    clickedBtn = buttonAction;
  });
});

// function checking if the value of the button is the number or not
function checkIfNumber(string) {
  return /^[1-9]*$/.test(string);
}

function checkIfNumber0(string) {
  return /^[0.0-9.9]*$/.test(string);
}