var arr = [1,0,5,7,5,1,2,5,0,3];
function dup(arr){
    let uar = []
    for(let i = 0;i < arr.length; i++){
        if(uar.indexOf(arr[i]) == -1){
            uar.push(arr[i])
        }
    }
    return uar;
}

console.log(dup(arr));
