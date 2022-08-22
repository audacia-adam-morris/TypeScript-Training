var exampleOne : number = 5;
var exampleTwo : number = 3;
var exampleThree : number = 2;
var exampleFour : number = 1;
var exampleFive : number = 6;


// var x = 25;
// x += 25;
// console.log(x);
// x -= 5;
// console.log(x);
// x /= 9;
// console.log(x);

function simpleAssignment(number : number) {
    //  exampleOne = exampleOne + exampleFive;
    //  console.log(exampleOne);
    
    // add and assignment
     exampleOne += exampleFive;
     console.log(exampleOne);
     
    // subtract and assignment 
    exampleOne -= exampleFive;
     console.log(exampleOne);
     
    // divide and assignment
     exampleOne /= exampleFour;
     console.log(exampleOne);
     
    // multiply and assignment
     exampleOne *= exampleThree;
     console.log(exampleOne);
     
}

simpleAssignment(0);

