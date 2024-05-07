function sumOfProductDigits(n1, n2) {
    let str1 = n1.toString();
    let str2 = n2.toString();
    let sum = 0;

    for (let i = 0; i < str1.length; i++) {
        let digit1 = parseInt(str1[i]);
        let digit2 = i < str2.length ? parseInt(str2[i]) : 0;
        sum += digit1 * digit2;
    }

    return sum;
}

let n1 = 6;
let n2 = 34;
let result = sumOfProductDigits(n1, n2);
console.log(result); 
