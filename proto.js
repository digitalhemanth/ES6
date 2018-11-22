function person(name){
        this.name = name;
        this.show = function() { 
    console.log("Hi " + this.name);
} 
}
let x = new person('hemanth', 24);
x.show();