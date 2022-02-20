'use strict';

// Contructor functions start with a capital letter
// Arrow functions down work in constructor functions because they have no this keyword
// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;

//   // Never create a function in a constructor function
//   //   this.calcAge = function () {
//   //     console.log(2037 - birthYear);
//   //   };
// };

// const jonas = new Person('Jonas', 1991);
// console.log(jonas);

// 1. New {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically returns {}

// // Prototypes
// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };

// jonas.calcAge();

// console.log(jonas.__proto__);
// console.log(jonas.__proto__.__proto__);

// Class Expression
// const PersonCl = class {}

// Class Declaration
class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(2037 - this.birthYear);
  }
}

const jessica = new PersonCl('Jessica', 1996);
console.log(jessica);
jessica.calcAge();
