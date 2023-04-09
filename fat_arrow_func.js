// Normal way of writing function is 
// here we are console this before initilization
// and its running
// console.log(sum());
// function sum(){
//     let a = 4 ; let b = 54;
//     let sum = a+b;
//     return `the sum of two no. is ${sum}`;
// }

// // in fat arrow => first define => after call
// const sum = () => {
//     let a = 4; let b = 6;
//     let sum = a+b;
//     return`the sum or two no.is ${sum} `;
// }
// console.log(sum());

// here we can do this also

// const mult = () =>{
// //let a = 5; b = 5;
// //return`the multiple of this ${a*b}`;
// return `multiplication is ${(a=5)*(b=5)}`
// }
// console.log(mult());

// if our code is one line than we need to write 
// return keyword and remove curly breakets
// because it will show undefined

const mult = () =>`the multipication is ${(a=5)*(b=4)}`;
console.log(mult());


