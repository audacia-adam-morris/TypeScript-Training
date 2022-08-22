// function pizzaOrder (
//     pizzaName : String, pizzaQuantity : number
// ): String {
//     return `You have ordered ${pizzaQuantity} ${pizzaName} pizza `; // format of `${variable name}` allows me to insert the variable name directly into the string. :)
// } 
// console.log(pizzaOrder('pepperoni',3)) // remember that you can pass values to the function when initialised 

// Create a function which finds the first 10 numbers in the Fibonacci Sequence

function fibonacci(numberOfElements : number): number[] { // return value "number of elements = function parameters and type)

  // Tasks

  // 1. Define the amount of number in the sequence that we need to return [x] - numberOfElements as a parameter
  // 2. Iterate through so that we can return the number of elements the user wants [x]
  // 3. When iterating through, we need to find the next number in the sequence
  // 4. Return the number of elements in the seqence. 
  let fibonacciSequence: number[] = []; // initialise an empty array 

  let number1 : number = 0;
  fibonacciSequence.push(number1); // push the number to the array
  let number2 : number = 1;
  fibonacciSequence.push(number2);
  for (let index = 1; index < numberOfElements - 1; index++) {
    // two things that we need to update each time we iterate through.
    number1 = fibonacciSequence[index -1];
    number2 = fibonacciSequence[index];
    let nextNumberInTheSequence : number = number1 + number2;
    // Need to assign the next number in the sequence to 'fibonacciSequence'
    fibonacciSequence.push(nextNumberInTheSequence);
  }

  return fibonacciSequence;
  }



  const fibonacciSequence = fibonacci(10);
  console.log(fibonacciSequence);

// CURRENT TASK --- return perfect squares ---


function perfectSquares(): void {
  // 1.
  // 2.
  // 3. 
  // 4.
  // 5.
}

// Create a function which checks if a number is a perfect square

function perfectSquare(squareNumber : number) : number | void | string {
  for (let num = 1; num < 1000; num++ ) {
    if (num * num === squareNumber) {
      return num;
    } else if (squareNumber > 1000) {
      return 'Your number is too high';
    }
   
  }
  
  return 'Your number is not a perfect square';

}

console.log(perfectSquare(1033));
console.log(perfectSquare(4102))
console.log(perfectSquare(36));
// const fibonacciSequence = fibonacci(10);
// console.log(fibonacciSequence);