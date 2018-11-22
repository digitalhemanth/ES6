function person(name){
    this.name=name;
}
person.prototype.show = function(){
    console.log('his name is '+ this.name);
}
function Employee(name){
    person.call(this,name);
}
Employee.prototype = Object.create(person.prototype);
Employee.prototype.constructor = person;

Employee.prototype.Comp= function(){
         console.log(this.name + ' is a software developer.');
}
var hem = new Employee('hemanth');
hem.show();
hem.Comp();

