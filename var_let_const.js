// difference between var, let and const ..

// var myName = "arjun";
// console.log(myName);
// myName = "Arjun Bhardwaj"
// console.log(myName); // we can change name

// let myName = "Arjun";
// console.log(myName);
// myName = "Arjun Bhardwaj"
// console.log(myName); // with let also can change name

// const myName = "Arjun" ;
// console.log(myName);
// myName = "Arjun Bhardwaj";
// console.log(myName);// here we can't change name

// function scope
// in function scope we can change and see 
// the data anywhere
// function biodata(){
//     myName="Arjun Bhardwaj";
//     console.log(myName);
//     if(true){
//         var mySirName = "Bhardwaj"
//         console.log('inner ' + myName);
//         console.log("inner "+ mySirName);
//     }
//     console.log("inner outer " + mySirName);
// }
// biodata();

// block scope

function biodata(){
    let myFirstName = "Arjun";
    console.log(myFirstName);
if(true){
    let mySirName = "Bhardwaj";
    console.log(mySirName);
    console.log(myFirstName);
}
//console.log(mySirName); // here is error its out of blockscope
}
//console.log(myFirstName); // this is also out of blockscope
biodata();