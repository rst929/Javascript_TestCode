// var x = 10; // deprecated in ES5 --> scoped-bound, available within the intrinsic scope where defined
// let y = 10; // introduced in ES6 --> scoped-bound, explicitly defined scope (block scope)
// const z = 10; // introduced in ES6 --> scoped-bound, explicitly defined scope and immutable (block scope)

// // JS --> global, local scopes (stop saying these things)

// // Scopes = Window, Document, Function, Block

// // Window = browser tab/ node process
// // Document = collection of html, css, js files
// // Function = function in js, statement /expression /object method
// // Block = inner body within a function

// //object literal, JSON = JS Object Notation
// let movie = {
//   title: "Back to the Future"
// };

// let movie2 = movie;

// movie2.title = "Watchmen";

// console.log(movie);

// //object constructor
// function Movie() {
//   this.title = "Futurama";
//   return "N/A";
// }

// movie = new Movie();
// movie2 = new Movie();
// movie3 = Movie();

// movie.title = "Ugly Delicious";
// movie2.title = "Yesterday";

// console.log(movie);
// console.log(movie2);
// console.log(movie3);

// //object creator
// movie = Object.create(movie);
// movie2 = Object.create(movie);

// movie.title = "Fifth Element";
// movie2.title = "Fast and Furious";

// console.log(movie);
// console.log(movie2);

// // Isomorphic JS

// //function statement
// function add(a, b) {
//   return a + b;
// }

// function add2(a, b) {
//   if (typeof a == "number" && typeof b == "number") {
//     return add(a, b);
//   }

//   return NaN;
// }

// //function expression
// let add3 = function(a, b) {
//   return add2(a, b);
// };

// //function IIFE
// (function add4(m, n) {
//   console.log(add3(m, n));
// })(1, 2);

// //hoisting - for var only
// // scope of message starts here
// console.log(message);

// var message = "hello JS";

// //hoisting - not for let
// console.log(message);

// let nessage = 'hello JS';
// // scope of message starts here

// //function callback
// function execute(fn) {
//   fn();
// }

// function execute2(fn, arg) {
//   fn(arg);
// }

// execute(function() {
//   console.log("callback function");
// });

// function print() {
//   console.log("print message");
// }

// function jim(msg) {
//   console.log(msg);
// }

// execute(print);
// execute(jim);
// execute2(jim, "da man");

// //function inner
// function outer() {
//   function inner(msg) {
//     console.log(msg);
//   }

//   inner("i am inside");
// }

// console.log(outer());
// // console.log(inner()); // cannot be use

// //function closure
// function write() {
//   let line = 1; //scope starts here

//   return function print(msg) {
//     console.log(line + ": " + msg);
//     line += 1;
//   };
//   // scope ends here
// }

// let writeLine = write();

// writeLine("first line");
// writeLine("second line");
// writeLine("third line");

// write()("third line");

// //object constructor with methods
// function Human() {
//   let lastName = "Frank";
//   let firstName;

//   this.speak = function(msg) {
//     console.log(msg);
//   };

//   this.name = function(first) {
//     firstName = first;
//   };

//   this.fullName = function() {
//     console.log(firstName, lastName);
//   };
// }

// let h1 = new Human();
// let h2 = new Human();

// h1.fullName();
// h1.name("Dr.");
// h1.fullName();
// h2.fullName();
// h2.name("Jekyll");
// h2.fullName();

//arithmetic operators
//same as C#

//logical operators
// == (type coercion), === (strict equality), != (type coercion not), !== (strict equality not), rest same as C#

//DOM (document object model)
let header = document.querySelector("header"); // exactly no more than 1 node, 0 or 1.
let lis = document.querySelectorAll("nav li"); // always enumerable of at least 0.

header.style.color = "red";
lis.forEach(function(value) {
  value.style.backgroundColor = "green";
});
//READ ABOUT:
//event bubbling, event capturing

//event listener
function success(res) {
  let textarea = document.querySelector("#response");
  textarea.value = JSON.stringify(res);
//  res.json().then(
//    function(data) {
//      let obj = {
//        detail: null,
//        name: null,
//        mass: null
//      };
//
//      for (const key in obj) {
//        // model binding
//        obj[key] = data[key];
//      }
//
//      textarea.value = obj;
//      console.log(obj);
//    },
//    function(error) {
//      textarea.value = "ERROR";
//    }
//  );
}

function failure(res) {
  let textarea = document.querySelector("#response");

  textarea.value = "ERROR";
}

function clickEvent1() {
  let text = document.querySelector("#people");
//  let text2 = document.querySelector("#planets");
//  let text3 = document.querySelector("#starships");
  fetch(`https://swapi.co/api/people/${text.value}`).then(success, failure);
//  fetch(`https://swapi.co/api/planets/${text2.value}`).then(success, failure);
//  fetch(`https://swapi.co/api/starships/${text3.value}`).then(success, failure);
}
function clickEvent2() {
//  let text = document.querySelector("#people");
  let text2 = document.querySelector("#planets");
//  let text3 = document.querySelector("#starships");
//  fetch(`https://swapi.co/api/people/${text.value}`).then(success, failure);
  fetch(`https://swapi.co/api/planets/${text2.value}`).then(success, failure);
//  fetch(`https://swapi.co/api/starships/${text3.value}`).then(success, failure);
}
function clickEvent3() {
//  let text = document.querySelector("#people");
//  let text2 = document.querySelector("#planets");
  let text3 = document.querySelector("#starships");
//  fetch(`https://swapi.co/api/people/${text.value}`).then(success, failure);
//  fetch(`https://swapi.co/api/planets/${text2.value}`).then(success, failure);
  fetch(`https://swapi.co/api/starships/${text3.value}`).then(success, failure);
}

let people = document.querySelector("#btn-people");
let planets = document.querySelector("#btn-planets");
let starships = document.querySelector("#btn-starships");

people.addEventListener("click", clickEvent1);
starships.addEventListener("click", clickEvent2);
planets.addEventListener("click", clickEvent3);

// button.addEventListener("doubleClick", doubleEvent);

// form.addEventListener("submit", function() {
//   let text = document.querySelector("#searchbox");
//   console.log(text.value);
// }); // by default