//       cLOSURE IN JS 
// A closure is the combination of a function bundled together (enclosed) with references
//  to its surrounding state (the lexical environment). In other words, a closure gives you
//   access to an outer function's scope from an inner function. In JavaScript, closures are
//    created every time a function is created, at function creation time.

// EX 

// function x(){
//     var a = 7;
//     function y(){
//         console.log(a);
//     }
//     y();
// }
// x();

// ex 

// function x(){
//     var a = 7;
//     function y(){
//         console.log(a);
//     }
//     return y;
// }
// var z = x();
// console.log(z);
// z();

// 

function x (){
    for(var i = 1; i<=5; i++){
        function close(i){
            setTimeout(function (){
                console.log(i);
            },i * 1000)
        }
        close(i)

    }
}
x();

// function x(){
//     for(let i=1; i<=5; i++){
//         setTimeout(function (){
//             console.log(i)
//         }, i * 1000 )
//     }
   
// }
// x();

// function x (){
//     var a = 7;
//     function y(){
//         console.log(a);
//     }
//     y();
// }
// x();
// function x(){
//     for(var i = 1; i<=5; i++){
//         function close(i){
//             setTimeout(function ()  {
//                 console.log(i)
//             }, i * 1000);
//         }
//         close(i);
//     }
// }
// x();