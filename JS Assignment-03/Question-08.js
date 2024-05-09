function repeatedSumOfDigits(num) {
    while (num >= 10) {
        let numStr = num.toString();
        let sum = 0;
        for (let digit of numStr) {
            sum += parseInt(digit);
        }
        num = sum;
    }
    return num;
}

let num = 456;
let result = repeatedSumOfDigits(num);
console.log(result); 
