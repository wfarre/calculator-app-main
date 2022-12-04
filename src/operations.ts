const add = (a: number, b: number) => {
    return a + b;
}

const minus = (a: number, b: number) => {
    return a - b;
}
const multiply = (a: number, b: number) => {
    return a * b;
}
const divide = (a: number, b: number) => {
    return a / b;
}

const operation = (operator :string, a:number, b:number) : number => {
    console.log(operator);
    
    if(operator === "add"){
        console.log("prout");
        
        return add(a,b)
    }
    if(operator === "minus"){
        return minus(a,b)
    }
    if(operator === "multiply"){
        return multiply(a,b)
    }
    if(operator === "divide"){
        return divide(a,b)
    }
    return a;
}

export {add, minus, multiply,divide, operation};