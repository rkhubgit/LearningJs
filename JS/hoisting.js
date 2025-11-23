// Hoisting in js 


// JavaScript Hoisting refers to the process
// whereby the interpreter appears to move the 
// declaration of functions, variables or 
// classes      
// the top of their scope, prior to execution of 
// the code



//   The let and const Keywords

// Variables defined with let and const are hoisted to the top of the block, but not initialized.

// Meaning: The block of code is aware of the variable, but it cannot be used until it has been declared.

// Using a let variable before it is declared will result in a ReferenceError.

// The variable is in a "temporal dead zone" from the start of the block until it is declared:

// let x = 7; 
// function getName(){
//     console.log("Rohit Kumar");
//     var a = 8;
// }

// getName();
// console.log(x);
// console.log(getName);
// console.log(a);

// let x = 7;
// function getName(){
//     console.log('Rohit Kumar');
//     var a = 8;
// }
// getName();
// console.log(x);
// // console.log(a);
// console.log(getName);



// call  apply and bing methods


// let emp = {
//     name:"rohit kumar",
//     role: 'fullstack developer'
// }

// const printmyName = function(home){
//     console.log(` your full name is ${this.name} and your role is ${this.role} and your home is ${home}`)
// }

// printmyName.call(emp, 'Nehtaur')

// printmyName.apply(emp, ['Bijnor'])

// let printData = printmyName.bind(emp, 'Mandawar')

// printData()

