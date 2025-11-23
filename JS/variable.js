// Naming a variable  Rules and Practice 
// the first character must be a letter or an underscore(_) or an 
// dollar($) you can't use a number as the first character



// The rest of the variable name can include any letter any number , or number or the underscore can't use any ohter
// character includeing spaces 
//  variable name are case sensitive 
// no limit to the length of the variable name
//  You can't use one of javascript reserved words as a variable name

// values and variable in javascript

// Naming Pratice

// var _myName = 'rohit kumar '


// var myName = "Ankona Singh";
// var 1myName = " Rohit Kumar";  only this variable is a invalid variable
// var _myName = "Ankona Singh";
// var _1my_Name = "Rohit Kumar";
// var $myName = "Rohit Kumar";
// var myName% = "kumar"; only this variable is a invalid variable


// console.log(_myName);


// reverse and string and array 

// const str = 'he is ram'
// let revStr = ""

// // let revStr = str.split("").reverse().join("")
// for(let i = str.length -1; i >= 0; i--){
//     revStr +=str[i] 
// }

// console.log(revStr)

// find the frequency of element 

// const str = 'qiuiewenfiewiioksmfiewihfjeweweisdnweiweiejewjwiodsfiojiew';

// let count = "";

// for(let i = str.length -1; i >=0; i--){
//     if(str[i] === 'i'){
//         count++
//     }
// }

// console.log(count)

// fibonacci series 

// let n = 10;
// let a = 0;
// let b = 1;
//  for (let i = 2; i <n; i++){
//     let c = a+b;
//     console.log(c)
//     a = b;
//     b = c;

//  }
// let num = 10;
// let checkEven = new Promise((resolve, reject) => {
//     if(num % 2 === 0){
//         resolve('number is even')
//     }else{
//         reject('number is odd')
//     }
// })

// checkEven.then((msg) => console.log(msg))
// .catch((err) => console.log(err))