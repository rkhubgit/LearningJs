//          VAR VS LET VS CONST

//                 VAR                                LET                                   CONST

// 1. Scope:       Function Scope                      Block Scope                            Block Scope
// 2. Re-declare:  Can be re-declared                  Cannot be re-declared                   Cannot be re-declared
// 3. Re-assign:   Can be re-assigned                  Can be re-assigned                      Cannot be re-assigned
// 4. Initialize:  Can be declared without value        Can be declared without value           Must be initialized at declaration
// 5. Hoisting:    Hoisted (initialized as undefined)   Hoisted but in TDZ (error if accessed)  Hoisted but in TDZ (error if accessed)


// var myName = "thapa technical";
// console.log(myName);

// myName = "vinod thapa";
// console.log(myName);

// let myName = "thapa technical";
// console.log(myName);

// myName = "vinod thapa";
// console.log(myName);


// const myName = "thapa technical";
// console.log(myName);

// myName = "vinod thapa";
// console.log(myName);



// function biodata() {
//   const myFirstName = "Vinod";
//   console.log(myFirstName);

//   if(true){
//     const myLastName = "thapa";
//   }

//   // console.log('innerOuter ' + myLastName);
// }

// console.log(myFirstName);

// biodata();


//        Template litrals(Template String)


// JavaScript program to print table for given number (8)?

// output :  8 * 1 = 8 
//          => 8 * 10 = 80
//          8 * 2 = 16(8*2)

// for(let num=1; num<=10; num++){
//     tableof = 8;
//     console.log(`${tableof} * ${num} = ${tableof * num}`);

// }

//              Default Paremeter

// Default function parameters allow named parameters to be 
// initialized with default values if no value or undefined is passed.

// function mult(a,b=5){
//   return a*b;
// }

// console.log(mult(3));

//              Destructuring in ES6

// The destructuring assignment syntax is a JavaScript expression 
// that makes it possible to unpack values from arrays, 
// or properties from objects, into distinct variables.

//   Array Destructuring in js 

// const myBiodata = ['rohit','kumar',20];


// let myFName = myBioData[0];
// let myLName = myBioData[1];
// let myAge = myBioData[2];
  
// let [myFName, myLastName, myAge] = myBiodata;
// console.log(myBiodata);

// we can add values too 

// let [myFName, myLastName, myAge, myDegree="b.tech"] = myBiodata;
// console.log( myDegree);

// object desturcturing 

// const myBiodata = {
//     myFname: 'rohit',
//     myLname: 'kumar',
//     myAge: 20
// }
// // let age = myBioData.age;
// // let myFname = myBioData.myFname;

// let {myFname, myLname, myAge, myDegree='b.tech'} = myBiodata;
// console.log(myDegree);

//             object properties 

// ➡ we can now use Dynamic Properties

// let myName = 'rohit';
// const myBioData = {
//     [myName]: 'hello how are you',
//     [20]: 'is my age'
// }
// console.log(myBioData);


// ➡ no need to write key and value, if both are same 

// let myName = "vinod thapa";
// let myAge = 26;
// const myBio = {myName,myAge}
// console.log(myBio);

//                 6️ Arrow Function 

//  Normal Way of writing Function  

// console.log(sum()); 

// function sum() {
//   let a = 5; b = 6;
//   let sum = a+b;
//  return `the sum of the two number is ${sum}`;
// }

//  How to convert in into Fat Arrow Function 

// const sum = () => `the sum of the two number is ${(a=5)+(b=6)}`;

// console.log(sum()); 

//                         Spread opreator

// // // 2nd time add one more color on top and tell we need to write it again 
// // // on myColor array too 

// const colors = ['red','green','blue', 'white','pink'];
// // const myColors = ['red', 'green', 'blue', 'white','pink', 'yellow', 'black'];

// const myFavColor = [...colors, 'yellow', 'black'];

// console.log(myFavColor);

//                   ES7  Features

// 1.                    Array.include

// const colors = ['red','green','blue','white','pink'];
// const isPresent = colors.includes('purple');
// console.log(isPresent);


// ES8 Features 

// String padding
// Object.values()
// Object.entries()

// const message = "my name is vinod";
// console.log(message);
// console.log(message.padStart(5));
// console.log(message.padEnd(10));


// const person = { name: 'Fred', age: 87 };

// // // console.log( Object.values(person) );
// const arrObj =  Object.entries(person);
// console.log(Object.fromEntries(arrObj));



// ES2018

// const person = { name: 'Fred', age: 87, degree : "mcs" };
// const sPerson = { ...person };

// console.log(person);
// console.log(sPerson);


// ES2019
// Array.prototype.{flat,flatMap}
// Object.fromEntries()

// ES2020
// #1: BigInt

// let oldNum = Number.MAX_SAFE_INTEGER;
// // console.log(oldNum);
// // console.log( 9007199254740991n + 12n );
// const newNum = 9007199254740991n + 12n;

// console.log(newNum);
// console.log(typeof newNum);


// const foo = null ?? 'default string';
// console.log(foo);

// ES2014

// "use strict";

// x = 3.14; 
// console.log(x);