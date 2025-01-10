const screen = document.getElementById("screen");
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const value = button.textContent;

        if (value === "AC") {
            clearScreen();
        } else if (value === "BS") {
            backspace();
        } else if (value === "=") {
            computeScreenContent();
        } else {
            updateScreen(value);
        }
    });
});

function updateScreen(value) {
    const operators = ["%", "/", "x", "-", "+", "."];

    if (operators.includes(value)) {
        //this code checks if there is an operator already in screen.textContent
        //and if there is, the addition of another operator will be prevented
        // some method checks if an array element passes a test
        if (operators.some(op => screen.textContent.includes(` ${op} `))) {
            return;
        }
        screen.textContent += ` ${value} `;
    } 
    else {
        screen.textContent += value;
    }
}

function clearScreen() {
    screen.textContent = "";
}

function backspace() {
    screen.textContent = screen.textContent.trim().slice(0, -1);
}

function operate(n1, operator, n2) {
    let result = 0;
    switch (operator) {
        case "+":
            return result = n1 + n2;
        case "-":
            return result = n1 - n2;
        case "x":
            return result = n1 * n2;
        case "/":
            if (n2 === 0) {
                screen.textContent = "Divide by zero error";
                return;
            }
            return result = n1 / n2;
        case "%":
            return result = n1 % n2;
    }
}

function computeScreenContent() {
    const splitTxt = screen.textContent.trim().split(" ");
    result = operate(parseFloat(splitTxt[0]), splitTxt[1], parseFloat(splitTxt[2]));
    screen.textContent = result;
    result = 0;
}
