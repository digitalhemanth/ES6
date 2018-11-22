let arr = ["hemanth","kumar","divya","maha","hema"];
let mm = [25, 58.24,11,1,5,77];
arr.sort(function(a, b) { 
         if(a>b){
             return -1;
         } 
         if(b>a){
             return 1;
         }
         return 0;
});
mm.sort(function(a, b) { 
    if(a>b){
        return -1;
    } 
    if(b>a){
        return 1;
    }
    return 0;
});
console.log(arr);
console.log(mm);