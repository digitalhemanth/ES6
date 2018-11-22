var arr = ['hemanth','priyanka','hemanth','hem'];
function dup(arr){
    let x = arr.filter(function(elem, index, self) {
        return index == self.indexOf(elem);
    });
    return x;
}

console.log(dup(arr));
