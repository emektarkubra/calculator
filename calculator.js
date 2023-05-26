const darkButton = document.querySelector(".fa-adjust");
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
    darkButton.addEventListener("click", darkLight);
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
        // first character can't be "/"
        if (display.textContent.startsWith("/")) {
            alert();
            display.setAttribute("style", "visibility:hidden")
            display.textContent = "";
            display.setAttribute("style", "visibility:visible")
        }
        // can't be together
        let array = display.textContent.split("");
        for (let i = 0; i < array.length; i++) {

            if ((array[i] == array[i + 1]) && (array[i] == "/")) {
                array.splice(i, array.length - 1);
                array.push("/");

                let str = array.join("");
                display.textContent = str;
            }
        }
        if (array[array.length - 2] == "x") {
            array.pop();
            let str = array.join("");
            display.textContent = str;
        } else if (array[array.length - 2] == "-") {
            array.pop();
            let str = array.join("");
            display.textContent = str;
        } else if (array[array.length - 2] == "+") {
            array.pop();
            let str = array.join("");
            display.textContent = str;
        } else if (array[array.length - 2] == ".") {
            array.pop();
            let str = array.join("");
            display.textContent = str;
        }

        // some operators cant be before 

        let index = display.textContent.indexOf("/");
        if (array[index - 1] === "(" || array[index - 1] === "+" || array[index - 1] === "-") {
            array.pop();
            let str = array.join("");
            display.textContent = str;

        }

    } else if (e.target.id == "percent") {
        display.textContent += "%";
        //  first character can't be "%"
        if (display.textContent.startsWith("%")) {
            alert();
            display.setAttribute("style", "visibility:hidden")
            display.textContent = "";
            display.setAttribute("style", "visibility:visible")
        }

        // can't be together
        let array = display.textContent.split("");
        for (let i = 0; i < array.length; i++) {
            if ((array[i] == array[i + 1]) && (array[i] == "%")) {
                array.splice(i, i + 1);
                array.push("%");
                let str = array.join("");
                display.textContent = str;
            }
        }
        // can't be together with another operator
        if (array[array.length - 2] == "/") {
            array.pop();
            let str = array.join("");
            display.textContent = str;
        } else if (array[array.length - 2] == "x") {
            array.pop();
            let str = array.join("");
            display.textContent = str;
        } else if (array[array.length - 2] == "-") {
            array.pop();
            let str = array.join("");
            display.textContent = str;
        } else if (array[array.length - 2] == "+") {
            array.pop();
            let str = array.join("");
            display.textContent = str;
        } else if (array[array.length - 2] == ".") {
            array.pop();
            let str = array.join("");
            display.textContent = str;
        }

        // some operators cant be before 

        let index = display.textContent.indexOf("%");
        if (array[index - 1] === "(" || array[index - 1] === "+" || array[index - 1] === "-") {
            array.pop();
            let str = array.join("");
            display.textContent = str;
        }

    } else if (e.target.id == "dot") {
        display.textContent += ".";
        // first character can't be "." but it can use with other operators
        let array = display.textContent.split("");
        if (display.textContent.startsWith(".")) {
            array.pop();
            array.push("0.");
            let str = array.join("");
            display.textContent = str;
        } else if (array[array.length - 2] == "(") {
            array.pop();
            array.push("0.");
            let str = array.join("");
            display.textContent = str;
        } else if (array[array.length - 2] == ")") {
            array.pop();
            array.push("x0.");
            let str = array.join("");
            display.textContent = str;

        } else if (array[array.length - 2] == "-") {
            array.pop();
            array.push("0.");
            let str = array.join("");
            display.textContent = str;
        } else if (array[array.length - 2] == "+") {
            array.pop();
            array.push("0.");
            let str = array.join("");
            display.textContent = str;
        } else if (array[array.length - 2] == "/") {
            array.pop();
            array.push("0.");
            let str = array.join("");
            display.textContent = str;
        } else if (array[array.length - 2] == "x") {
            array.pop();
            array.push("0.");
            let str = array.join("");
            display.textContent = str;
        } else if (array[array.length - 2] == "%") {
            array.pop();
            array.push("x0.")
            let str = array.join("");
            display.textContent = str;
        }

        // can't be together
        for (let i = 0; i < array.length; i++) {
            if ((array[i] == array[i + 1]) && (array[i] == ".")) {
                array.splice(i, i + 1);
                array.push(".");
                let str = array.join("");
                display.textContent = str;
            }
        }

    } else if (e.target.id == "seven") {
        // if before number, there is "%"
        let array = display.textContent.split("");
        if (array[array.length - 1] == "%") {
            array.push("x7");
            let str = array.join("");
            display.textContent = str;
        } else if (array[array.length - 1] == ")") {
            array.push("x7");
            let str = array.join("");
            display.textContent = str;
        } else {
            display.textContent += "7";
        }
    } else if (e.target.id == "eight") {
        // if before number, there is "%"
        let array = display.textContent.split("");
        if (array[array.length - 1] == "%") {
            array.push("x8");
            let str = array.join("");
            display.textContent = str;
        } else if (array[array.length - 1] == ")") {
            array.push("x8");
            let str = array.join("");
            display.textContent = str;
        } else {
            display.textContent += "8";
        }
    } else if (e.target.id == "nine") {
        // if before number, there is "%"
        let array = display.textContent.split("");
        if (array[array.length - 1] == "%") {
            array.push("x9");
            let str = array.join("");
            display.textContent = str;
        } else if (array[array.length - 1] == ")") {
            array.push("x9");
            let str = array.join("");
            display.textContent = str;
        } else {
            display.textContent += "9";
        }

    } else if (e.target.id == "multiplication") {
        display.textContent += "x";
        // first character can't be "x"
        if (display.textContent.startsWith("x")) {
            alert();
            display.setAttribute("style", "visibility:hidden")
            display.textContent = "";
            display.setAttribute("style", "visibility:visible")
        }
        // can't be together
        let array = display.textContent.split("");
        for (let i = 0; i < array.length; i++) {
            if ((array[i] == array[i + 1]) && (array[i] == "x")) {
                array.splice(i, i + 1);
                array.push("x");
                let str = array.join("");
                display.textContent = str;
            }
        }
        // can't be together with another operator
        if (array[array.length - 2] == "/") {
            array.pop();
            let str = array.join("");
            display.textContent = str;
        } else if (array[array.length - 2] == "-") {
            array.pop();
            let str = array.join("");
            display.textContent = str;
        } else if (array[array.length - 2] == "+") {
            array.pop();
            let str = array.join("");
            display.textContent = str;
        } else if (array[array.length - 2] == ".") {
            array.pop();
            let str = array.join("");
            display.textContent = str;
        }

        // some operators cant be before 

        let index = display.textContent.indexOf("x");
        if (array[index - 1] === "(" || array[index - 1] === "+" || array[index - 1] === "-") {
            array.pop();
            let str = array.join("");
            display.textContent = str;

        }

    } else if (e.target.id == "four") {
        // if before number, there is "%"
        let array = display.textContent.split("");
        if (array[array.length - 1] == "%") {
            array.push("x4");
            let str = array.join("");
            display.textContent = str;
        } else if (array[array.length - 1] == ")") {
            array.push("x4");
            let str = array.join("");
            display.textContent = str;
        } else {
            display.textContent += "4";
        }
    } else if (e.target.id == "five") {
        // if before number, there is "%"
        let array = display.textContent.split("");
        if (array[array.length - 1] == "%") {
            array.push("x5");
            let str = array.join("");
            display.textContent = str;
        } else if (array[array.length - 1] == ")") {
            array.push("x5");
            let str = array.join("");
            display.textContent = str;
        } else {
            display.textContent += "5";
        }
    } else if (e.target.id == "six") {
        // if before number, there is "%"
        let array = display.textContent.split("");
        if (array[array.length - 1] == "%") {
            array.push("x6");
            let str = array.join("");
            display.textContent = str;
        } else if (array[array.length - 1] == ")") {
            array.push("x6");
            let str = array.join("");
            display.textContent = str;
        } else {
            display.textContent += "6";
        }

    } else if (e.target.id == "subtraction") {
        display.textContent += "-";
        // can't be together
        let array = display.textContent.split("");
        for (let i = 0; i < array.length; i++) {
            if ((array[i] == array[i + 1]) && (array[i] == "-")) {
                array.splice(i + 1, array.length);
                let str = array.join("");
                display.textContent = str;
            }
        }
        // can't be together with another operator
        if (array[array.length - 2] == "x") {
            array.pop();
            let str = array.join("");
            display.textContent = str;
        } else if (array[array.length - 2] == "+") {
            array.pop();
            let str = array.join("");
            display.textContent = str;
        } else if (array[array.length - 2] == ".") {
            array.pop();
            let str = array.join("");
            display.textContent = str;
        }
    } else if (e.target.id == "one") {
        // if before number, there is "%"
        let array = display.textContent.split("");
        if (array[array.length - 1] == "%") {
            array.push("x1");
            let str = array.join("");
            display.textContent = str;
        } else if (array[array.length - 1] == ")") {
            array.push("x1");
            let str = array.join("");
            display.textContent = str;
        } else {
            display.textContent += "1";
        }
    } else if (e.target.id == "two") {
        // if before number, there is "%"
        let array = display.textContent.split("");
        if (array[array.length - 1] == "%") {
            array.push("x2");
            let str = array.join("");
            display.textContent = str;
        } else if (array[array.length - 1] == ")") {
            array.push("x2");
            let str = array.join("");
            display.textContent = str;
        } else {
            display.textContent += "2";
        }
    } else if (e.target.id == "three") {
        // if before number, there is "%"
        let array = display.textContent.split("");
        if (array[array.length - 1] == "%") {
            array.push("x3");
            let str = array.join("");
            display.textContent = str;
        } else if (array[array.length - 1] == ")") {
            array.push("x3");
            let str = array.join("");
            display.textContent = str;
        } else {
            display.textContent += "3";
        }

    } else if (e.target.id == "addition") {
        display.textContent += "+";
        let array = display.textContent.split("");
        // can't be together

        for (let i = 0; i < array.length; i++) {
            if ((array[i] == array[i + 1]) && (array[i] == "+")) {
                array.splice(i + 1, array.length);
                let str = array.join("");
                display.textContent = str;
            }
        }
        // can't be together with another operator
        if (array[array.length - 2] == "x") {
            array.pop();
            let str = array.join("");
            display.textContent = str;
        } else if (array[array.length - 2] == "-") {
            array.pop();
            let str = array.join("");
            display.textContent = str;
        } else if (array[array.length - 2] == ".") {
            array.pop();
            let str = array.join("");
            display.textContent = str;
        }
    } else if (e.target.id == "opening-parenthesis") {
        display.textContent += "("
        let array = display.textContent.split("");
        if (array[array.length - 2] == "%") {
            array.pop();
            array.push("x(");
            let str = array.join("");
            display.textContent = str;
        } else if (array[array.length - 2] == "0" || array[array.length - 2] == "1" || array[array.length - 2] == "2" || array[array.length - 2] == "3") {
            array.pop();
            array.push("x(");
            let str = array.join("");
            display.textContent = str;
        } else if (array[array.length - 2] == "4" || array[array.length - 2] == "5" || array[array.length - 2] == "6") {
            array.pop();
            array.push("x(");
            let str = array.join("");
            display.textContent = str;
        } else if (array[array.length - 2] == "7" || array[array.length - 2] == "8" || array[array.length - 2] == "9") {
            array.pop();
            array.push("x(")
            let str = array.join("");
            display.textContent = str;
        } else if (array[array.length - 2] == ".") {
            array.pop()
            let str = array.join("");
            display.textContent = str;
        }

    } else if (e.target.id == "zero") {
        // if before zero, there is operators
        let array = display.textContent.split("");
        if (array.length == "0") {
            display.textContent = "0."
        } else {
            display.textContent += "0"
        }

        if (array[array.length - 1] == "%") {
            array.push("x0");
            let str = array.join("");
            display.textContent = str;
        }
        if (array[array.length - 1] == ")") {
            array.push("x0");
            let str = array.join("");
            display.textContent = str;
        }
        if (array[array.length - 1] == "(") {
            array.push("0.");
            let str = array.join("");
            display.textContent = str;
        }

    } else if (e.target.id == "closing-parenthesis") {
        display.textContent += ")";
        //  first character can't be "%"
        if (display.textContent.startsWith(")")) {
            alert();
            display.setAttribute("style", "visibility:hidden")
            display.textContent = "";
            display.setAttribute("style", "visibility:visible")
        }

    } else if (e.target.className == "material-icons") {
        let text = display.textContent;
        display.textContent = text.slice(0, -1);

    } else if (e.target.id == "equal") {

        if (display.textContent.includes("x") || display.textContent.includes("%")) {
            let newText = display.textContent.replaceAll("x", "*");
            let newText2 = newText.replaceAll("%", "*(1/100)");
            display.textContent = eval(newText2);
        }

        let result = eval(display.textContent);
        display.textContent = result;
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