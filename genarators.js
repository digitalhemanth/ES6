function *infinate(){
   let i = 0;
   while(true){
        yield i;   
        i++;
   }

}
let e = infinate();
console.log(e.next());
console.log(e.next());
console.log(e.next());
console.log(e.next());
