//  six data types in javascript

// Number 
// Boolean
// String
// undefined
// null
// Symbol

// number 
// var myAge = 20;
// console.log(myAge);
// console.log(typeof(myAge));


// Boolean

// var myName = true;
// console.log(myName);
// console.log(typeof(myName));

// String

// var myName= 'Rohit';
// console.log(myName);
// console.log(typeof(myName));

// Undefined
// var rollNo = 
// console.log(rollNo);
// console.log(typeof(rollNo));

// Null
// var name = null;
// console.log(name);
// console.log(typeof(name));   bug of the js it will return the object type

// Data types practice in javascript
 
// console.log(10 + "20");  1020
// // console.log(9 - "5");    4
// console.log("Java " + " Script");  javaScript
// console.log(" " + 0);   0

// //Nan  Not a number example
// console.log("Rohit "-" Kumar");  nan

// console.log(true + true);   2 (1+1)
// console.log(true + false);  1
// console.log(false + true);  1
// console.log(false - true);  -1 

// Interview Question  in javascript

// Diffrence b/w Null and undefined in js
// Null example 
// var num = null;
// console.log(num);
// console.log(typeof(num));

// undefiend Example
// var myName = 
// console.log(myName);
// console.log(typeof(myName));

// 2nd Interview Question in javaScript 
// What is Nan in js

// Nan is a property of the Global object in javaScript 
// IN other words it is a variable  of a Global scope
// The initial value of Nan -> Not  a number

// var myPhoneNumber  = 9876543210;
// var myName = "Rohit Kumar";

// console.log(isNaN(myPhoneNumber));
// console.log(isNaN(myName));

// if(isNaN(myName)){
//     console.log("pleade enter a valid name");
// }

// NaN is Practice  
 

// NaN  == NaN;               True answer   
// Number.NaN === NaN;        True answer
// isNaN(NaN);                True answer
// isNaN(Number.NaN);         True answer
// Number.isNaN(NaN);         True answer

// console.log(Number.isNaN(NaN));