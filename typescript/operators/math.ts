const newNumber: number = 5;
const newUserNumber: number = 5;
let a: number = 10;
let b: number = 5;
const c: number = 123

// Addition
function findSum(numberOne: number, numberTwo: number): number {
    return numberOne + numberTwo;
}
let answer1 = findSum(a, b);
console.log('The answer is ' + answer1);

// Subtraction
let answer2 = a - b;
console.log('The answer is ' + answer2);

// Multiplication
let answer3 = a*b;
console.log('The answer is ' + answer3);

// Division
let answer4 = a / b; 
console.log('The answer is ' + answer4);

// Exponentiation
let answer51 = a ** b; 
console.log('The answer is ' + answer5);

// Modulus
let answer6 = a % b; 
console.log('The answer is ' + answer6);

// Increment 
let answer7 = a++;
console.log('The answer is ' + answer7);

// Decrement
let answer8 = a--;
console.log('The answer is ' + answer8);

let i : number = 8;
let j : number = 4;
let answer9  = j > i;
console.log(answer9);
console.log(j > i);

let answer10 : number = 5;
let answer11 : number = 2;

console.log(answer10 % answer11)

function mod(
    dividend: number,
    divisor: number,
): [quotient: number, remainder: number] {
    var quotient: number = dividend / divisor;
    var remainder: number = dividend % divisor;
    return[quotient, remainder]
}