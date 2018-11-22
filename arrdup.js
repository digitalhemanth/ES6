var arr = ['hemanth','priyanka','hemanth','hem'];
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
