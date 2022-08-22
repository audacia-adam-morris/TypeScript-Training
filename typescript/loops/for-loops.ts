/* --- TASK ---
1. Create an array of numbers with the elements - 1, 2, 3, 5, 8, 13, 21, 34.
2. Create a function called "findValue".
3. Parameters for the function are of type 'number' and an array ('[]') of numbers.
4. The return type is of type boolean.
5. Call the function for the following values and print out the 4 returned values: 2, 5, 6, 99.
6. Within the function, loop through the array to try and find the 4 values.
7. Run the command "ts-node for-loops.ts"
Is the output true, true, false, false?

*/

let myArray: number[] = [1, 2, 3, 5, 8, 13, 21, 34]; // declare and initialise an array of type number and populate it with values 
const numbersToFind: number[] = [2, 5, 6, 99]; // declare and initialise a second array with the values that we are searching for


function findValue(myArray: number[], numberToFind:number): boolean { 
    for (let index = 0; index < myArray.length; index++) {
      
   if(myArray[index] === numberToFind){
    return true;
   }
  }
  return false;
}

numbersToFind.forEach((number)=>{
console.log(findValue(myArray, number));


 
})

