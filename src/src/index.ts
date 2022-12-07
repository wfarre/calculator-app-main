
// const {Howl, Howler} = require('howler');

import {Howl, Howler} from "howler";
import {add, minus, multiply, divide, operation} from "./operations";
alert("yo")

//variables
let entry: string = "";
let subtotal: number = 0
let operator: string = "";
let value: number = 0;
let enterIsPressed : boolean = false;
var sound = new Howl({
    src: ['mechanical.mp3']
  });


//HTML elements
const result: Element | null = document.querySelector("#result");
const submitBtn: Element | null = document.querySelector('#submit');
const buttons = document.querySelectorAll(".btn");
const delBtn: Element | null = document.querySelector("#del");
const resetBtn = document.querySelector("#reset");


(delBtn as HTMLButtonElement).addEventListener("click", () => {
    entry = "";
    result!.innerHTML = "0";
    value= 0;

});


// event listener when user presses key 
window.addEventListener('keyup', (e) => {
    checkInput(e.key);
    buttons.forEach(button => {
        if((button as HTMLButtonElement).value === e.key){
            button.classList.add("pressed");
            sound.play();
            setTimeout(() => button.classList.remove("pressed"), 100);
        }
    })
});


/**
 * 
 * @param numberInput the number entered by the user.
 * @param operatorInput the operator chosen by the user.
 * This will update the subtotal as well as the operator variable, and will empty the entry.
 */
const operate = (numberInput: number, operatorInput: string):void => {

    if(enterIsPressed){
        operator = operatorInput;
        enterIsPressed = true;
        return;
    }
    if(operator === ""){
        subtotal = operation("add", subtotal, numberInput);
    } else {
        subtotal = operation(operator, subtotal, numberInput);
    }
    entry="";
    operator = operatorInput;
}


/**
 * 
 * @param input the entry made by the user 
 * if input is a number, it will be added to the character string of entry.
 * if input is an operator, we will add the entry to the previos subtotal according the previous operator entry.
 * if it is anything else, we will ignore the entry.
 * @returns void
 */
const checkInput = (input:string):void => {
    const num: number = parseInt(input);

    if (isFinite(num) || input === ".") {
        entry = entry + input.toString();
            (result as HTMLBodyElement).innerHTML = entry;
            if(entry === "."){
                value = 0;
            } else {
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
        default:console.log(input);
            break;
    }

    (result as HTMLBodyElement).innerHTML = subtotal.toString();

}

if(entry === ""){
    (result as HTMLBodyElement).innerHTML = "0";
}





(resetBtn as HTMLButtonElement).addEventListener("click", () => {
    subtotal = 0;
    entry = "";
    operator= "";
    value = 0;
    (result as HTMLBodyElement).innerHTML = "0";
    enterIsPressed = false

});


(submitBtn as HTMLButtonElement).addEventListener("click", (e : any) => {
        e.preventDefault();
        subtotal = operation(operator, subtotal, value);
        (result as HTMLBodyElement).innerHTML = subtotal.toString();
        entry = "";
        enterIsPressed = true
    })



// event listener when user click on the app's keys 
buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault()
        sound.play();
        
        if(e.target !== null){
            (e.target as HTMLInputElement).classList.add("pressed");
            checkInput((e.target as HTMLButtonElement).value)
            setTimeout(() => (e.target as HTMLInputElement).classList.remove("pressed"), 100);
        }
    })
})







