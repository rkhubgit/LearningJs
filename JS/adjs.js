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


//  Event Bubbling in js 
// Is a method of event  propagation in the HTML DOM API when an event is an element inside another element 
// and both element registered to a handle event 
// event  bubbling perform  the heirarchy
// event bubbling target the innnermost element and propagate outer element 
// event bubbling work on the bottom to the top





// <body>
//     <h2>Bubbling Event in Javascript</h2>
  
//     <div id="parent">
//         <button>
//             <h2>Parent</h2>
//         </button>
//         <button id="child">
  
//             <p>Child</p>
  
//         </button>
//     </div><br>
  
  
//     <script>
//         document.getElementById(
//         "child").addEventListener("click", function () {
//             alert("You clicked the Child element!");
//         }, false);
          
//         document.getElementById(
//         "parent").addEventListener("click", function () {
//             alert("You clicked the parent element!");
//         }, false);
//     </script>
  
// </body>


// event capturing in js 
// Event capturing in on the two way to do Event popagation in the HTML DOM API 
// Event capturing opposite to the evetn bubbling 
// Event capturing is work on the top to the bottom approch 
// Event cauturing target the outermost element 
// Event capturing is rarely useed



// call methods in javascript 

let name = {
    firstName: "Rohit",
    lastName: "Kumar",


}
let  printFullName = function(homeTown, state){
        console.log(this.firstName + " " + this.lastName + " from " + homeTown + " " + state);
    }
   
printFullName("Nehtaur", "UttarPradesh");

printFullName.call("Nehtaur", "UttarPradesh");

let  fullName = {
    firstName: "Shrish Raj",
    lastName: "Gupta"
}
// function borrowing 
printFullName.apply(fullName, ["Mandawar" , "Uttar Pradesh"])

let printMyname = printFullName.bind(fullName, "Mandawar", "Uttar Pradesh")
console.log(printMyname);

printMyname();
