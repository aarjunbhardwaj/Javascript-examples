// how to find a leap year
// common years have 365 days
// leap year has 366 days
// leap year exactly divided by 4
// if it can be divide by 100, then it isn't.
// if it can be exactly divided by 400, then it is.

var year = 2040;
debugger;
if(year % 4 === 0){
if(year % 100 === 0){
if(year % 400 === 0){
console.log("the year" +  year + " is a leap year");
}else{
console.log("the year" + year + "is not a leap year");
}
}else{
    console.log("the year " + year + " is a leap year");
}    
}else{
    console.log("the year" + year + "is not a leap year");
}