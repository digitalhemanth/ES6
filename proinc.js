
function Person( name ){
       this.name = name;

};
Person.prototype.getdata = function(){
        console.log(`Name : ${this.name} `);
};

function Emp(name,des){
    Person.call(this,name);
    this.des=des;
};
Emp.prototype = Object.create(Person.prototype);
Emp.prototype.constructor = Emp;

Emp.prototype.show = function(){
    console.log(`Name : ${this.name} Job : ${this.des}`)
}

var e = new Emp("hemanth","Front-end developer ");
e.show();
e.getdata();