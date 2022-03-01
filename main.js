console.log('hello world')
const readline = require('readline')

const firstName = "kayleen";

let age = 31

let isCool = false

age = age +1

console.log('hi, my name is ' + firstName + ' and i am ' + age + ' years old.')
console.log(`hi, my name is ${firstName} and i am ${age} years old.`)

let x = 4
let y = 5
let z = 7 + 9
let sum = x + y + z
console.log(sum)


const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })

reader.question("Howdy, what's your name? ", function(answer) {
    console.log("Hi " + answer);
    reader.close();
  });