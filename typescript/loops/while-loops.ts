/* --- Task ---
1. Initalise and declare a number variable
2. Determine how many times the variable can be divided by 2, until the value is less than one.
3. Call the function for the following values: 1, 2, 33, 5679.
4. Return how many times the original number has been divided to get under or equal to 1.
5. Run the command 'ts-node while-loops.ts'.
6. Is the output 1, 2, 6 and 13?

*/

// Rhys' example

// let x = 0;
// ​
// while (x < 5) {
//   console.log("x is below the value of 5; x = " + x);
//   x++;
// }

let myParameter = 0;
let myCounter = 0;

 // -- Incorrect - needed to declare and initialise counter otherwise it loops infinitely -- 

// function howManyTimesDividedByTwo(myParameter: number): number {
//   while (myParameter > 1) {
//     myParameter / 2;
//     console.log(myParameter);
//     myParameter++;
//   }
//   return myParameter;
// }


let myNumber: number = 10;

function howManyTimesDividedByTwo(myNumber : number){ // myNumber in LOCAL SCOPEe - so the variable on line 35 does not have any effect on this function. 
    let counter:number = 0;
    while (myNumber > 0) {
        myNumber = Math.trunc(myNumber / 2);
        // console.log(myNumber);
        counter++;
    }
    return counter;
}


console.log(howManyTimesDividedByTwo(1));
console.log(howManyTimesDividedByTwo(2));
console.log(howManyTimesDividedByTwo(33)); // returns '6' as the number of times it was divided because it will still divide any value above zero! 
console.log(howManyTimesDividedByTwo(5679));
 
// howManyTimesDividedByTwo(2);
// howManyTimesDividedByTwo(33);
// howManyTimesDividedByTwo(5679);
