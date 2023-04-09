// add dec in the end

//const months = ['jan','feb','march','nov'];
// const newMonth = months.splice(5,0,'dec');
//const newMonth = months.splice(months.length,0,'dec');
// console.log(months);

// what is the return value of splice method ?

//console.log(newMonth);

// its showing empty array because we did not 
// remove any element usually its uses for remove.

// update march to March 
// // if we know index number then

// const months = ['april','jan','march','May'];
// const newMonths = months.splice(2,1,'March');
// console.log(months);

// if we dont know index number

// const months = ['jan','feb','july','march','May'];
// const indexOfMonth = months.indexOf('jan');
// if(indexOfMonth != -1){
// const newMonths = months.splice(indexOfMonth,1,'March');
// console.log(months);
// }else{
//     console.log("No such data found")
// }

// delete June from an array ?

const months = ['jan','feb','march','june','may'];
const indexOfMonth = months.indexOf('june');
if(indexOfMonth!= -1){
newMonths = months.splice(indexOfMonth,1);
console.log(months);
console.log(newMonths);
}else{
    console.log("No such data found");
}