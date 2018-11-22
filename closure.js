function Greet(msg){
    this.msg = msg;            // block variable 
    function show(){
        console.log(msg);   //lexical scopeing 
    } 
    show();
}
Greet("hi hemanth");