// Scope in js 
// The scope is the current context of execution in which values and expressions are "visible" or can be
// referenced. If a variable or expression is not in the current scope, it will not be available for use. 
// Scopes can also be layered in a hierarchy, so that child scopes have access to parent scopes, but not
//  vice versa.

//       Scope chaining in js 

// When a variable is used in JavaScript, the JavaScript engine will 
// try to find the variable's value in the current scope. If it could 
// not find the variable, it will look into the outer scope and 
// will continue to do so until it finds the variable or reaches 
// global scope.

//       Lexical Scope in js

// Lexical scope is the definition area of an expression.

// In other words, an item's lexical scope is the place in which the
// item got created.

// is the ability for a function scope to access variables from the 
// parent scope.

//        Note:

// Another name for lexical scope is static scope.
// The place an item got invoked (or called) is not necessarily 
// the item's lexical scope. Instead, an item's definition space is 
// its lexical scope.

// function a(){
//     var b = 10;
//     c();
//     function c(){
//         console.log(b);
//     }
// }
// a();