// call in js 
// The call() method calls the function with a given 
// this value and arguments provided individually.
// which is invoked a function directly passing the reference when show this varialbe inside the variable
let name = {
    firstname: "Rohit",
    lastname: "Kumar",
}

let printFullName = function(hometown, state){
    console.log(this.firstname + " " + this.lastname + " from " + hometown + ", " + state)
}
printFullName.call(name, "Nehtaur", "Bijnor");

let name2 = {
    firstname: "shrish",
    lastname: "raj gupta",
}

// function borrowing 
printFullName.call(name2, "mandawar","bijnor");

//           Apply Method
// and first  methods a function
// this method takes a 2nd arguments as a arraylist 

printFullName.apply(name2, ["mandawar","bijnor"]);

//                    Bind methods
   

let printMyName = printFullName.call(name2, "mandawar","bijnor");