class Person{
    constructor(name){
        this.name=name;
    }
    show() {
             console.log("this is "+this.name);
    }
}

class Employee extends Person {
    constructor(name,comp){
        super(name);
        this.comp=comp;
    }
    display(){
        console.log(this.name + 'is a Software developer. from '+ this.comp);
    }
}
var Emp = new Employee('Hemanth','Google');
Emp.show();
Emp.display();