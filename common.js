// var x = 5;
let x =6;       // Global scope 
function show( ){
    var y=5.5;
    var x=1;                               // block or function scope 
    console.log(x);
    // console.log(m);
    console.log(y);
}
show();
console.log(x);


/*
var x;
let l = 5;
console.log(l);
console.log(x);
x=9;
console.log(x); 
*/
