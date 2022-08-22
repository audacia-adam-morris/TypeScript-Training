class Car {
    // field
    engine: string;
    
    // constructor
    constructor(engine: string) {
      this.engine = engine;
    }
    
    // function
    display(): void {
      console.log("Engine is " + this.engine);
    }
  }

  let newCar = new Car("Petrol 1.6 litre");
  console.log(newCar.engine);
  
  // Example from the Net Ninja - Classes

  // A class can contain the following:
  // 1. fields - any variable declared within a class. These fields represent data pertaining to objects.
  // 2. Constructors - Responsible for allocating memory for the objects of the class.
  // 3. Functions - represent action an object can make. Also referred to as 'methods'. 
  // --- These components together are referred to as the 'data members' of the class. 

  class Invoice { // define the class properties
    client: string;
    details: string;
    amount: number;

    constructor(client: string, details: string, amount: number) { // the constructor initialises the properties. This means that whenever we create a new Invoice object we can pass in 3 different values for the 3 properties.
        this.client = client;
        this.details = details;
        this.amount = amount;
    }

    formatDetails() { // this is the method/function block
        return`${this.client} owes £${this.amount} for ${this.details}`
    }
}

const invoice1 = new Invoice('GM Jones', 'Accountancy', 250);
const invoice2 = new Invoice('KPMG', 'Consultancy', 2500);
const invoice3 = new Invoice('WM White', 'Logistics', 450);
// console.log(invoice1, invoice2, invoice3);
let Invoices: Invoice[] = []; // creates an array - only objects created using the Invoice class can be added to the array

Invoices.push(invoice1, invoice2, invoice3); // adds the invoice objects to the array

let newInvoice = new Invoice('a','b',30);
console.log(newInvoice);

// class userDetails {
    
//     lastName: string;
//     age: number;
//     identificationNumber: number;
//     address: string;
//     phoneNumber: number;

//     constructor(lastName: string, age: number, identificationNumber: number, address: string, phoneNumber: number) {
//         ;
//         this.address = address;
//         this.lastName = lastName;
//         this.age = age;
//         this.identificationNumber = identificationNumber;
//         this.address = address;
//         this.phoneNumber = phoneNumber;
//     }
//     userInfo() {
//         return `These are the personal details of ${this.lastName}: ${this.age, this.address, this.phoneNumber,this.identificationNumber}`
//     }
    
}

let newUser = 