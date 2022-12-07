/**
 *
 * @param a:number
 * @param b:mumber
 * @returns the result of the two numbers added
 */
const add = (a, b) => {
    return a + b;
};
/**
 *
 * @param a:number
 * @param b:mumber
 * @returns the result of a minus b
 */
const minus = (a, b) => {
    return a - b;
};
/**
 *
 * @param a:number
 * @param b:mumber
 * @returns the result of the two numbers multiplied
 */
const multiply = (a, b) => {
    return a * b;
};
/**
 *
 * @param a:number
 * @param b:mumber
 * @returns the result of a divided by b
 */
const divide = (a, b) => {
    return a / b;
};
/**
 *
 * @param operator "add" "multiply" "minus" "divide"
 * @param a previous total
 * @param b input
 * @returns the result of the opearation
 */
const operation = (operator, a, b) => {
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
