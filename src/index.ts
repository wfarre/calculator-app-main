import {add, minus, multiply, divide, operation} from "../src/operations";
alert("yo")

let entry: string = "";

let subtotal: number = 0

let operator: string = "add";

const result: Element | null = document.querySelector("#result");
const submitBtn: Element | null = document.querySelector('#submit');
const buttons = document.querySelectorAll(".btn");

window.addEventListener('keyup', (e) => {
    checkInput(e.key);
})

const checkInput = (input:string):void => {
    const num: number = parseInt(input);

    if (isFinite(num)) {
        entry = entry + input.toString();
            (result as HTMLBodyElement).innerHTML = entry;
        return;
    }

    switch (input) {
        case "+":
            subtotal = operation(operator, subtotal, parseInt(entry) );
            entry = ""
            operator = "add"
            break;
        case "-":
            subtotal = operation(operator, subtotal, parseInt(entry) );
            entry = ""
            operator = "minus"
            break;
        case "*":
            subtotal = operation(operator, subtotal, parseInt(entry) );
            entry = ""
            operator = "multiply"
            break;
        case "/":
            subtotal = operation(operator, subtotal, parseInt(entry) );
            entry = ""
            operator = "divide"
            break;
        case "Enter":
            subtotal = operation(operator, subtotal, parseInt(entry) );
            console.log(subtotal);
        default:console.log(input);
            break;
    }

}

if(entry === ""){
    (result as HTMLBodyElement).innerHTML = "0";
}



console.log(typeof submitBtn !== null);

const resetBtn = document.querySelector("#reset");

(resetBtn as HTMLButtonElement).addEventListener("click", () => {
    subtotal = 0;
    entry = "";

});


// if (submitBtn !== null) {
    (submitBtn as HTMLButtonElement).addEventListener("click", (e : any) => {
        e.preventDefault();
        console.log(entry);
        subtotal = operation(operator, subtotal, parseInt(entry))
        entry="";
        console.log(subtotal);
            (result as HTMLBodyElement).innerHTML = subtotal.toString();
    })
// }




buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault()
        if(e.target !== null){
            console.log((e.target as HTMLButtonElement).value);
            checkInput((e.target as HTMLButtonElement).value)
        }
    })

})







