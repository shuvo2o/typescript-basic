"use strict";
const add = (a, b) => a + b;
const sub = (a, b) => a - b;
const mul = (a, b) => a * b;
const mod = (a, b) => a % b;
function div(a, b) {
    if (b === 0) {
        throw new Error("Cannot divide by 0");
    }
    return a / b;
}
function calculate(operation, a, b) {
    switch (operation) {
        case "+": return add(a, b);
        case "-": return sub(a, b);
        case "*": return mul(a, b);
        case "/": return div(a, b);
        case "%": return mod(a, b);
        default:
            throw new Error(`Invalid operation ${operation}`);
    }
}
const result1 = calculate("+", 10, 5);
console.log(result1); // 15
const result2 = calculate("-", 10, 5);
console.log(result2); // 5
const result3 = calculate("*", 10, 5);
console.log(result3); // 50
const result4 = calculate("/", 10, 5);
console.log(result4); // 2
const result5 = calculate("%", 10, 3);
console.log(result5); // 1
