var classA = function() {
        this.name = "classA";       
}
classA.prototype.print = function(){
    console.log(this.name);
}
var a = new classA();
a.print();