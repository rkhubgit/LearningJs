// Function in JavaScript


// A JavaScript function is a block of code designed to perform a particular task.

// Defination  of function 

// A function definition (also called a function declaration, or function statement) 
// consists of the function keyword, followed by:

// The name of the function.
// A list of parameters to the function, enclosed in parentheses and separated by commas.
// The JavaScript statements that define the function, enclosed in curly brackets, {...}.

// var a = 10;
// var b = 20;
// var sum = a + b;
// console.log(sum);

// function sum(){
//     var a = 10, b = 20;
//     total = a + b;
//     console.log(total);
// }
// sum();

//  calling a function in JS
// Defining a function does not execute it.
// A JavaScript function is executed when "something" invokes it (calls it).

// function sum(){
//     var a = 19, b= 29;
//     total = a + b;
//     console.log(total);
// }
// sum();

// Function Parameter vs Function Arguments
// Function parameters are the names listed in the function's definition. 
// Function arguments are the real values passed to the function.

// function sum(a,b){
//     total = a + b;
//     console.log(total);
// }
// sum(23, 24);
// sum(34,53);

// Why function to be used 
// You can reuse code: Define the code once, and use it many times.
// You can use the same code many times with different arguments, 
// to produce different results.

//                 OR

// A function is a group of reusable code which can be called anywhere 
// in your program. This eliminates the need of writing the same code 
// again and again.

// function expression 
// "Function expressions simply means 
// create a function and put it into the variable "

// function sum(a, b){
//     var total = a + b;
//     console.log(total);
// }
// var funExp = sum(5,14);
// funExp;

// Return Keyword
// When JavaScript reaches a return statement, 
// the function will stop executing.

// Functions often compute a return value.
// The return value is "returned" back to the "caller"

// function sum(a, b){
//     return total = a + b;
// }
// var funExp = sum(3,5);
// console.log('the sum of two number is ' + funExp);


// Anonymous function
// A function expression is similar to and has the same syntax 
// as a function declaration One can define "named" 
// function expressions (where the name of the expression might 
// be used in the call stack for example) 
// or "anonymous" function expressions.

// var funExp = function(a,b){
//   return total = a+b;
// }

// var sum = funExp(15,15);
// var sum1 = funExp(20,15);

// console.log(sum > sum1 );


// var x = 1;
// a();
// b(); 

// console.log(x);

// function a(){
//     var x = 100;
//     console.log(x);
// }

// function b(){
//     var x = 10;
//     console.log(x);
// }

// var x = 10;
// function a(){
//     var b = 19;

// }  
// console.log(x);
// console.log(this.x);
// // console.log(window.x);


// FUNCTION STATEMENT AND FUNCTION DECLRATION 
//  function a(){
//     console.log("a called");
// }

// // FUNCTION EXPRESSION 
// const b = function(para1){
//     return function xyz(){

//     }
// }
// console.log(b());

