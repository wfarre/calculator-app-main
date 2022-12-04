import { operation } from "./operations";
let entry = "";
let subtotal = 0;
let operator = "add";
const result = document.querySelector("#result");
const submitBtn = document.querySelector('#submit');
const buttons = document.querySelectorAll(".btn");
window.addEventListener('keyup', (e) => {
    checkInput(e.key);
});
const checkInput = (input) => {
    const num = parseInt(input);
    if (isFinite(num)) {
        entry = entry + input.toString();
        result.innerHTML = entry;
        return;
    }
    switch (input) {
        case "+":
            subtotal = operation(operator, subtotal, parseInt(entry));
            entry = "";
            operator = "add";
            break;
        case "-":
            subtotal = operation(operator, subtotal, parseInt(entry));
            entry = "";
            operator = "minus";
            break;
        case "*":
            subtotal = operation(operator, subtotal, parseInt(entry));
            entry = "";
            operator = "multiply";
            break;
        case "/":
            subtotal = operation(operator, subtotal, parseInt(entry));
            entry = "";
            operator = "divide";
            break;
        case "Enter":
            subtotal = operation(operator, subtotal, parseInt(entry));
            console.log(subtotal);
        default:
            console.log(input);
            break;
    }
};
if (entry === "") {
    result.innerHTML = "0";
}
console.log(typeof submitBtn !== null);
const resetBtn = document.querySelector("#reset");
resetBtn.addEventListener("click", () => {
    subtotal = 0;
    entry = "";
});
// if (submitBtn !== null) {
submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    console.log(entry);
    subtotal = operation(operator, subtotal, parseInt(entry));
    entry = "";
    console.log(subtotal);
    result.innerHTML = subtotal.toString();
});
// }
buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        if (e.target !== null) {
            console.log(e.target.value);
            checkInput(e.target.value);
        }
    });
});
