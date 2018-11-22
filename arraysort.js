let arr = [4,52,74,66,20,1];
let x = arr;
console.log('normal array '+ arr);
// assending order 

function Asn(a,b){
    return a-b;
}
arr.sort(Asn);
console.log('assending order '+ arr);

// desending order 

function Des(a,b){
    return b-a;
}
x.sort(Des);
console.log('desending order '+ x);