/* --- TASK ---

1. Create a function called 'startCallingBingoNumbers' with no parameters and a return type of number.
2. Within the function Randomly call a number between 1 and 99, return from the function when each of the numbers have been called with the amount of times we had to go into the while loop.
3. Use the Math.Rand() function to get a random number
4. Call the function and print out the returned value of how many times that function had to go through the while loop
5. Run the command ts-node do-while-loops.ts
6. Is the number printed out greater than or equal to 99?
7. Run the command again, is there a different number?

8. EXTRA - Can you think of a way we can reduce the number of times we need to go through the while loop? */
// How do we get random whole numbers?
// The Math.random function gives random decimal numbers. Math.floor rounds down numbers to the nearest whole number. Therefore if we use (Math.floor(Math.random())), we can generate random numbers and round them down to the nearest whole number. We can then multiply the number by a modifying number to give ourselves a maximum limit. 

 

// Random whole number with a range using an arrow (?) / lambda? function
let randomWholeNumberWithARange = (min: number, max: number) => console.log(Math.floor(Math.random() * (max - min + 1) + min));
randomWholeNumberWithARange(1, 99);

function startCallingBingoNumbers(): number { // ask Rhys why doesn't this need a return type of :number if it was specified in the task? 

    let bingoCounter = 0;
    let randomWholeNumber = (Math.floor(Math.random() * 99)); // doesn't auto-generate
    // let secondRandomWholeNumber = (Math.floor(Math.random() * 99)); // declare
    do { 
        randomWholeNumber = (Math.floor(Math.random() * 99)); // re-assign
        console.log(randomWholeNumber);
        // bingoCounter = bingoCounter + 1;
        bingoCounter++;
        
    } while (bingoCounter < 99);
    return bingoCounter;
    // let myNumber2 : number = console.log(Math.floor(Math.random() * 25));  
}

console.log(startCallingBingoNumbers()); // clss, enums
 