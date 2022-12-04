const add = (a, b) => {
    return a + b;
};
const minus = (a, b) => {
    return a - b;
};
const multiply = (a, b) => {
    return a * b;
};
const divide = (a, b) => {
    return a / b;
};
const operation = (operator, a, b) => {
    console.log(operator);
    if (operator === "add") {
        console.log("prout");
        return add(a, b);
    }
    if (operator === "minus") {
        return minus(a, b);
    }
    if (operator === "multiply") {
        return multiply(a, b);
    }
    if (operator === "divide") {
        return divide(a, b);
    }
    return a;
};
export { add, minus, multiply, divide, operation };
