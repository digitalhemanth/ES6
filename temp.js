var property = Symbol();
class Something{
    constructor()
{
    this[property]="test";
}}
var instance = new Something();
console.log(instance.property);

/*function outerfunction(i){
       var var1=3;
       function innerfun(j){
            console.log(i+j+(++var1));
       }
       innerfun(10);
}
outerfunction(2);



/*var foo = {
    color : "red",
    getcolor : function(){
        return foo.color;
    }
}
foo.getcolor();

/*
 var x = 21;
var fun = function(){
    console.log(x);
    var x=20;
};

fun();



let x = null;
let y = undefined;
console.log(typeof(x));
console.log(typeof(y));
console.log(typeof(x)==typeof(y));



 console.log(0.1+0.2);
console.log(0.1+0.2== 0.3);



const arr = [10,12,15,21];
for ( var i=0; i<arr.length; i++){
    setTimeout(function(){
       console.log('Index:'+ i +',element:'+ arr[i]);
      
    },3000);
}



function getCar(){
    return {
        "vahical":"maruthi"
    };
}

function getTruck(){
    return{
        "truck":"tesla"
    };
}
getCar();
getTruck(); */

