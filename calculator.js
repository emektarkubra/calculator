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
const alertBox = document.querySelector(".alert")

events();

function events() {
    moonButton.addEventListener("click", darkLight);
    screenOfCalculator.addEventListener("click", evaluation);
}

function darkLight(e) {

    container.classList.toggle("dark-container");
    operators.forEach(operator => operator.classList.toggle("dark-operators"));
    numbers.forEach(number => number.classList.toggle("dark-numbers"));
    screenOfCalculator.classList.toggle("dark-calculator-screen");
    screenOfDisplay.classList.toggle("dark-display-screen");
    header.classList.toggle("dark-calculator-header");
    display.classList.toggle("dark-calculator-header");
}

display.textContent = "";

function evaluation(e) {
    if (e.target.id == "clear") {
        display.textContent = "";
    } else if (e.target.id == "division") {
        display.textContent += "/";
        if (display.textContent.startsWith("/")) {
            alert();
            display.setAttribute("style", "visibility:hidden")
            display.textContent = "";
            display.setAttribute("style", "visibility:visible")
        }
    } else if (e.target.id == "percent") {
        display.textContent += "%";
        if (display.textContent.startsWith("%")) {
            alert();
            display.setAttribute("style", "visibility:hidden")
            display.textContent = "";
            display.setAttribute("style", "visibility:visible")
        }
    } else if (e.target.id == "dot") {
        display.textContent += ".";
        if (display.textContent.startsWith(".")) {
            display.setAttribute("style", "visibility:hidden")
            display.textContent = "0.";
            display.setAttribute("style", "visibility:visible")
        }
    } else if (e.target.id == "seven") {
        display.textContent += "7";
    } else if (e.target.id == "eight") {
        display.textContent += "8";
    } else if (e.target.id == "nine") {
        display.textContent += "9";
    } else if (e.target.id == "multiplication") {
        display.textContent += "x";
        if (display.textContent.startsWith("x")) {
            alert();
            display.setAttribute("style", "visibility:hidden")
            display.textContent = "";
            display.setAttribute("style", "visibility:visible")
        }
    } else if (e.target.id == "four") {
        display.textContent += "4";
    } else if (e.target.id == "five") {
        display.textContent += "5";
    } else if (e.target.id == "six") {
        display.textContent += "6";
    } else if (e.target.id == "subtraction") {
        display.textContent += "-";
        if (display.textContent.startsWith("-")) {
            alert();
            display.setAttribute("style", "visibility:hidden")
            display.textContent = "";
            display.setAttribute("style", "visibility:visible")
        }
    } else if (e.target.id == "one") {
        display.textContent += "1";
    } else if (e.target.id == "two") {
        display.textContent += "2";
    } else if (e.target.id == "three") {
        display.textContent += "3";
    } else if (e.target.id == "addition") {
        display.textContent += "+";
        if (display.textContent.startsWith("+")) {
            alert();
            display.setAttribute("style", "visibility:hidden")
            display.textContent = "";
            display.setAttribute("style", "visibility:visible")
        }
    } else if (e.target.id == "opening-parenthesis") {
        display.textContent += "(";
    } else if (e.target.id == "zero") {
        display.textContent += "0";
    } else if (e.target.id == "closing-parenthesis") {
        display.textContent += ")";
    } else if (e.target.className == "fa fa-times-rectangle-o") {
        let text = display.textContent;
        display.textContent = text.slice(0, -1);
    } else if (e.target.id == "equal") {
        if (display.textContent.includes("x")) {
            let newText = display.textContent.replaceAll("x", "*");
            display.textContent = newText;
        }
        if (display.textContent.includes("%")) {
            let newText = display.textContent.replaceAll("%", "*(1/100)");
            display.textContent = newText;
        }
        if (display.textContent.startsWith("%")) {
            console.log("geçersiz")
        }
        let sonuc = eval(display.textContent);
        display.textContent = sonuc;
    }
}

function alert() {
    alertBox.textContent = "Geçersiz biçim kullanıldı."
    alertBox.style.background = "rgb(60, 60, 60)";
    alertBox.style.color = "white";
    setTimeout(() => {
        alertBox.removeAttribute("style", "background:rgb(29, 28, 28)");
        alertBox.textContent = "";
    }, 1500)
}