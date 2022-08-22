// Relational Operators

// Examples from the module page

const a2: number = 4;
const b2: number = 9;
const a : number = 2;
// // Greater than
let answer = a > b; // false
console.log(answer);
// Less than
let answer12 = a < b; // true
console.log(answer12);
// Greater than or equal to
let answer13 = a >= b; // false
console.log(answer13);
// Less than or equal to
let answer14 = a <= b; // true
console.log(answer14);

// My function using greater than


function greaterThan(firstNumber : number, secondNumber : number) : void{
    if (firstNumber > secondNumber) {
    console.log("The number is higher!");
    }
        else {
            console.log("The first number is lower");
        }
    }

    greaterThan(5,2);
    greaterThan(23,14);
    greaterThan(24,56);

// My 'less than' function

    function lessThan(firstNumber : number, secondNumber : number) : void  {
        if (firstNumber < secondNumber){
            console.log("The first number is less than " + secondNumber);
        }
        // else {
        //     console.log("The second number is less than " + firstNumber)
        // }
        // 
    }

    lessThan(20,23);
    lessThan(4124,21);
    lessThan(1,2);
    lessThan(99,98);

// My 'Greater than or equal to' function

    function greaterThanOrEqualTo(firstNumber : number, secondNumber : number) : void {
        if (firstNumber >= secondNumber) {
            console.log(firstNumber + ' is greater than or equal to ' + secondNumber) 
        } else {
            console.log(firstNumber + ' is less than or equal to ' + secondNumber)
        }
    }
    greaterThanOrEqualTo(20,21);
    greaterThanOrEqualTo(21,20);
    greaterThanOrEqualTo(1230,47);
    
// My 'less than or equal to' function

function lessThanOrEqualTo(firstNumber : number, secondNumber : number) : void {
    if (firstNumber <= secondNumber) {
        console.log(firstNumber + ' is less than or equal to ' + secondNumber)
    } else {
        console.log(firstNumber + ' is greater than or equal to ' + secondNumber)
    }
}

lessThanOrEqualTo(22,23);
lessThanOrEqualTo(100,224);
lessThanOrEqualTo(213124,101);

// Equality function

function equalityFunction(firstNumber : number, secondNumber : number) : void {
    if (firstNumber === secondNumber) {
        console.log(firstNumber + ' is equal to ' + secondNumber)
    } else {
        console.log(firstNumber + ' is not equal to ' + secondNumber)
    }
}

equalityFunction(21,22);
equalityFunction(21,21);
equalityFunction(1510,124);

// My 'not equal to' function

function notEqualTo(firstNumber : number, secondNumber : number) : void {
    if (firstNumber != secondNumber) {
        console.log(firstNumber + ' is not equal to ' + secondNumber)
    } else {
        console.log(firstNumber + ' is equal to ' + secondNumber)
    }
}

notEqualTo(20,21);
notEqualTo(20,20);

// Create a function which checks if a number is between 2 other numbers

function checkNumber(inputtedNumber : number, minNumber : number,maxNumber:number) :boolean {
    
    if(inputtedNumber >= minNumber && inputtedNumber <= maxNumber){
        return true;
    }
    return false;

}

console.log(checkNumber(45,45,100));

// Create functions for whether a number is positive and negative

function positiveOrNegative(inputtedNumber : number) : string {
    if(inputtedNumber >= 0){
        return('Your number is positive');
    } 
        return('Your number is negative')
}

console.log(positiveOrNegative(41));
console.log(positiveOrNegative(-1));

// *** Finishing comments *** //

// When using 'if-else' statements it is not necessary to create an else statement because if the 'if' statement isn't true then the default block will be hit anyway. 
