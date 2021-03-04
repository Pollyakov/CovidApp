"use strict";

//! Rules of the this keyword
//* every function gets the this keyword
//* It points to the "owner" of the function in whixh the this keyword is used
//* This keyword is NOT static. It depends on how the function is called, and
 //its value is only assigned when the function is actually called.

//! Function calls
//* methods in objects: this keyword points to the object which the method 
//is called
//Owner: is the object who called the method
//*Normal functions: window object,strict-mode: undefined
//* arrow functions: do not get their own this keyword. Gets the this from
// lexically , pointing up.
//Owner: the parent scope
//* event listeners: this keyword will point to the DOM element that the handler is attached to
//Owner: Element that called the event listener

// global scope
// console.log(this);

//regular function

const calcAge = function (birthYear) {
  console.log(this);
  console.log(2037 - birthYear);
};
// calcAge(1980);

//arrow function

const calcAgeArrow = (birthYear) => {
  console.log(this);
  console.log(2037 - birthYear);
};
// calcAgeArrow(1990);

//* normal functions as a method
const timmy = {
  year: 1990,
  calcAge: function () {
    console.log(this);
    // console.log(2037 - this.year);
  },
};
// timmy.calcAge();

const johnny = {
  year: 2000,
};
//*method borrowing
johnny.calcAge = timmy.calcAge;
//now the this keyword points to johnny because im calling the method with 
//johnny who is the owner
// johnny.calcAge();
// console.log(johnny);
//!Always points to the object who calls the method. It is dynamic and not static

const f = timmy.calcAge;
// f();
//now when I cal the f() it is a normal function there is no owner

// var firstName = "Benjamin"; is window.firstName

//*arrow functions and normal functions inside a object
const ben = {
  firstName: "ben",
  year: 1995,
  greet: () => {
    console.log(this);
    console.log(this.firstName);
  },
};
//*arrow functions do not get their own this keyword it looks at its parent scope which is window in this example

// ben.greet();

//normal functions in methods

const ben2 = {
  firstName: "ben",
  year: 1995,
  greet: function () {
    console.log(this);
    console.log(this.firstName);
  },
};
// ben2.greet();
//!Its always best practice if you have a method do them in a regular function not arrow function

const john = {
  year: 1970,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
    const self = this;
    //get a reference to this from the calcAge method
    const isOld = function () {
      //now I can use the reference here in my normal function
      console.log(self.year > 1960);
      console.log(self);
    };
    isOld();
  },
};

john.calcAge();

const john2 = {
  year: 1970,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
    const isOld = () => {
      //arrow functions will look at its parent scope which is the calcAge method so this will be pointing to the object
      console.log(this.year > 1960);
      console.log(this);
    };
    isOld();
  },
};
john.calcAge();

//* Event listeners

document.querySelector("h1").addEventListener("click", function () {
  //normal functions, the this will get binded to who ever called then. 
  //Arrow functions the this keyword does not get binding 
  //to anything so it will get this from the global object which points
  // to the window
  console.log(this);
});
