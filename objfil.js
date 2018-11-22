/* var person : {
    [
    "person1" : {
             "name":"hemanth",
             "age": 24,
             "gendar":"male"
    },
    "person2" :{
        "name":"Priyanka",
        "age": 24,
        "gendar":"Female"
    },
    "person3" : {
        "name":"hema",
        "age": 23,
        "gendar":"Female"
}
];
var list = [];
var data = JSON.parse(person, function ( key, value) { 
    if ( value.gendar === "Female" ) list.push(value); 
    return value; })

console.log( list ); */