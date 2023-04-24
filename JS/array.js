//  Array in Javascript

// In JavaScript, an array is one of the most commonly used data types. It stores multiple values and elements
//  in one variable.

// // These values can be of any data type — meaning you can store a string, number, boolean, and other
//  data types in one variable.

// // There are two standard ways to declare an array in JavaScript. These are either via the array 
// constructor or the literal notation.

// In case you are in a rush, here is what an array looks like declared both ways:


// When we use var, we can stored only one value at a time. 
// var friend1 = 'ramesh';
// var friend2 = 'arjun';
// var friend3 = 'vishal';

// var myFriends = ['ramesh',22,male,'arjun',20,male,'vishal',true, 52];

// When we feel like storing multiple values in one variable then 
// instead of var, we will use an Array.

// In JavaScript, we have an Array class, and 
// arrays are the prototype of this class. 

// Example

// var myFriends = ['Shrish', 'Saurabh', 'Sudhakar', 'Akash', 'Harshit'];
// console.log(myFriends);

// Array Traversal in JavaScript

// navigate through an array

// if we want to get the single data at a time  and also 
// if we want to change the data 

// var myFriends = ['Shrish', 'Saurabh','Harshit','Akash'];

// if we want to check the length of elements of an array 
//  console.log(myFriends.length);

// we use for loop to navigate 

// var myFriends = ['Shrish', 'Saurabh','Harshit','Akash'];
// for(var i = 0; i<myFriends.length; i++){
//     console.log(myFriends[i]);
// }

// After ES6 we have for..in and for..of loop too 

// var myFriends = ['Shrish', 'Saurabh','Harshit','Akash']

// for(let elements in myFriends){
//     console.log(elements);   o/p 1,2,3,4
// }

// for(elements of myFriends){
//     console.log(elements);
//}

// For Each loop in js 
// Calls a function for each element in the array.
//  var myFriends = ['Shrih', 'Akahs', 'Harshit', 'Saurabh'];

// myFriends.forEach(function(element, index, array){
//     console.log(element + " index : "+ index + " " + array);
// })



//  Searching and Filter in an Array 

// Array.prototype.indexOf() 

// Returns the first (least) index of an element within the array equal 
// to an element, or -1 if none is found. It search the element from the 
// 0th index number 

// var myFriendNames = ["vinod","bahadur","thapa","thapatechnical","thapa"];

// console.log(myFriendNames.indexOf("vinod"));
// console.log(myFriendNames.indexOf("thapa"));






// Array.prototype.lastIndexOf() 
// Returns the last (greatest) index of an element within the array equal 
// to an element, or -1 if none is found. It search the element last to first

// var myFriendNames = ["vinod","bahadur","thapa","thapatechnical","thapa"];

// console.log(myFriendNames.lastIndexOf("vinod"));







// Array.prototype.includes() 
// Determines whether the array contains a value, 
// returning true or false as appropriate.

// var myFriendNames = ["vinod","bahadur","thapa","thapatechnical"];

// console.log(myFriendNames.includes("thapa"));










// Array.prototype.find() 

// arr.find(callback(element[, index[, array]])[, thisArg])

// Returns the found element in the array, if some element in the 
// array satisfies the testing function, or undefined if not found.
// Only problem is that it return only one element

// const prices = [200,300,350,400,450,500,600];

// price < 400
// const findElem = prices.find((currVal) =>  currVal < 400 );
// console.log(findElem);


// console.log(  prices.find((currVal) => currVal > 1400 )  );






// Array.prototype.findIndex()

// Returns the found index in the array, if an element in the 
// array satisfies the testing function, or -1 if not found.


// console.log(  prices.findIndex((currVal) => currVal > 1400 )  );




// Array.prototype.filter() 

// Returns a new array containing all elements of the calling 
// array for which the provided filtering function returns true.

// const prices = [200,300,350,400,450,500,600];

// // price < 400
// const newPriceTag = prices.filter((elem, index) => {
//   return elem > 1400;
// })
// console.log(newPriceTag);


// How to sort an array in JS

// Array.sort

// The sort() method sorts the elements of an array in place and 
//returns the sorted array. The default sort order is ascending, built 
//upon converting the elements into strings, 
// then comparing their sequences of UTF-16 code units values.

// const months = ['march', 'april','may','june'];
// console.log(months.sort());

// const array1 = [123,23, 12,11,12342];
// console.log(array1.sort());


// However, if numbers are sorted as strings, 
// "25" is bigger than "100", because "2" is bigger than "1".

// Because of this, the sort() method will produce an incorrect 
// result when sorting numbers.

// However, if numbers are sorted as strings, 
// "25" is bigger than "100", because "2" is bigger than "1".

// Because of this, the sort() method will produce an incorrect 
// result when sorting numbers.

// 1: How to Sort the numbers in the array in ascending (up) and descending (down) order?

// compareFunction	Optional. 
// A function that defines an alternative sort order. The function should return a negative, zero, or positive value, depending on the arguments, like:
// function(a, b){return a-b}

// for asecnding order 
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


// 2: sort the array in descending order

// var fruits = ["Banana", "Orange","Apple","Mango"]

// let afruits = fruits.sort();
// console.log(afruits);;

//    Array.prototype.reverse()
// // The reverse() method reverses an array in place. 
// // The first array element becomes the last, and 
// // the last array element becomes the first.

// let arr = [1,2,3,4,5,6,7];
// console.log(arr.reverse());

// Perform curd in js

// Array.push()
// The push() method adds one or more elements to the 
// end of an array and returns the new length of the array.

// const animals = ['goat', 'dog', 'cow', 'sheep'];
// animals.push('ox');
// console.log(animals);



// Array.unshift()
// The unshift() method adds one or more elements to the 
// beginning of an array and returns the new length of the array.

// const animals = ['goat','sheep','cow','ox'];
// animals.unshift('dog','hen','chicken');
// console.log(animals);




// 2nd example 

// const myNumbers = [1,2,3,5];

// myNumbers.unshift(4,6);
// console.log(myNumbers);

// Array pop()
// The pop() method removes the last element from an array and returns 
// that element. This method changes the length of the array.

// const fruits =['banana', 'orange', 'apple','date'];
// console.log(fruits);
// console.log(fruits.pop());
// console.log(fruits);

// let arr = [1,2,3,4,5,6];
// arr.pop();
// console.log(arr);

// Array.shift()
// The shift() method removes the first element from an array and returns 
// that removed element. This method changes the length of the array.

// const fruits = ['apple','banana','orange', 'date', 'mango'];
// console.log(fruits);
// console.log(fruits.shift());
// console.log(fruits);


// Array.splice() 
// Adds and removes elements from an array.

// 1: Add Dec at the end of an array?
// 2: What is the return value of splice method?
// 3: update march to March (update)?
// 4: Delete June from an array?

// it will take the fout argument in the function 

// splice(start)
// splice(start, deleteCount)
// splice(start, deleteCount, item1)
// splice(start, deleteCount, item1, item2, itemN)                                                      

// 1. first is the start 
// 2.second is the deletecount
// 3. Thrid  is the update the item1 

// Remove an element using a splice method

// const months = ['Jan', 'March', 'April', 'June'];
// months.splice(1, 1, 'Feb');
// Inserts at index 1
// console.log(months)


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



//  Map and Reduce Method 

// Array.map()

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


//challenge 

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

// console.log(arr.flat(Infinity));







// console.log(flatArr);


// const arr = [ ['zone_1', 'zone_2'], ['zone_3', ['zone_1', 'zone_2', ['zone_1', 'zone_2']]] ];
// console.log(arr.flat(3));
// console.log(arr);



//                       Map in js 

// map() creates a new array from calling a function for every array element.

// map() calls a function once for each element in an array.

// map() does not execute the function for empty elements.

// map() does not change the original array.

// it to be transform an array 
// it will return the new array 
// The map() method creates a new array populated with the results of calling a provided
//  function on every element in the calling array.


// const arr = [1,2,3,4,5,6];
// const output = arr.map((x) => x * 3)
// console.log('rohit');




// // function double(x){
// //     return x * 2;
// // }

// // function binary(x){
// //     return x.toString(2);
// // }
// const output = arr.map((x) => x.toString(2))

// // const output = arr.map(binary);
// console.log(output);


//          Filter in js 

// The filter() method creates a new array filled with elements that pass a test provided by a function.

// The filter() method does not execute the function for empty elements.

// The filter() method does not change the original array.

// filter the element inside the array 
// Search the element inside the array
// The filter() method creates a shallow copy of a portion of a given array,
// filtered down to just the elements from the given array that pass the
// test implemented by the provided function.

// const arr = [1,2,3,4,5];

// const output = arr.filter((x) => x > 3);
// console.log(output);

// let arr = [1,2,3,4,5];
// const arr1 = arr.filter((x)=> x>2);
// console.log(arr1);


//           Reduce in js 

// The reduce() method executes a reducer function for array element.

// The reduce() method returns a single value: the function's accumulated result.

// The reduce() method does not execute the function for empty array elements.

// The reduce() method does not change the original array.

// The reduce() method executes a user-supplied "reducer" callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value.
// it will take the callback function and two argument (acuumalator ,current value)
// And we are passing to the initial value

// const arr = [5,1, 2,3,4,6];

// sum or max    

// function findMax(arr){
//     let max = 0;
//     for(let i = 0; i<arr.length; i++){
//         if(arr[i] > max){
//             max = arr[i];
//         }
//     }
//     return max;
// }
// console.log(findMax(arr));

// const output = arr.reduce(function(acc, curr){
//     if(curr > acc){
//         acc = curr;
//     }
//     return acc;
// },0)
// console.log(output);










// const arr = [1,2,3,4,5,6];
// const output = arr.reduce(function(acc,curr){
//     if(acc > curr){
//         acc = curr
//     }
//     return acc;
// },10)
// console.log(output);


