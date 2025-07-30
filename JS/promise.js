//                   Promise

// The Promise object represents the eventual completion (or failure) of an
// asynchronous operation and its resulting value.

// A Promise is in one of these states:

// pending: initial state, neither fulfilled nor rejected.
// fulfilled: meaning that the operation was completed successfully.
// rejected: meaning that the operation failed.

// const cart = ["shoes", "pants", "kurta"];

// createOreder(cart)
// .then((orderId) => proceedToPayment(orderId))
// .then((paymentInfo) => showOrderSummary(paymentInfo))
// .then((paymentInfo) => updateWalletBalanceInfo(paymentInfo));

// Resolve example of promises

// var promise = new Promise(function(resolve, reject) { 
//     resolve('Geeks For Geeks'); 
// }) 
    
// promise 
//     .then(function(successMessage) { 
//        //success handler function is invoked 
//         console.log(successMessage); 
//     }, function(errorMessage) { 
//         console.log(errorMessage); 
//     })

// Reject example of promises

// var promise = new Promise(function(resolve, reject) { 
//     reject('Promise Rejected') 
// }) 
    
// promise 
//     .then(function(successMessage) { 
//         console.log(successMessage); 
//     }, function(errorMessage) { 
//        //error handler function is invoked 
//         console.log(errorMessage); 
//     })

// var promise = new Promise(function(resolve, reject) { 
//     const x = "geeksforgeeks"; 
//     const y = "geeksforgeeks"
//     if(x === y) { 
//       resolve(); 
//     } else { 
//       reject(); 
//     } 
//   }); 
      
//   promise. 
//       then(function () { 
//           console.log('Success, You are a GEEK'); 
//       }). 
//       catch(function () { 
//           console.log('Some error has occurred'); 
//       });

// async await exmaplesss
// const p = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("P is resolved")
//     }, 2000);
// })

// async function handlePromise(){
//     console.log("Hello World");
//     const val = await p;
//     console.log(val);
//     console.log("Hii, i am rohit kumar")
// }

// handlePromise();

// async await example using the callback function 

const handlePromise = async () => {
 let y = await "Hello world";
    console.log(y);
}

console.log('1');
handlePromise();
console.log('2')

