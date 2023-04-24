// Callback funtion in js 

// A callback function is a function passed into another function as an argument,
//  which is then invoked inside the outer function to complete some kind of routine or action.

// setTimeout(function (){
//     console.log("Timer");
// }, 5000);

// function x(y){
//     console.log("X");
//     y();
// }
// x(function y(){
//     console.log("Y");
// });


//  high order functcon

// A programming language is said to have First-class functions when functions in that language are treated like any other variable. For example, in such a language, a function can be passed as an argument to other functions, can be returned by another function and can be assigned as a value to a variable.



// const radius = [3,1,2,4];

// const area = function(radius){
//     return Math.PI * radius * radius;
// };

// const cicumference = function (radius){
//     return 2 * Math.PI * radius;
// }

// const diameter = function (radius){
//     return 2 * radius;
// }

// const calculate = function (radius, logic){
//     const output = [];
//     for(let i = 0; radius.length; i++){
//         output.push(logic(radius[i]));
//     }
//     return output;
// };

// console.log(calculate(radius, area));
// console.log(calculate(radius, cicumference));
// console.log(calculate(radius, diameter));

// function x(y){
//     console.log("A");
//     y();
// }
// x (function y(){
//     console.log("B");
// })