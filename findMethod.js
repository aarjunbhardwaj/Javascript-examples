const prices = [200,250,300,340,400,500,600];
// price < 400

// instead of this
// const findElem = prices.find((currVal)=>{
//     return currVal < 400;
// });

// console.log(findElem);


// it returns only one element

// we can use beauty fat arrow function

console.log(prices.find((currVal)=>currVal<400));