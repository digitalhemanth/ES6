const persion1 = { name:'hemanth',Emp:'Front-end developer',comp:'Google'};
const persion2 = { name:'Priyanka',Emp:'Software Tester ',comp:'Google'};
const persion3 = { name:'Priya',Emp:'Hr Manager', comp:'Google'};

function show(){
    console.log(` ${this.name} \n ${this.Emp}  @ ${this.comp}`)
}

show.call(persion1);
//Call invokes the function and allows you to pass in arguments one by one.

show.apply(persion2);
//Apply invokes the function and allows you to pass in arguments as an array.

let exp = show.bind(persion3);
exp();
//Bind returns a new function, allowing you to pass in a this array and any number of arguments.