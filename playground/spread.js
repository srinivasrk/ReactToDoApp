// function add(a, b){
//   return a + b;
// }
//
// console.log(add(3,1));
//
// var toAdd = [9,5];
//
// console.log(add(...toAdd));

function helloThere(name, age){
  console.log(`Hello there you are ${name} and you are ${age} years old`)
}

var person = ['Srini', 26];
var personTwo = ['Jen', 25];

helloThere(...person);
helloThere(...personTwo);


var names = ['Mike', 'Ann'];
var final = ['srini', ...names];
final.forEach(function(name) {
  console.log(name);
})
