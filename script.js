// values and variable in javascript

// var myName = "Rohit Kumar";
// var myAge = " 20";
// console.log(myName);
// console.log(myAge);

// Variable  Naming Practice in Javascript

// var myName = "Ankona Singh";
// var 1myName = " Rohit Kumar";  only this variable is a invalid variable
// var _myName = "Ankona Singh";
// var _1my_Name = "Rohit Kumar";
// var $myName = "Rohit Kumar";
// var myName% = "kumar"; only this variable is a invalid variable

// console.log(myName%);

/*      Data Type in Javascript     */
// Primtive Data Type in Javascript
//1. undefined 
//2. Boolean
//3. Number
//4. String
//5. Null
//6. Symbol

// Number 

// var myAge = 20;
// console.log(myAge);
// console.log(typeof(myAge));

// // Boolean

// var myName = false;
// console.log(myName);
// console.log(typeof(myName));

// String in javascript

// var myName = "Rohit Kumar";
// console.log(myName);
// console.log(typeof(myName));

// Undefined in javascript 

// var myName = 
// console.log(myName);

// Data types practice in javascript
 
// console.log(10 + "20");
// // console.log(9 - "5");
// console.log("Java " + " Script");
// console.log(" " + 0);

// //Nan  Not a number example
// console.log("Rohit "-" Kumar");

// console.log(true + true); 
// console.log(true + false);
// console.log(false + true);
// console.log(false - true);

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

/// Opreator in javascript 

// 1. Assignment opreator
// 2. Arithmetic opreator
// 3. Comparision opreator
// 4. Logical opreator
// 5. String opreator 
// 6. Conditional oprearot 

// Assignment opreator 
// -> An Assignment opreartor assign a value of its left oprends
// based on the value of  its right oprends 
// the simple Assign opreator is equal to(=)
 
// var x = 5;
// var y = 5; 

//  console.log("is both the x and y are equal or not" + x == y );
// // console.log(x);
// console.log(y);

// Arithmetic opreator

// An Arithmetic opreator is takes olny numerical value
// (either literals or variables) as their operands and 
// returns a single numerical value.

// console.log(3+3);    
// console.log(3-2);  
// console.log(3*3)
// console.log(4/2);
// console.log(35%7) 

// Increment and Decrement opreator 
// opretor x++ , ++x, x--  --x
// if used posfix , with opreator after oprends(for examples x++)
// the increment opreator increment  and return the value before incrementing 

// var num  = 14;
// var newNum = num++ ;
// // console.log(num);
// console.log(newNum);

// Postfix increment opreator means the expression is evaluted    
// first using the  original value of the variable and then the  variavble in incremented 

// Prefix increment operator means the variable is incremented first and then 
// the expression is evaluated using the new value of the variable.

// var num = 15;
// var newNum = ++num + 5; 
// console.log(num);
// console.log(newNum);


// Comparision opreator in javaScript
// this opreator is compare the value of the opreators 


// var a = 20;
// var b = 30;

// // (Equals==)
// console.log(a == b);

// // !equalsto(!=)
// console.log(a != b);

// // greater than (>) and greater than equals to(>=)
// console.log(a > b);
// console.log(a >= b);

// // Less than (<) and less than equals to (<=)

// console.log(a < b)
// console.log(a <= b);

// Logical opreator in Javascript 

// logical opreator are typically used with Boolean variable
// When they are return a boolean value 

// var a = 50;
// var b = 30;
// var c = 40;

// Logical AND(&&) -> both condition are true then execute the statement 

// console.log(a > b && b < c && a < c) 


// Logical OR(||) --> Anyone condition are true the statement is execute 
 
// console.log(a > b || b > c || c > a);

// Logical NOT(!) -> This opreator is reverse the value true -> false  >>> false -> true 

// console.log(!((a>0) || (b>0)));


// String Concatenation Opreator 
// -->> This opreator concate the two String together and return a new Sring 

// var myFirstName = "Rohit"
// var myLastName = "Kumar"
// console.log(myFirstName + " " +  myLastName);

// var myName = "Rohit" 
 
// console.log(myName + " Kumar");

// 4  Challenge Time 
// what  is the output of 3***3?
// what will the output when we add  a string or number 
// write a program to swap a two  number
// write a program to swap a two number without using third variable

// Solution 1 

// console.log(3**3); it means 3*3*3
// console.log(10 ** -1);  1/10;

// Solution 2 
// console.log(5 + "newton");

// Solution 3: 

// var a = 10;
// var b = 5;

// var c = b;
// b = a;
// a = c;

// console.log("the value of a is " + a);
// console.log("the value of  b is " + b); 

// Solution 4:

// 2nd Method  without using third variable 

// a = a - b;
// b = a + b;

// console.log("the value of a is " + a);
// console.log("the value of  b is " + b);

// Interview Question 
// Diffrence between (==) or (===)
// (==) check only values of the variable
// (===) check values and type of the variable  

// var  num1 = 5;
// var num2 = '5';

// console.log(typeof(num1));
// console.log(typeof(num2));

// console.log(num1 == num2);

// var num = 5;
// var num4 = '5';

// console.log(typeof(num));
// console.log(typeof(num4));

// console.log(num === num4);

// Control Statement in javascript 

// if...else 
// The if statement execute a statement if a specified condition is truth
// if condition is falsy than another condition is execute 

// if raining = raincoat
// else no raincoat

// var tomr = 'sunny';
// if(tomr == 'rain'){
//     console.log('taka a raincot');
// }else{
//     console.log('no raincot');
// }

// Challenge Time 
// write a program that works out whether if a given year is a leap year or not?
// A normal year has 365 days, leap years have 366, with an extra day in Febru

// var year = 2020;

// if(year % 4 === 0){
//     if(year % 100 === 0){
//         if(year % 400 === 0){
//             console.log("This year " + year + "is not a leap year");
//         }else{
//             console.log("This year " + year + " is not a leap year ");
//         }
//     }
//     else {
//        console.log("This year " + year + " is not a leap year");
//         }
    
// }

/// what is the truhy and falsy values of the javascript 
// we have total 5 truthy values in javascript 
// 1. (0) 2. ("") 3. (undefined) 4. (NaN) 5. (false)
 
//  if(score = false){
//       console.log("OMG, we loss the game 😭");
//     }else{
//       console.log("Yay, We won the game 😀");
//     }

// conditional ternory opreator in javascript
// the conditional  ternory opreator is one only operator in javascript
// which takes three aruguments 

// var age = 18;
// if(age > 17){
//     console.log("you con not vote");
// }else{
//     console.log("you can vote");
// }

// ternory opetator 

// var age = 18;
// console.log((age >= 10) ? "you can not  vote" : "you can vote ");

// Switch statement in javascript
// Evaluates an expression, matching the expression's value to a 
// case valuse, and executes statements associated with that case.

// 1st without break statement 
// find the area of circle , triangle , rectangel 

// var area = 'circle'
// var PI = 3.143 , l= 5 , b= 4 , r= 3 
// if(area == "circle"){ 
//     console.log("the area of circle is: " + PI*r**2)
// }else if(area == "triangle"){
//     console.log("the area of tha triangle is: " + (l*b)/2);
// }else if(area == "rectangle"){
//     console.lot("the area of the rectangel is:"+ (l*b));
// }else{
//     console.log("please enter a valid area ");
// }

// switch case 

// var area = "triangle"
// var PI = 3.142, l=5, b=4, r=3;

// switch(area){
//     case  "circle":
//     console.log("the area of circle is: " + PI*r**2);
//     break;
//     case "triangle":
//         console.log("the area of tha triangle is: " + (l*b)/2);
//         break;
//     case "rectangle":
//         console.lot("the area of the rectangel is:"+ (l*b));
//         break;
//     default: 
//     console.log("please enter a valid area ");     
// }    


// break
// Terminates the current loop, switch, or label 
// statement and transfers 
// program control to the statement following the terminated statement.


// continue
// Terminates execution of the statements in the current iteration of the 
// current or labeled loop, and continues execution of the loop with the 
// next iteration. 

// while loop statement in js 
// In this loop condition is true than statement is execute in the js and other programming language 

// var num = 20;
// // block scope 
// while(num <30){
//     console.log(num);
//     num++;

// }

/// Do while loop 
/// in this loop statement is execute every first time and after this check the condition than condition is true 
// than other condition is executed 

// var num = 20; 
// do{
//     console.log(num);
//     num++;
// }while(num < 30)

// for loop 
// this loop is the most usable  loop of the every programming lauguage 
// for(initialization; condition; increment and decrement)

// var num = 10;
// for(num=1; num<11; num++){
//     console.log(num);
// }

// challenge time 
// javascript program write a table of a given number 
// output  8*1 = 8
//         8*2 = 16

// for(var num =1; num<=10; num++){
//     var tabelof = 15;
//     console.log(tabelof +" * " + num + " = " + tabelof * num);
// }

// var num = 1; 
// while(num <= 10){
//     tableof = 8; 
//     console.log(tableof + " * " + num + " = "+ tableof * num);
//     num++;
// }

// function in javascript 
// before we use a function we need to define a function 
// a funcrtion defination (also called a function declaration , or function statement)
// consist of the function keyword , followed by : 

// the name of the function 
// a list of parameter to the fuction, encloesed in parenthess and seprated by comma .
// In javascript statement that defines the function , enclosed in curly bracket {...}

// simple progtram to sum a two number 

// var a = 10;
// var b = 20;
// sum = a + b;
// console.log(sum);

// function sum(){
//     var a = 10;
//     var b = 20;
//     total = a + b;
//     console.log(total);
// }sum();

// Calling a function 
// defining a function does not execute it 
// A Javasript function is executed whan is invoked it(called it)

// function sum(){
//     let a = 10; 
//     let b = 20;
//     total = a + b;
//     console.log(total);
// }sum();

// function Parameter and fuction Arguments 
// function parameter are the neme listed in the function's defination 
// function arguments are the real values passed the function 

// function sum(a, b){
//     var total = a + b; // these are the function paremeters 
//     console.log(total); // and these are the function parameters
// }
// sum();
// sum(10, 10);
// sum(20, 209)

// Interview Question ]
// Why function to be used 

// you can reuse code: Define the code once and used its many times 
// You can use the same code many times with diffrent arguemtents 
// to produse the diffrent result 

//           OR 
// A function is a group a resuable code which called a anywhere 
// Your Program. This eliminates the need of writing the same code again and again

// DRY --->>> Do Not Repeat Yourself

// Function Expressions 
// Function expressions simply  means
/// Create a function and put it  into the variable 

// function sum(a, b){
//     total = a + b;
//     console.log(total);
// }
// var funexp = sum(3,20)
// funexp;

// Return Keyword 
// when Javascript is reaches a retuen statement 
// the function will stop 
// Function often compute a return value
// The return value is "Reuturned " back to the caller:

// function sum(a, b){
//     return Total = a + b;
// }
// var funExp = sum(10,49);
// console.log("The sum of the two number is: " + funExp);

// Anonmyous Function 

// A function expression is similar to and has the same syntax 
// as a function declaration One can define "named" 
// function expressions (where the name of the expression might 
// be used in the call stack for example) 
// or "anonymous" function expressions.

// var funExp = function(a,b){
//     return Total = a+b;
// }
// var sum = funExp(13,12);
// var sum1 = funExp(25, 23);
// console.log(sum > sum1)  ;

/// Modern Javascript 
// Features of Ecmascript 2015 and is also is known is ES6 

// VAR & LET AND CONST 

// VAR 

// var myName = "rohit";
// console.log(myName);

// myName = "kumar";
// console.log(myName);

// LET EXAMPLES

// let myName = " Rohit ";
// console.log(myName);

// myName = "Kumar";
// console.log(myName);

// CONST EXAMPLE

// const myName = "Rohit";
// console.log(myName);

// myName = " Kumar ";
// console.log(myName);

// function biodata() {
//   const myFirstName = "Vinod";
//   console.log(myFirstName);

//   if(true){
//     const myLastName = "thapa";
//   }

//   console.log('innerOuter ' + myLastName);
// }

// // console.log(myFirstName);

// biodata();


//    VAR                                        LET                                        CONST
// 1. function scope                             Block scope                                Block scope
// 2. can be re-declare                          can't be re-declare 
// 3. can be re-initialze                        can be re-intialize  
// 4. can be re-assigned                         can be re-assigned
//
//



// Template literals (Template strings) 

// JavaScript program to print table for given number (8)?

// output :  8 * 1 = 8 
//   8 * 2 = 16(8*2)
//  => 8 * 10 = 80
    // for(let num = 1; num<=10; num++){
    //     let tableof = 8;
    //     // console.log(tableof + " * " + num + " = " + tableof * num);
    //     console.log(` ${tableof} * ${num} = ${tableof * num}`); 
    // }   


     
//  Fat Arrow Function 

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

// Arrow Function 

// const sum = () =>`the sum of the two number is: ${(a=5)+(b=5)}`;
// console.log(sum());

//  **************   Array in javascript  *********************

// Array is a collection diffrent data types in JS
// In JS array size is flexible 
// In JS Array can be modify in the javascript 

//  ******** Array Traversal in the Js *****************

// If we want to get the single element(data) at  a time in Js 
// If we want to change the data than we use to the array travarsal

// let myFriend = ['Shrish', 'Saurabh', 'Akash', 'Harsh'];

// console.log(myFriend[myFriend.length -1]);

// If we want to check the length of the array 

// let myFriend = ['Atul','Suraj','Sudhakar', 'Prince'];

// console.log(myFriend.length);

// We use for loop to navigate the array 

// let myFriend = ['shrish','akash', 'harsh', 'mansi']
// for(let i = 0; i<=myFriend.length; i++){
//     console.log(myFriend[i]);
// }

// After ES6 we have to use the for of loop and for in loop in js and also for each loop in javascript

// For Of Loop in javascript.=> This loop return to the only index of the array 

// var num =[1,2,3];
// for(let elements in num){
//     console.log(elements);
// }

// var myFriends = ['vinod','ramesh','arjun','vishal'];

// for(let elements in myFriends){
//   console.log(elements);
// }

// For Of loop use in the Js 

// for(let elements of myFriends){
//     console.log(elements)
// }

// For Each loop of the Js
// It is a combination of the for of and for in loop and it will be tell the key and value and also array 

// let myFriends = ['Rohit','Kumar', 'Shrish', 'Raj'];

// Simple function 

// myFriends.forEach(function(element , index, array) {
//     console.log(element + " index: " + index + " " + array);
// });

// Arrow Function 

// myFriends.forEach((element , index , array) => {
//     console.log(element  + " index: " +index + " " + array);

// });

// *******************  Searching and filter an array in js *************************


/// ****************** Array.prototype.indexOf() ****************** 

// Return the first (least) index of an element within the array euals
// to an element or -1 if none is found. It search the element from the 
// 0th index number 

// let myFriend = ["rohit", "kumar", "Shrish", "Raj"];

// console.log(myFriend.lastIndexOf("kumar",2));


/// ************* Arrray prototype.include() *****************

// let myFriend = ["rohit", "kumar", "Shrish", "Raj"];

// console.log(myFriend.includes("ksdk"));





// ******************* Array Prototype.find()  

// arr.find(callback(element[, index[, array]])[, thisArg])

// Returns the found element in the array, if some element in the 
// array satisfies the testing function, or undefined if not found.
// Only problem is that it return only one element


// const price = [200, 300, 400, 500, 600, ];

// price < 400

// const findEle = price.find((currVal)  => currVal < 400);
// console.log(findEle);

// console.log(price.find((currVal) => currVal > 1400 ) );




// *************** Arary prototype.findIndex() ***********************


// Returns the found index in the array, if an element in the 
// array satisfies the testing function, or -1 if not found.

// const price = [200, 300, 400, 500, 600, ];

// console.log( price.findIndex((currVal) => currVal > 400   ));


///**********      Array prototype.filter() **********************  */

// Return  a new array containg all element to the calling
/// array for which the provided filtering function return true

// const price = [200, 100, 300, 400, 500, 600];
// price < 400
// const newPriceTag = price.filter((element, index ) => {
//     return element > 1400; 
// })
// console.log(newPriceTag);


/// ****************** Array Subsection How to sort the array ***********************

//      Array.prototype.sort()    ****************

// the sort method sort the element of the array in place and 
// return the sorted array . the default sort order is assending , built 
// converitng the element to string  
// than comparing thier sequence of UTF16 code unit values 


// const months = ['March', 'Jan', 'Feb', 'April', 'Dec','nov'];
// console.log(months.sort());


// const array1 = [1, 30, 4, 21, 100000, 99];
// console.log(array1.sort());




// However, if numbers are sorted as strings, 
// "25" is bigger than "100", because "2" is bigger than "1".

// Because of this, the sort() method will produce an incorrect 
// result when sorting numbers.


// Challenge Time 

// 1: How to Sort the numbers in the array in ascending (up) and descending (down) order?

// compareFunction	Optional. 
// A function that defines an alternative sort order. The function should return a negative, zero, or positive value, depending on the arguments, like:
// function(a, b){return a-b}


// for Assending order 

// const array1 = [1, 30, 4, 21, 100000, 99];


// array1.sort(function(a,b){
//     console.log(a,b);
//     if(a>b){
//         return 1;
//         // b comes first and then a 
//     }
//     if(a<b){
//         // a comes first and then b 
//         return -1;
//     }
//     if(a==b){
//         // No changes
//         return 0;
//     }
// });

// for desecnding order

// array1.sort(function(a,b){
//     console.log(a,b);
//     if(a>b){
//         return -1;
//         // b comes first and then a 
//     }
//     if(a<b){
//         // a comes first and then b 
//         return 1;
//     }
//     if(a==b){
//         // No changes
//         return 0;
//     }
// });

// console.log(array1);

// 2.  sort the array indesending order 

 
// var fruits = ["Banana", "Orange", "Apple", "Mango"];

// let aFruits = fruits.sort();


// /            /Array.prototype.reverse() 

// the reverse() method reverse an array  in place 
// // The first array element becomes the last, and 
// // the last array element becomes the first.



//  Array Subsection   Perform CRUD

// Array.prototype.push() 


// The push() method adds one or more elements to the 
// end of an array and returns the new length of the array.

// const animals = ['pigs', 'goats', 'sheep'];

// const count = animals.push('chicken');
// console.log(count);

// animals.push('chicken', 'cats','cow');
// console.log(animals);

//          Array.prototype.unshift() 

// The unshift() method adds one or more elements to the 
// beginning of an array and returns the new length of the array.



// const animals = ['pigs', 'goats', 'sheep'];

// const count = animals.unshift('chicken');
// console.log(count);
// console.log(animals);

// animals.unshift('chicken', 'cats','cow');
// console.log(animals);


// 2nd example 

// const myNumbers = [1,2,3,5];

// myNumbers.unshift(4,6);
// console.log(myNumbers);


// Array.prototype.pop() 
// The pop() method removes the last element from an array and returns 
// that element. This method changes the length of the array.

// const plants = ['broccoli', 'cauliflower',  'kale', 'tomato', 'cabbage'];

// console.log(plants);
// console.log(plants.pop());
// console.log(plants);


// Array.prototype.shift() 
// The shift() method removes the first element from an array and returns 
// that removed element. This method changes the length of the array.

// const plants = ['broccoli', 'cauliflower',  'kale', 'tomato', 'cabbage'];
// console.log(plants);
// console.log(plants.shift());
// console.log(plants);




// 8: challenge Time

// Array.prototype.splice() 
// Adds and/or removes elements from an array.

// 1: Add Dec at the end of an array?
// 2: What is the return value of splice method?
// 3: update march to March (update)?
// 4: Delete June from an array?


// sol1: 
// const newMonth = months.splice(months.length,0,"Dec");
// console.log(months);

// sol2:
// console.log(newMonth);

// sol3: 
// const months = ['Jan', 'march', 'April', 'June', 'July'];

// const indexOfMonth = months.indexOf('June');

// if(indexOfMonth != -1){
//   const updateMonth = months.splice(indexOfMonth,1,'june');
//   console.log(months);
// }else{
//   console.log('No such data found');
// }


// sol3: 
// const months = ['Jan', 'march', 'April', 'June', 'July'];

// const indexOfMonth = months.indexOf('April');

// if(indexOfMonth != -1){
//   const updateMonth = months.splice(indexOfMonth,2);
//   console.log(months);
//   console.log(updateMonth);
// }else{
//   console.log('No such data found');
// }





// 5️ Array Subsection 4 Map and Reduce Method 

// Array.prototype.map() 

// let newArray = arr.map(callback(currentValue[, index[, array]]) {
//     // return element for newArray, after executing something
//   }[, thisArg]);

// Returns a new array containing the results of calling a 
// function on every element in this array. 

// const array1 = [1, 4, 9, 16, 25];
// num > 9
// let newArr = array1.map((curElem,index,arr) => {
//     return curElem > 9;
// })
// console.log(array1);
// console.log(newArr);

// let newArr = array1.map((curElm, index, arr) => {
//     return `Index no = ${index} and the value is ${curElm} belong to ${arr} `
// }).reduce().
// console.log(newArr);


// let newArrfor = array1.forEach((curElm, index, arr) => {
//   return `Index no = ${index} and the value is ${curElm} belong to ${arr} `
// })
// console.log(newArrfor);

// It return new array without mutating the orignal array 







// 9: challenge Time 

//  1: Find the square root of each element in an array?
//  2: Multiply each element by 2 and return only those 
//     elements which are greater than 10?

// sol1: 
// let arr = [25, 36, 49, 64, 81];

// let arrSqr = arr.map((curElem) =>  Math.sqrt(curElem) )
// console.log(arrSqr);

// sol 2: 
//  let arr = [2, 3, 4, 6, 8]; 

//  let arr2 = arr.map((curElm) => curElm * 2).filter((curElem) => curElem > 10 ).reduce((accumulator, curElem) => {
//       return accumulator += curElem;
//     });
//  console.log(arr2);

// we can use the chaining too 





//  Reduce Method 

// flatten an array means to convert the 3d or 2d array into a 
// single dimensional array 

// The reduce() method executes a reducer function (that you provide) 
// on each element of the array, resulting in single output value.

// The reducer function takes four arguments:

// Accumulator
// Current Value
// Current Index
// Source Array

// 4 subj = 1sub= 7
// 3dubj = [5,6,2]

// let arr = [5,6,2];

// let sum = arr.reduce((accumulator, curElem) => {
//         debugger;
//       return accumulator += curElem;
// },7)
// console.log(sum);




// How to fatten an array 
// converting 2d and 3d array into one dimensional array 

// const arr = [
//         ['zone_1', 'zone_2'],
//         ['zone_3', 'zone_4'],
//         ['zone_5', 'zone_6'],
//         ['zone_7', ['zone_7', ['zone_7', 'zone_8']]]
//     ];

// // let flatArr = arr.reduce((accum, currVal)  => { 
// //           return accum.concat(currVal);
// // })

// console.log(arr.flat(Infinity)





// console.log(flatArr);


// const arr = [ ['zone_1', 'zone_2'], ['zone_3', ['zone_1', 'zone_2', ['zone_1', 'zone_2']]] ];
// console.log(arr.flat(3));
// console.log(arr);


//    --------------------------------- String in javascript -------------------------

// A Javascript String zero to more character written inside quotes

// Javascript String are used for storing and manipulating text
// You can use single and double quotes
// String can be created as primitives, 
// from String litreals or as objects using the string constructor 

// let myName = "Rohit Kumar";
// console.log(myName);

// let myName = 'Rohit Kumar';
// console.log(myName);

// let fname = new String("Rohit Kumar");
// console.log(fname);  ----> This String are to be return to the String object and stirng 

// How to find the length of the String 
// String.Prototype.length
// Reflect the lenght of the string 

// let myName = "Rohit KUmar";
// console.log(myName.length);

// ----------------------Escape Character in javascript----------------------------  


// // if you dont want to mess, simply use the alternate quotes 
// let anySentence = "We are the so-called \"Vikings\" from the north.";
// console.log(anySentence);

// let anySentence = "My Name is Rohit Kumar \"rohit\" Kumar kumar";
// console.log(anySentence);

// let anySentence = "my name is rohit 'rohit' kumar kumar";
// console.log(anySentence);

// Finding the String in a String 
// String.prototype.indexof(searchValue, [, fromIndex])
// the index of method it return the index of position of the first 
// occurence of a specified text in a string 

// const myName = "rohit kumar ";
// console.log(myName.indexOf("t", 5)); 

// Javascript count position from zero 
// 0 is the first string and 1 is the second stirng and 2 is the third stirng 

// // String.prototype.lastIndexOf(searchValue [, fromIndex]) 
// // Returns the index within the calling String object of the 
// // last occurrence of searchValue, or -1 if not found.

// const myBioData =  'I am the thapa Technical';
// console.log(myBioData.lastIndexOf("t", 6));


//------------------------- Searching for a string in a string--------------------------

// String.prototype.search(regexp)

// The search() method search a string for a specified 
// value and return the position of the match 
// The search() method cannot take a second start position argument.


// const myName = "My Name is Rohit kumar and i am from up";
// let data = "Rohit";
// console.log(data);


// Extracting String in javascript.

// There are 3 method for extracting a part of a string 

// slice(start , end)
// substring(start, end)
// substr(start, length)

//  The slice method()
// slice() extract a part of a string and return the extract parts
// in a new string 

// this method are to be use a two parameter : start position and second is 
// end position(end position is not included) ---> end pos as your wish 

// let str = "banana, apple, mango , kiwi, orange";
// // let res = str.slice(0, 4);
// let res = str.slice(5);
// console.log(res);


// The slice() method selects the elements starting at the 
// given start argument, and ends at, but does not include, 
// the given end argument.

// Note: The original array will not be changed.
// Remember: JavaScript counts positions from zero. First position is 0.

// : challenge Time 

// Display only 280 characters of a string like the 
// one used in Twitter?

// let myTweet = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Why do we use it? ";


// let myActualTweet = myTweet.slice(0,280);
// console.log(myActualTweet);
// console.log(myActualTweet.length);


// ---------------------------- SubString method --------------------------------

// SubString method is the similar to the slice 
// The diffrence between the substring is not accept the negative  index of the String

// let str = "Apple, Orange , Mango , Kiwi ,  Date";
// let res = str.substring(5, 13);
// console.log(res);

// If we give the negative value than the character 
// count the 0th position 


// ------------------------------ Substr ------------------------------
// substr is similar to the slice 
// In this method is the second parameter is specify the length of the string

// var str = "banana, orange, kiwi, mango, date";
// debugger
// let res = str.substr(7,-2);
// console.log(res);


// Replacing Sring content in a String

// The Replace mehod is replace a specify value 
// with another value of the string 

//   String.prototype.replace(searchFor, replaceWith)

// let myIntro  = "My name is Rohit Kumar"
// let replaceData = myIntro.replace( 'name', 'Name');
// console.log(replaceData);
// console.log(myIntro);


// Points to remember 
// 1: The replace() method does not change the string 
// it is called on.  It returns a new string.
// 2: By default, the replace() method replaces only 
// the first match
// 3:By default, the replace() method is case sensitive. 
// Writing VINOD (with upper-case) will not work


// ---------------------------Extracting character in string--------------------------

//  There are 3 methods for extracting string characters:

// charAt(position)
// charCodeAt(position)
// Property access [ ]

// charAt()
// this method is retrun the index position of the string 

// let str  = 'Rohit';
// console.log(str.charAt(4));

// charCodeAt()
// this method is return to the unicode of 
// the character at a specify index in a string

// The Unicode Standard provides a unique number for every 
// character, no matter the platform, device, application, 
// or language. UTF-8 is a popular Unicode encoding which
//  has 88-bit code units.

// let str = "Rohit Kumar";
// console.log(str.charCodeAt("R"));


// 12: challenge Time 


// Return the Unicode of the last character in a string

// let str = "HELLO WORLD";
// let lastChar = str.length - 1;
// console.log(str.charCodeAt(lastChar));

// Property Access
// ECMAScript 5 (2009) allows property access [ ] on strings

// var str = "HELLO WORLD";
// console.log(str[4])

// ther useful methods 

// let myName = "rohit kumar";
// console.log(myName.toUpperCase()); 
// console.log(myName.toLowerCase());


//             The concat() Method 
// concat() joins two or more strings

// let fName = "Rohit"
// let lName = "Kumar"

// console.log(fName + lName );
// console.log(`${fName} ${lName}`);
// console.log(fName.concat(lName));
// console.log(fName.concat(" " ,lName));




//                String.trim() 

// The trim() method removes whitespace from both 
// sides of a string

// var str = "              Hello         World!            ";
// console.log(str.trim());




// Converting a String to an Array
// A string can be converted to an array with the 
// split() method

// var txt = "a, b,c d,e";   // String
// console.log(txt.split(","));           // Split on commas
// console.log( txt.split(" "));          // Split on spaces
// console.log(txt.split("|"));         // Split on pipe


//  ------------------- Date  and Time in Javascript ----------------------------


// JavaScript Date objects represent a single moment in time in a 
// platform-independent format. Date objects contain a Number 
// that represents milliseconds since 1 January 1970 UTC.

// Creating data objects in javascript 
// There are 4 ways to create a date objects in js

// New Date() 
// new Date(year, month, day, hours, minutes, seconds, milliseconds)
// // it takes 7 arguments
// new Date(milliseconds)
// // we cannot avoid month section 
// new Date(date string)


// new Date() 
// Date objects are created with the new Date() constructor.

// let currDate = new Date();
// console.log(currDate);


// console.log(new Date());   Thu Nov 03 2022 11:28:24 GMT+0530 (India Standard Time)
// console.log(new Date().toLocaleString());   11/3/2022, 11:28:44 AM
// console.log(new Date().toString());  Thu Nov 03 2022 11:29:02 GMT+0530 (India Standard Time)

// Date.now()
// Returns the numeric value corresponding to the current time—the number 
// of milliseconds elapsed since January 1, 1970 00:00:00 UTC

// console.log(Date.now());  1667455319228 


// new Date(year, month, ...) 
// 7 numbers specify year, month, day, hour, minute, second, 
// and millisecond (in that order)
// Note: JavaScript counts months from 0 to 11.

// January is 0. December is 11.

// var d = new Date(2021,0);
// console.log(d.toLocaleString());


// new Date(dateString) 
// new Date(dateString) creates a new date object from a date string

// var d = new Date("October 13, 2021 11:13:00");
// console.log(d.toLocaleString());

// new Date(milliseconds) 
// new Date(milliseconds) creates a new date object as zero time plus milliseconds:


// var d = new Date(0);
// var d = new Date(1609574531435);
// var d = new Date(86400000*2);
// console.log(d.toLocaleString());

// Dates Method

// const curDate = new Date();

// // how to get the indivisual date 
// console.log(curDate.toLocaleString());
// console.log(curDate.getFullYear());
// console.log(curDate.getMonth()); // 0-11 jan to dec
// console.log(curDate.getDate());
// console.log(curDate.getDay());

// // how to set the indivisual date 

// console.log(curDate.setFullYear(2022));
// // The setFullYear() method can optionally set month and day
// console.log(curDate.setFullYear(2022, 10, 5));
// let setmonth = curDate.setMonth(10); // 0-11 jan to dec
// console.log(setmonth);
// console.log(curDate.setDate(5));
// console.log(curDate.toLocaleString());





// Time Methods

// const curTime = new Date();

// how to get the indivisual Time 

// console.log(curTime.getTime());
// // // The getTime() method returns the number of milliseconds 
// // since January 1, 1970
// console.log(curTime.getHours());
// // // The getHours() method returns the hours of a date as a 
// // number (0-23)
// console.log(curTime.getMinutes());
// console.log(curTime.getSeconds());
// console.log(curTime.getMilliseconds());






// // how to set the indivisual Time 

// let curTime = new Date();

// // console.log(curTime.setTime());
// console.log(curTime.setHours(5));
// console.log(curTime.setMinutes(5));
// console.log(curTime.setSeconds(5));
// console.log(curTime.setMilliseconds(5));







// // Practice Time 
// new Date().toLocaleTimeString(); // 11:18:48 AM
// //---
// new Date().toLocaleDateString(); // 11/16/2015
// //---
// new Date().toLocaleString(); // 11/16/2015, 11:18:48 PM






// Challenge Time NOT yet decided
// (function(){
//   setInterval(()=> {
//     console.log(new Date().toLocaleTimeString());
//   }, 1000)
// })();



/**** Section 9 Math Object in JavaScript ****/

// The JavaScript Math object allows you to perform mathematical tasks on numbers.

// console.log(Math.PI); 
// console.log(Math.PI);

// Math.round() 
// returns the value of x rounded to its nearest integer

// let num = 10.501;
// console.log(Math.round(num));


// Math.pow() 
// Math.pow(x, y) returns the value of x to the power of y

// console.log(Math.pow(2,3));
// console.log(2**3);


// Math.sqrt() 
// Math.sqrt(x) returns the square root of x

// console.log(Math.sqrt(25));
// console.log(Math.sqrt(81));
// console.log(Math.sqrt(66));


// Math.abs() 
// Math.abs(x) returns the absolute (positive) value of x

// console.log(Math.abs(-55));
// console.log(Math.abs(-55.5));
// console.log(Math.abs(-955));
// console.log(Math.abs(4-6));



// Math.ceil() 
// Math.ceil(x) returns the value of x rounded up to its nearest integer

// console.log(Math.ceil(4.51));
// console.log(Math.round(4.51));
// console.log(Math.ceil(99.01));
// console.log(Math.round(99.1));


 
// Math.floor()  
// Math.floor(x) returns the value of x rounded down to its nearest integer

// console.log(Math.floor(4.7)); 
// console.log(Math.floor(99.1)); 



// Math.min() 
// Math.min() can be used to find the lowest value in a list of arguments

// console.log(Math.min(0, 150, 30, 20, -8, -200));



// Math.max() 
// Math.max() can be used to find the highest value in a list of arguments

// console.log(Math.max(0, 150, 30, 20, -8, -200));



// Math.random() 
// Math.random() returns a random number between 0 (inclusive), and 1 (exclusive)

// console.log(Math.floor(Math.random()*10));
// console.log(Math.floor(Math.random()*10)); // 0 to 9



// Math.round() 
// The Math.round() function returns the value of a number 
// rounded to the nearest integer.

// console.log(Math.round(4.6));
// console.log(Math.round(99.1));



// Math.trunc()  
// The trunc() method returns the integer part of a number

// console.log(Math.trunc(4.6));
// console.log(Math.trunc(-99.1));



// Practice Time 

// if the argument is a positive number, Math.trunc() is equivalent to 
// Math.floor(),
// otherwise Math.trunc() is equivalent to Math.ceil().



// ---------------- Document object model in javascript ---------------


//  Window is the main container or we can say the 
// global Object and any operations related to entire 
// browser window can be a part of window object. 

// For ex  the history or to find the url etc


//  whereas the DOM is the child of Window Object


//  All the members like objects, methods or properties. 
// If they are the part of window object then we do not refer 
// the window object. Since window is the global object 
// so you do not have to write down window. 
// - it will be figured out by the runtime.

// For example
//  window.screen or just screen is a small information 
// object about physical screen dimensions.
//  window.location giving the current URL
//  window.document or just document is the main object 
// of the potentially visible (or better yet: rendered) 
// document object model/DOM.
  

//  Where in the DOM we need to refer the document, 
// if we want to use the document object, methods or properties
// For example
//  document.getElementById()


//  Window has methods, properties and object. 
// ex setTimeout() or setInterval() are the methods 
// where as Document is the object of the Window and 
// It also has a screen object with properties 
// describing the physical display.


// Now, I know you have a doubt like we have seen the methods 
// and object of the global object that is window. But What about
// the properties of the Window Object 

// so example of window object properties are
// innerHeight, 
// innerWidth and there are many more 

// let's see some practical in DOM HTML file


// ************** DOM vs BOM *******************

//  The DOM is the Document Object Model, which deals with the document, 
// the HTML elements themselves, e.g. document and all traversal you 
// would do in it, events, etc.

// For Ex: 
// change the background color to red
// document.body.style.background = "red";

//  The BOM is the Browser Object Model, which deals with browser components 
// aside from the document, like history, location, navigator and screen 
// (as well as some others that vary by browser). OR 
// In simple meaning all the Window operations which comes under BOM are performed 
// usign BOM 

// Let's see more practical on History object 

// Functions alert/confirm/prompt are also a part of BOM: 
// they are directly not related to the document, 
// but represent pure browser methods of communicating with the user.

// alert(location.href); // shows current URL
// if (confirm("Want to Visit ThapaTechnical?")) {
//   location.href = "https://www.youtube.com/thapatechnical"; // redirect the browser to another URL
// }




// Section 3️: Navigate through the DOM 

// 1: document.documentElement
      // returns the Element that is the root element of the document. 
// 2: document.head
// 3: document.body
// 4: document.body.childNodes (include tab,enter and whiteSpace)
  // list of the direct children only 
// 5: document.children (without text nodes, only regular Elements)
// 6: document.childNodes.length

//  Practice Time 
// How to check whether an element has child nodes or not?
// we will use hasChildNodes()

//  Practice Time 
// How to find the child in DOM tree 
// firstChild vs firstElementChild
// lastChild vs lastElementChild 
// const data = document.body.firstElementChild;
// undefined
// data
// data.firstElementChild
// data.firstElementChild.firstElementChild
// data.firstElementChild.firstElementChild.style.color = "red"
// vs 
// document.querySelector(".child-two").style.color = "yellow";

//  How to find the Parent Nodes 
// document.body.parentNode
// document.body.parentElement

//  How to find or access the siblings
// document.body.nextSibling
// document.body.nextElementSibling
// document.body.previousSibling
// document.body.previousElementSibling



/**** Section 11 EVENTS in JavaScript ****/


// HTML events are "things" that happen to HTML elements.
// When JavaScript is used in HTML pages, JavaScript can "react" on these events.


//  HTML Events
// An HTML event can be something the browser does, or something a user does.

// Here are some examples of HTML events:

// An HTML web page has finished loading
// An HTML input field was changed
// An HTML button was clicked
// Often, when events happen, you may want to do something.

// JavaScript lets you execute code when events are detected.

// HTML allows event handler attributes, with JavaScript code, 
// to be added to HTML elements.



// section 1️ 4 ways of writing Events in JavaScript

// 1: using inline events alert();
// 2: By Calling a funcion (We already seen and most common way of writing) 
// 3: using Inline events (HTML onclick="" property and element.onclick)
// 4: using Event Listeners (addEventListener and IE's attachEvent)

// check the Events HTML File



// section 2️: What is Event Object?
// Event object is the parent object of the event object. 
// for Example 
// MouseEvent, focusEvent, KeyboardEvent etc 



// section 3️ MouseEvent in JavaScript
// The MouseEvent Object
// Events that occur when the mouse interacts with the HTML 
// document belongs to the MouseEvent Object.



// section ️4️ KeyboardEvent  in JavaScript
// Events that occur when user presses a key on the keyboard, 
// belongs to the KeyboardEvent Object.
// https://www.w3schools.com/jsref/obj_keyboardevent.asp


// Section 5️ InputEvents in JavaScript 
// The onchange event occurs when the value of an element has been changed.

// For radiobuttons and checkboxes, the onchange event occurs when the 
// checked state has been changed.
 
//----------------------- Javascript Timing  events ---------------------


// The window object allows execution of code at specified time intervals.

// These time intervals are called timing events.

// The two key methods to use with JavaScript are:

// setTimeout(function, milliseconds)
// Executes a function, after waiting a specified number of milliseconds.

// setInterval(function, milliseconds)
// Same as setTimeout(), but repeats the execution of the function continuously.


// 1️ setTimeout()

// 2️ clearTimeout()

// 3️ setInterval()

// 4️ clearInterval()


//  object oriented Javascript

// **********************************************************************


// 1️ What is Object Literal?

// Object literal is simply a key:value pair data structure. 

// Storing variables and functions together in one container, 
// we can refer this as an Objects.

// object = school bag 

// How to create an Object?

// 1st way 

  // let bioData = { 
  //     myName : "thapatechnical",
  //     myAge : 26,
  //     getData : function(){
  //       console.log(`My name is ${bioData.myName} and my age is ${bioData.myAge}`);
  //     }
  // }

  // bioData.getData();

// 2nd way no need to write functions as well after es6

// let bioData = { 
//   myName : "thapatechnical",
//   myAge : 26,
//   getData (){
//     console.log(`My name is ${bioData.myName} and my age is ${bioData.myAge}`);
//   }
// }

// bioData.getData();


//  What if we want object as a value inside an Object 


// let bioData = { 
//   myName : {
//     realName : "vinod",
//     channelName : "thapa technical" 
//   },
//   myAge : 26,
//   getData (){
//     console.log(`My name is ${bioData.myName} and my age is ${bioData.myAge}`);
//   }
// }

// console.log(bioData.myName.channelName );





// 2️ What is this Object?

// The definition  of "this" object is that it contain the current context. 

// The this object can have different values depending on where it is placed.  


// // For Example 1 
// console.log(this.alert('Awesome'));
// // it refers to the current context and that is window global object 


// // ex 2 
// function myName() {
//     console.log(this);
// }
// myName();



// // ex 3 

// var myNames = 'vinod';
// function myName() {
//     console.log(this.myNames);
// }
// myName();


// // ex 4 
// const obj = {
//     myAge : 26,
//     myName() {
//       console.log(this.myAge);
//     }
// }
// obj.myName();

// // ex 5 
// // this object will not work with arrow function bcz arrow function is bound to class.

// const obj = {
//     myAge : 26,
//     myName : () => {
//       console.log(this);
//     }
// }
// obj.myName();



// // ex 6

// let bioData = {
//     myName : {
//         realName : "vinod thapa",
//         channelName : 'thapa technical'
//     },
//     // things to remember is that the myName is the key and the object is act like a value 
//     myAge : 26,
//     getData (){
//       console.log(`My name is ${this.myName.channelName} and my age is ${this.myAge} `);
//     }
//   }

//   bioData.getData();


// // call method is used to call the method of another object 
// // or with call(), an object can use a method belonging to another object 

// // But as per other it is simply the way to use the this keyword or another object 






// // **********************************************************************

// //  How JavaScript Works? Advanced and Asynchronous JavaScript

// // **********************************************************************


// // Advanced JavaScript Section

// // 1️: Event Propagation (Event Bubbling and Event Capturing)

// // check html file 


// // 2️: Higher Order Function
// // function which takes another function as an arguments is called HOF 
// // wo function jo dusre function ko as an argument accept krta hai use HOF 


// // 3️: Callback Function
// // function which get passed as an argument to another function is called CBF 
// // A callback function is a function that is passed as an argument to 
// // another function, to be “called back” at a later time. 

// // Jis bhi function ko hum kisi or function ke under as an arguments passed 
// // krte hai then usko hum CallBack fun bolte hai 


// // // we need to create a calculator 

// const add = (a,b) => {
//     return a+b;
// }
// // console.log(add(5,2));

// const subs = (a,b) => {
//     return Math.abs(a-b);
// }
// const mult = (a,b) => {
//     return a*b;
// }

// const calculator = (num1,num2, operator) => {
//   return operator(num1,num2);
// }

// calculator(5,2,subs)

// console.log(calculator(5,2,subs));

// // // I have to do the hardcoded for each operation which is bad
// // // we will use the callback and the HOF to make it simple to use 




// // // Now instead of calling each function indivisually we can call it
// // // by simply using one function that is calculator 

// console.log(calculator(5,6,add));
// console.log(calculator(5,6,subs));
// console.log(calculator(5,6,mult));

// // In the above example, calculator is the higher-order function, 
// // which accepts three arguments, the third one being the callback.
// // Here the calculator is called the Higher Order Function because it takes
// // another function as an argument 

// // and add, sub and mult are called the callback function bcz they are passed 
// // as an argument to another fucntion 

// // InterView Question 
// // Difference Between Higher Order Function and Callback Function ?


// // Asynchronous JavaScript


// // 6️:   Synchronous JavaScript Prog 

// 1work = 10min
// 2work = 5s

// const fun2 = () => {
//   console.log(`Function 2️ is called`);
// }

// const fun1 = () => {
//   console.log(`Function 1 is called`);
//   fun2();
//   console.log(`Function 1 is called Again`);
// }

// fun1();


// Asynchronous JavaScript Prog 

// const fun2 = () => {
//   setTimeout(()=> {
//       console.log(`Function 2  is called`);
//   }, 2000);
// }

// const fun1 = () => {
//   console.log(`Function 1 is called`);
//   fun2();
//   console.log(`Function 1 is called Again `);
// }

// fun1();


// // What is Event Loop in JavaScript?
// // ppt explain 


// // 5️ Hoisting in JavaScript 

// // we have a creation phase and execution phase.

// // Hoisting in Javascript is a mechanism where variables and functions
// // declarations are moved to the top of their scope before the code execute.

// For Example 
// console.log(myName);
// let myName;
// myName = "thapa";

// // How it will be in output during creation phase 

// 1: var myName = undefined;
// 2: console.log(myName);
// 3: myName = "thapa";


// // In ES2015 (a.k.a. ES6), hoisting is avoided by using the let keyword 
// // instead of var. (The other difference is that variables declared 
// // with let are local to the surrounding block, not the entire function.)



// // 6️ What is Scope Chain and Lexical Scoping in JavaScript? 

// // The scope chain is used to resolve the value of variable names 
// // in JS.

// // scope chain in js is lexically defined, which means that we can 
// // see what the scope chain will be by looking at the code. 

// // At the top, we have the Global Scope, which is the window Object
// // in the browser.

// // Lexical Scoping means Now, the inner function can get access to 
// // their parent functions variables But the vice-versa is not true.


// // For Example 

// let a = "Hello guys. "; // global scope

// const first= () => {
//   let b = " How are you?"
 
//     const second = () => {
//       let c = " Hii, I am fine thank you";
//       console.log(a+b+c);
//     }
//     second();
//     console.log(a+b+c); //I can't use C 
// }

// first();



// // 7️ What is Closures in JavaScript 

// // A closure is the combination of a function bundled together (enclosed) with references 
// // to its surrounding state (the lexical environment). 

// // In other words, a closure gives you 
// // access to an outer function’s scope from an inner function. 

// // In JavaScript, closures are created every time a function is created, at function creation time.

// // For Example 

// const outerFun = (a) => {
//     let b = 10;
//     const innerFun = () => {
//       let sum = a+b;
//       console.log(`the sum of the two no is ${sum}`);
//     }
//     innerFun();
// }
// outerFun(5);

// // it same like lexical scoping 

// // One more Example 

// const outerFun = (a) => {
//   let b = 10;
//   const innerFun = () => {
//     let sum = a+b;
//     console.log(`the sum of the two no is ${sum}`);
//   }
//   return innerFun;
// }
// let checkClousure = outerFun(5);
// console.dir(checkClousure);

// "use strict"

// let x = "vinod";
// console.log(x);


// // Back To Advanced JavaScript 




// Currying


// const sum = (num1) => (num2) => (num3) => console.log(num1+num2+num3); 

// sum(5)(3)(8);





// // 8️: CallBack Hell 

// setTimeout(()=>{
//     console.log(`1️ works is done`);    
//     setTimeout(()=>{
//         console.log(`2️ works is done`); 
//         setTimeout(()=>{
//             console.log(`3️ works is done`);  
//             setTimeout(()=>{
//                 console.log(`4️ works is done`); 
//                 setTimeout(()=>{
//                     console.log(`5️ works is done`);   
//                     setTimeout(()=>{
//                         console.log(`6 works is done`);    
//                     }, 1000) 
//                 }, 1000)   
//             }, 1000)  
//         }, 1000)   
//     }, 1000)
// }, 1000)




// //  //  Bonus JSON 

// // 


// //  JSON.stringify turns a JavaScript object into JSON text and 
// stores that JSON text in a string, eg:

// var my_object = { key_1: "some text", key_2: true, key_3: 5 };

// var object_as_string = JSON.stringify(my_object);  
// // "{"key_1":"some text","key_2":true,"key_3":5}"  

// console.log(object_as_string);

// typeof(object_as_string);  
// "string" 


// //  JSON.parse turns a string of JSON text into a JavaScript object, eg:

// var object_as_string_as_object = JSON.parse(object_as_string);  
// // {key_1: "some text", key_2: true, key_3: 5} 

// typeof(object_as_string_as_object);  
// // "object" 



// // 7️ AJAX Call using XMLHttprequest 

// // how to handled with the events and callback 

// // XMLHttpRequest (XHR) objects are used to interact with servers. 
// // You can retrieve data from a URL without having to do a full 
// // page refresh. This enables a Web page to update just part 
// // of a page without disrupting what the user is doing. 
// // XMLHttpRequest is used heavily in AJAX programming.

// const request = new XMLHttpRequest();
// // we need to call the api or request the api using GET method ki, me jo
// // url pass kar kr rha hu uska data chaiye 
// request.open('GET', "https://covid-api.mmediagroup.fr/v1");
// request.send(); // we need to send the request and its async so we need to 
// // add the event to load the data adn get it

// // to get the response 
// request.addEventListener("load", () => {
//     console.log(this.responseText);
// });