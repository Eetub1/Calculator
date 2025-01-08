screen = document.getElementById("screen");

buttonAC = document.getElementById("buttonAC");
buttonBS = document.getElementById("buttonBS");
buttonModulo = document.getElementById("button%");
buttonDivide = document.getElementById("button/");
button1 = document.getElementById("button1");
button2 = document.getElementById("button2");
button3 = document.getElementById("button3");
buttonMultiply = document.getElementById("buttonx");
button4 = document.getElementById("button4");
button5 = document.getElementById("button5");
button6 = document.getElementById("button6");
buttonSubtract = document.getElementById("button-");
button7 = document.getElementById("button7");
button8 = document.getElementById("button8");
button9 = document.getElementById("button9");
buttonAdd = document.getElementById("button+");
button0 = document.getElementById("button0");
buttonDot = document.getElementById("button.");
buttonCompute = document.getElementById("button=");

button0.addEventListener("click", () => {
    screen.textContent += "0"
})

button1.addEventListener("click", () => {
    screen.textContent += "1"
})

button2.addEventListener("click", () => {
    screen.textContent += "2"
})

button3.addEventListener("click", () => {
    screen.textContent += "3"
})

button4.addEventListener("click", () => {
    screen.textContent += "4"
})

button5.addEventListener("click", () => {
    screen.textContent += "5"
})

button6.addEventListener("click", () => {
    screen.textContent += "6"
})

button7.addEventListener("click", () => {
    screen.textContent += "7"
})

button8.addEventListener("click", () => {
    screen.textContent += "8"
})

button9.addEventListener("click", () => {
    screen.textContent += "9"
})

buttonModulo.addEventListener("click", () => {
    screen.textContent += " % "
})

buttonDivide.addEventListener("click", () => {
    screen.textContent += " / "
})

buttonMultiply.addEventListener("click", () => {
    screen.textContent += " x "
})

buttonSubtract.addEventListener("click", () => {
    screen.textContent += " - "
})

buttonAdd.addEventListener("click", () => {
    screen.textContent += " + "
})

buttonAC.addEventListener("click", clearScreen);

buttonCompute.addEventListener("click", screenContentSplit);

function operate(operator, number1, number2) {
    let result = 0;
    if (operator === "+") {
        result = number1 + number2;
    }
    else if(operator === "-") {
        result = number1 - number2;
    }
    else if(operator === "x") {
        result = number1 * number2;
    }
    else if(operator === "/") {
        if (number2 === 0) {
            screen.textContent = "Divide by zero error";
            return;
        }
        else {
            result = number1 / number2;
        }
    }
    else if(operator === "%") {
        result = number1 % number2;
    }
    return result
}

function clearScreen() {
    screen.textContent = "";
}

function screenContentSplit() {
    const splitTxt = screen.textContent.trim().split(" ");
    let j = 0;
    while (splitTxt.length > 1) {
        result = operate(splitTxt[j + 1], parseFloat(splitTxt[j]), parseFloat(splitTxt[j + 2]));
        splitTxt.splice(0, 3);
        splitTxt.unshift(result);
    }
    screen.textContent = result;
}
