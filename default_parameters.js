// default function parameters allow named 
// parameters to be initialized with default
// values if no value or undefined value is 
// passed.
function mult(a,b=5){
    return a*b;
}
console.log(mult(3));

// first parameter assigned this 3 value.