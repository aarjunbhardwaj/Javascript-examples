// switch statement - evaluates an expression,
// matching the expression's value to a case
// clouse, and executes statements associated
// with that case.

// find the area of circle,triangle and rectangle
// with if else

// var area = "rectangle";
// var PI = 4.343 , l = 3 , b = 6 , r = 8;
// if (area == "circle"){
//     console.log("area of circle is : " + PI*r**2);
//     }
//     else if(area=="triangle"){
//     console.log("area of triangle is : " + (l*b)/2);
//     }
//     else if(area=="rectangle"){
//     console.log("area of rectangle is : " + (l*b));
//     }else{
//         console.log("Please enter valid data"); 
//    }

// we can do this in short way with the switch statement

var area = "circle";
var PI = 5.245 , l = 4, b = 4, r = 3;
switch(area){
  case "circle":
    console.log("area of circle is :"+ PI*r**2);  
break;    
  case "triangle":
    console.log("area of triangle is :"+(l*b)/2);
break;    
  case "rectangle":
    console.log("area of rectangle is :"+(l*b));
break;   
  default:
    console.log("Please Enter valid data");     
}