// Logical Operators
// These combine two or more conditions. Logical operators return a Boolean e.g. true/ false.

const a1: number = 10;
const b1: number = 3;
const c1 : number = 12;
const d1 : number = 13;
const e1 : number = 14;

// And - all of the logical expression are true.

let answer5 = a1 > 8 && b1 > 8; // false
// console.log(answer5);
// // Or - at least one of the logical expression are true.
// let answer6 = a1 > 8 || b1 > 8; // true
// console.log(answer6);
// // Not - inverse checks the logical statement.

// let answer7 = !(b1 > 8); // true
// console.log(answer7);

// let myAnswer = (a1 > b1 && b1 > a1) || c1 > a1;
// console.log(myAnswer);

function evalTrue() {
    let evalTrueResult = d1 > b1 && e1 > d1;
    console.log(evalTrueResult);
//     if (evalTrueResult) {
//         console.log(evalTrueResult);
//     }
//     else {
//         console.log('false');
// }
}

evalTrue();

let newAnswer : number = 10;
let newSubmit : number = 9;

let inverseOperator = !(newAnswer > newSubmit);
    console.log(inverseOperator);
inverseOperator;
