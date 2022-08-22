class userDetails {
  firstName: string;
  lastName: string;
  dateOfBirth: Date;
  emailAddress: string;

  constructor(
    firstName: string,
    lastName: string,
    dateOfBirth: Date,
    emailAddress: string
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dateOfBirth = dateOfBirth;
    this.emailAddress = emailAddress;
  }
  userInfo() {
    console.log(
      "This user has the following user Information: \n" + 'First Name: \n' +
        this.firstName + '\n' +
        "Surname: \n" + this.lastName + '\n' + 'Date Of Birth: \n' + Intl.DateTimeFormat("en-GB").format(this.dateOfBirth),'\n' + 'email address: \n' + this.emailAddress
    );

    // return `These are the personal details of ${this.firstName}${this.lastName}: ${this.address, this.dateOfBirth,this.eyeColour,this.height,this.phoneNumber,this.emailAddress}`
  }
}

let newUser1 = new userDetails(
  "Joe",
  "Bloggs",
  new Date(1992, 1, 2),
  "bigjoe@gmail.com"
);
console.log(newUser1);

let newUser2 = new userDetails(
  'Adam',
  'Lee',
  new Date(2000,11,2),
  'emailuser1@email.com'
);
console.log(newUser2);
newUser1.userInfo();
newUser2.userInfo();