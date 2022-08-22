/* Conditional and Type Operators
 ?: - conditional ternary expression - allows us to execute 2 different paths of code dependant on whether the test is true or false
typeof - Type of - returns the data type of an operand (remember in 4 * 12, 4 and 12 are the operands anf * is the operator)
instanceof - Instance of - returns a boolean value dependant on if the operand is the data type

*/

// Tutorial 4a - Pick two number variables and add them together, if the number is positive subtract the number, if the test is positive print out the result

let var1 : number = 6;
let var2 : number = 2;
let var3 : number = 1;

let stringVar1 : string;
let stringVar2 : string;
let stringVar3 : string;

let sumOfNumbers : number = var1 + var3;
let results : number = sumOfNumbers > 0 ? sumOfNumbers : var1 - var3;
console.log(results);



let name1 : string = 'adam';

let name2 : string = name1 === 'adam' ? name1 : 'false'; 

name1 === "adam" ? console.log(name1) : console.log(false)

let name3: string;
if (name1 === "adam") {
    // inbetween ? and :
    name3 = name1;
} else {
    // after : 
    name3 = "false";
}

const age = 21;
const beverage = age >= 21 ? "Old enough" : "Too young"; // use for simple, single-line functions. Otherwise ternary operators can become convoluted and hard to read due to the syntax using colon and question marks
console.log(beverage);

// Tutorial - Conditional and Type Operators
// Exercise 4b - Pick 2 random variables and if both are oftype number, find the product (multiply them). If not, print out a string stating 'not all test objects are numbers'. 

// NOTE - the typeof operator needs the type to be stated in single quotation marks. Normal variablename : number will not be accepted.

let numberOne : number = 13;
let numberTwo : number = 10;
let ex3 : string = 'cheese';

console.log(typeof 'hello'); // returns 'string' as type

if (typeof numberOne === 'number' && typeof numberTwo === 'number') { // typeof requires type to be in a string, not typed like a normal type
    console.log(numberOne * numberTwo);
   }  else console.log('not all test objects are numbers'); 

let b = 4;

let typeOfB: any = typeof b;
console.log(typeOfB);


