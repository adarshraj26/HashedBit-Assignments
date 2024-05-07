function calculate(operation, num1, num2) {
    let result;
    switch (operation) {
        case 'add':
            result = num1 + num2;
            break;
        case 'subtract':
            result = num1 - num2;
            break;
        case 'multiply':
            result = num1 * num2;
            break;
        case 'divide':
            if (num2 !== 0) {
                result = num1 / num2;
            } else {
                result = "Cannot divide by zero";
            }
            break;
        default:
            result = "Invalid operation";
    }
    return result;
}

console.log(calculate('add', 5, 3));
console.log(calculate('subtract', 10, 4));
console.log(calculate('multiply', 7, 2));
console.log(calculate('divide', 8, 2));
console.log(calculate('divide', 8, 0));
console.log(calculate('modulus', 8, 2));
