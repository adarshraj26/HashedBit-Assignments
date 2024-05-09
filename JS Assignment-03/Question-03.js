let string = 'INDIA';

let arr = string.split('');

arr.splice(3, 0, 'ONES');

let output = arr.join('');

console.log(output);
