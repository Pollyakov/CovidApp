//! OOP in JS: Prototypes and function construtors
//! Everything in JS are objects expect primitive data types
//! All object are linked to a prototype

//Question is
//* how do we create prototypes
//* how do we link objects to prototypes
//* how can we create new objects

//! There are three ways
//* Constructor function
//* Es6 classes
//* Object.create()

//* Constructor function
//It's a technique to create objects from functions. This is how built methods like Array,s Maps,Sets are actually implemented

//* Es6 classes
// modren alternative to constructor functions
//they behave exactly the same way as construction functions they are just syntatic sugar.

//* Object.create()
// Its a simplier and more straight forward way to create object. But its really used.

//! Consturctor Function

const Person2 = function (firstName, lastName, birthYear) {
  //creating properties for my empty object
  this.firstName = firstName;
  this.lastName = lastName;
  this.birthYear = birthYear;
  //this is bad practice!
  this.calcAge = function () {
    console.log(2037 - this.birthYear);
  };
};
const martha = new Person2("Martha", "Simposn", 1990);
// console.log(martha);
// console.log(new Person("Timmy", 1990));

//* a new empty {} is created
//* When the function is called, this keyword will point to that newly created object.
//* new empty {} is linked to the functions prototype
//* this function will automatically return that empty object {}
// const timmy = new Person("Timmy", 1990);
// const harry = new Person("harry", "simposon", 1985);
// console.log(harry);
// harry.calcAge();
// console.log(harry instanceof Person);

const Person = function (firstName, lastName, birthYear) {
  //creating properties for my empty object
  this.firstName = firstName;
  this.lastName = lastName;
  this.birthYear = birthYear;
};
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};
console.log(Person.prototype);
const jimmy = new Person("Jimmy", "Simpson", 1985);
jimmy.calcAge();
// console.log(jimmy);
console.log(jimmy.__proto__);
console.log(jimmy.__proto__ === Person.prototype);
console.log(Person.prototype.isPrototypeOf(jimmy));
console.log(Person.prototype.isPrototypeOf(Person));

Person.prototype.species = "Human";

// console.log(jimmy.species);
console.log(jimmy.hasOwnProperty("species"));
console.log(jimmy.hasOwnProperty("firstName"));

//! prototype chaining

console.log(jimmy.__proto__.__proto__.__proto__);
console.log(Object.prototype);

//lets create an array findo ut their prototypes
const arr = [1, 2, 3, 4, 5];
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);

console.dir(document.querySelector("h1"));

console.dir((x) => x + 1);
