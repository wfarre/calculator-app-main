// import {Howl, Howler} from '../node_modules/howler/dist/howler.js';
import { operation } from "../dist/operations.js";
import {Howl, Howler} from 'howler';
alert("yo");
let entry = "";
let subtotal = 0;
let operator = "";
let value = 0;
let enterIsPressed = false;
let pressSound1 = new Audio("mechanical.mp3");
let pressSound2 = new Audio("mechanical.mp3");
var sound = new Howl({
    src: ['mechanical.mp3']
  });

const result = document.querySelector("#result");
const submitBtn = document.querySelector('#submit');
const buttons = document.querySelectorAll(".btn");
const delBtn = document.querySelector("#del");
delBtn.addEventListener("click", () => {
    entry = "";
    result.innerHTML = "0";
    value = 0;
});
window.addEventListener('keyup', (e) => {
    checkInput(e.key);
    buttons.forEach(button => {
        if (button.value === e.key) {
            button.classList.add("pressed");
            // pressSound1.currentTime[0];
            // pressSound1.play()
            // pressSound1.play() === true ? pressSound2.play() : pressSound1.play();
            sound.play();
            setTimeout(() => button.classList.remove("pressed"), 100);
        }
    });
});
/**
 *
 * @param numberInput the number entered by the user.
 * @param operatorInput the operator chosen by the user.
 * This will update the subtotal as well as the operator variable, and will empty the entry.
 */
const operate = (numberInput, operatorInput) => {
    if (enterIsPressed) {
        operator = operatorInput;
        enterIsPressed = true;
        return;
    }
    if (operator === "") {
        subtotal = operation("add", subtotal, numberInput);
    }
    else {
        subtotal = operation(operator, subtotal, numberInput);
    }
    entry = "";
    operator = operatorInput;
};
/**
 *
 * @param input the entry made by the user
 * if input is a number, it will be added to the character string of entry.
 * if input is an operator, we will add the entry to the previos subtotal according the previous operator entry.
 * if it is anything else, we will ignore the entry.
 * @returns void
 */
const checkInput = (input) => {
    const num = parseInt(input);
    if (isFinite(num) || input === ".") {
        entry = entry + input.toString();
        result.innerHTML = entry;
        if (entry === ".") {
            value = 0;
        }
        else {
            value = parseFloat(entry);
        }
        return;
    }
    switch (input) {
        case "+":
            operate(value, "add");
            break;
        case "-":
            operate(value, "minus");
            break;
        case "*":
            operate(value, "multiply");
            break;
        case "/":
            operate(value, "divide");
            break;
        case "Enter":
            subtotal = operation(operator, subtotal, value);
            entry = "";
            enterIsPressed = true;
            break;
        default:
            console.log(input);
            break;
    }
    result.innerHTML = subtotal.toString();
};
if (entry === "") {
    result.innerHTML = "0";
}
const resetBtn = document.querySelector("#reset");
resetBtn.addEventListener("click", () => {
    subtotal = 0;
    entry = "";
    operator = "";
    value = 0;
    pressSound.play(

        11
    );
    result.innerHTML = "0";
    enterIsPressed = false;
});
submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    pressSound.play();

    subtotal = operation(operator, subtotal, value);
    result.innerHTML = subtotal.toString();
    entry = "";
    enterIsPressed = true;
});
buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        pressSound.play();

        if (e.target !== null) {
            e.target.classList.add("pressed");
            checkInput(e.target.value);
            setTimeout(() => e.target.classList.remove("pressed"), 100);
        }
    });
});
