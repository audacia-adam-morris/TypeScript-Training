// First Name, Last Name, Date of Birth, Eye colour, Email, Height
interface IPerson { // interface variable names must be prefaced by a capitalised 'I' to designate an interfac
    firstName: string;
    lastName: string;
    dateOfBirth: Date;
    EyeColour: string;
    emailAddress: string;
    height: number;
  }
  ​
  // Person class can now be re written as the following to have the contract defined on the interface IPerson.
  class Person implements IPerson {
    firstName: string;
    lastName: string;
    
    sayHi(): string {
      return "Hi";
    }
  