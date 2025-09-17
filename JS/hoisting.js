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

let x = 7;
function getName(){
    console.log('Rohit Kumar');
    var a = 8;
}
getName();
console.log(x);
// console.log(a);
console.log(getName);



// call  apply and bing methods

let name = {
    Fname: 'Rohit',
    Lname: 'Kumar',

    // printFullName: function(){
    //     console.log(`${this.Fname} ${this.Lname}`)
    // }
}

// name.printFullName();

let printFullName = function (hometown, state){
    console.log(`${this.Fname} ${this.Lname} from ${hometown} and state is ${state}`)
}

// call method
printFullName.call(name, 'Nehtaur', 'Uttar Pradesh')


let name2 = {
    Fname: "Mohit",
    Lname: 'Kumar', 


}
// call methods
printFullName.call(name2, "Nehtaur", 'Uttar Pradesh')


// apply method
printFullName.apply(name2,[ "Nehtaur", 'Uttar Pradesh'])


// bind method
let printmyName = printFullName.bind(name, 'Nehtaur', 'Uttar pradesh')
console.log(printmyName)

printmyName();