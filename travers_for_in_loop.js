// its a part of es6
// first we are use for loop for array traversal
// after we will see for in loop for array traversal.

// using for loop
// var myfriends = ['arjun','vinod','zampa','vishal'];
// for(i=0;i<myfriends.length;i++){
//     console.log(myfriends[i]);
// }

// using for in loop

var myfriends = ['arjun','vinod','ramesh','vishal'];
for(let elements in myfriends){
    console.log(elements);
}
// it shows only index no. of array
