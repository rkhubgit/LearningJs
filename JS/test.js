

// we one array the have extra property than i want to print only original property 
// Array.prototype.extraProperty = "Rohit Kumar";

// const newArray = [1,2,3,4,5];

// // for(let v in newArray){
// //     console.log(v)
// // }

// for(let V in newArray){
//     if(newArray.hasOwnProperty(V)){
//         console.log(V)
//     }
// }


// closure 
// function a(){
//    let a = 10;

//    function b(){
//     console.log(a);
//    }
//    b();
// }
// a();



// Hoisting 

// const a = 10; // it will work on the var and let 
// function b (){
//     console.log(a);
// }

// b();

// High order function 
// function b(){
//     console.log("Rohit Kuamr");
// }

// function a(action){
//     action();
//     action();
// }
// a(b);

// callBack function 
// var a = function b(){
//     console.log('Rohit Kumar')
// }

// a();

// Event Loop
// console.log("Start");
// setTimeout(() => {
//     console.log("setTimeout Called");
// })

// Promise.resolve().then(() => {
//     console.log("Rohit Kumar");
// })
// console.log("end")

//Promise 

// let checkEven = new Promise((resolve, reject) => {
//     let num =10;
//     if(num%2 ===0){
//         resolve('number is even')
//     }else{
//         reject('number is odd');
//     }
// })

// checkEven
// .then((msg) => console.log(msg))
// .catch((err) => console.log(err))

// Async and Await
// const getData = async() => {
//     let y = await "Rohit Kumar";
//     console.log(y);
// }

// console.log(1);
// getData();
// console.log(2)


// call Apply Bind

// call methods
// let userDetails = {
//     name: 'Rohit Kumar',
//     Add: "Nehtaur"
// }

// const printDetails = function( home){
//     console.log(`Your full is ${this.name} and you are from ${this.Add} your home in ${home}`);
// }

// call Methods 
// printDetails.call(userDetails, "Rukhadiyo");

// apply methods
// printDetails.apply(userDetails, ["Mandawar"]);

// bind methods
// const userData = printDetails.bind(userDetails, "Rukhadiyo");
// userData();


// shallow and deep copy

// let emp = {
//     name: 'Rohit Kumar',
//     Add: 'Nehtaur',
//     Company: "MagicedTech",

// }

// Shallow copy Examples
// let empData = emp;
// empData.name = "Mohit Kumar"
// console.log(`-------------old Data------------------`);
// console.log(emp);
// console.log(`------------After Change-----------------`);
// console.log(empData)

// Deep Copy Examples
// let empData = JSON.parse(JSON.stringify(emp))
// empData.name = "Mohit Kumar"
// console.log(`-------------old Data------------------`);
// console.log(emp);
// console.log(`------------After Change-----------------`);
// console.log(empData)

// debouncing 
// function debounce(fn, delay) {
//   let timer;
//   return function (...args) {
//     clearTimeout(timer);
//     timer = setTimeout(() => fn.apply(this, args), delay);
//   };
// }

// Throttling
// function throttle(fn, delay) {
//   let last = 0;
//   return function (...args) {
//     let now = Date.now();
//     if (now - last >= delay) {
//       fn.apply(this, args);
//       last = now;
//     }
//   };
// }

// scope and scope chaining

// let age =23;

// function displayAge(){
//   let name = "Rohit Kumar";

//   function displayName() {
//     console.log(name);
//     console.log(age);
//   }
//   displayName();
// }

// displayAge();