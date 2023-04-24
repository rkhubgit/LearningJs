//  While Loop Statement

// The while statement creates a loop that executes a specified statement 
// as long as the test condition evaluates to true. 

// Example of while loop 

// var num = 1;
// while(num <=10){
//     console.log(num);
//     num++;
// }


// Example of for loop in js 

// for(var num = 1; num <=10; num++){
//     console.log(num);
// }

// Example of do while loop in js

// var num = 1;
// do{
//     console.log(num);
//     num++;
// }
// while(num<=10)

//  challenge Time 
// JavaScript program to print table for given number (8)?

// Using for loop 

// for(num =1; num <=10; num++){
//     tableof = 8;
//     console.log(tableof + " * " + num +" = " + num * tableof);
// }

// Using while loop 

// var num = 1;
// while(num <= 10){
//     tableof = 8;
//     console.log(tableof + " * "+ num +" = " + num * tableof);
//     num++;
// }

var myFriends = ['Shrish', 'Akash', 'Saurabh','Harshit'];

// Using for in loop in JS
// This loop print only index(key) of the array 
// This loop mostly use in the object

// for(let elements in myFriends){
//     console.log(elements);
// }

// Using for of loop in js
// this loop retrun to the value of the array 
// this loop mostly use of the array

// for(let elements of myFriends){
//     console.log(elements);
// }

// using for each
// it is a combination of the for of and for in loop in js
// and it will return to the element and index and array 

myFriends.forEach(function(element, index, array){
    console.log(element + " index: " + index + " " + array);
});
