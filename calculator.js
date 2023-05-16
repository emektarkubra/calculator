const moonButton = document.querySelector(".fa-moon-o");
const container = document.querySelector(".container");
const operators = document.querySelectorAll(".operator");
const numbers = document.querySelectorAll(".number");
const screenOfCalculator = document.querySelector(".calculator-screen");
const screenOfDisplay = document.querySelector(".display-screen");
const display = document.querySelector(".display")
const header = document.querySelector(".calculator-header");
const openingParenthesis = document.querySelector(".opening-parenthesis");
const closingParenthesis = document.querySelector(".closing-parenthesis");


moonButton.addEventListener("click", darkLight);
screenOfCalculator.addEventListener("click", evaluation)

function darkLight() {
    container.classList.toggle("dark-container");
    operators.forEach(operator => operator.classList.toggle("dark-operators"));
    numbers.forEach(number => number.classList.toggle("dark-numbers"));
    screenOfCalculator.classList.toggle("dark-calculator-screen");
    screenOfDisplay.classList.toggle("dark-display-screen");
    header.classList.toggle("dark-calculator-header");
    display.classList.toggle("dark-calculator-header")
}



display.textContent = "";

function evaluation(e) {
    if (e.target.id == "clear") {
        display.textContent = "";
    }
    else if (e.target.id == "division") {
        display.textContent += "/";
    }
    else if (e.target.id == "percent") {
        display.textContent += "%";
    }
    else if (e.target.id == "comma") {
        display.textContent += ",";
    }
    else if (e.target.id == "seven") {
        display.textContent += "7";
    }
    else if (e.target.id == "eight") {
        display.textContent += "8";
    }
    else if (e.target.id == "nine") {
        display.textContent += "9";
    }
    else if (e.target.id == "multiplication") {
        display.textContent += "x";
    }
    else if (e.target.id == "four") {
        display.textContent += "4";
    }
    else if (e.target.id == "five") {
        display.textContent += "5";
    }
    else if (e.target.id == "six") {
        display.textContent += "6";
    }
    else if (e.target.id == "subtraction") {
        display.textContent += "-";
    }
    else if (e.target.id == "one") {
        display.textContent += "1";
    }
    else if (e.target.id == "two") {
        display.textContent += "2";
    }
    else if (e.target.id == "three") {
        display.textContent += "3";
    }
    else if (e.target.id == "addition") {
        display.textContent += "+";
    }
    else if (e.target.id == "opening-parenthesis") {
        display.textContent += "(";
    }
    else if (e.target.id == "zero") {
        display.textContent += "0";
    }
    else if (e.target.id == "closing-parenthesis") {
        display.textContent += ")";
    }
    else if(e.target.className== "fa fa-times-rectangle-o"){
        let text = display.textContent;
        display.textContent =text.slice(0, -1);
    }


    // else if (e.target.id == "equal") {
    //     display.textContent += "="
    // }
}