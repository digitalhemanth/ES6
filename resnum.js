num = 1221;
res = num.toString().split('').reverse().join('');
console.log(res);
if(num==res){
    console.log("same number");
} else
 {
     console.log("ho sorry , number mismatch");
}