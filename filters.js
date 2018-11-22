
var family = [{"name":"Jack",  "age": 26},
              {"name":"Jill",  "age": 22},
              {"name":"James", "age": 5 },
              {"name":"Jenny", "age": 2 }];
              
let x = family.filter(person => person.age > 20);
console.log(x);