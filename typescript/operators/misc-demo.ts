const misc1: number = 12;
const misc2: number = 10;
const misc3: number = 13;
const string1: string = "string1";
const string2: string = "string2";
const string3: string = "string3";

// 4. Using the variables create the following examples using the misc operators
// 4a. combine the two strings together and print out the result

let string4 = string1 + string2;
console.log(string4);

// 4b. Create a new function within the Math class called 'turnNegative' and using the negative operator.

function newFunction(returnedValue: number) {
  let misc4: number = 2;
  let misc5: number = -misc4;

  console.log(misc5);
}

function mathsNegative(turnNegative: number): number {
  return turnNegative;
}

console.log(mathsNegative(2));
