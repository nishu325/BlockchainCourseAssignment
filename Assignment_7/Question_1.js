const prompt = require('prompt-sync')();

let a = prompt("Enter the string : ")
if (a.length > 4) {
    a = a.substring(0, 4)
}
console.log(a);