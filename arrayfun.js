let array = [14,1,7,3,0.5,45];                  // Array 

console.log(array);

function Show(){
    for( let i=0; i<array.length; i++){
         console.log(array[i]) ;       
    }
}
Show();

let x = Math.min(...array);             // min() to find min value of an array 
console.log("min is " +" " + x);

let y = Math.max(...array);            // max() to find max value of an array 
console.log("max is " +" " +y);

const sum = array.reduce((a,b)=> a+b , 0);       // reduce to find sum of array 
console.log("sum" +" " +sum);

let len = array.length;
console.log(len);

const avg = array.reduce((a,b)=> a+b , 0) / array.length;      // avarage of an array 
console.log("avg "+" " +avg);