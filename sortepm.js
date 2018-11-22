
var employees = [
    {name: 'Hemanth', salary: 90000, hireDate: "July 1, 2010"},
    {name: 'Priyanka', salary: 75000, hireDate: "August 15, 2009"},
    {name: 'Priya', salary: 80000, hireDate: "December 12, 2011"}
];
function displayList(employees) {
    employees.forEach(function (e) {
        console.log('name:' + e.name +
            ';salary:' + e.salary +
            ';hireDate:' + e.hireDate);
    });
}

// sort by salary
employees.sort(function (x, y) {
    return x.salary - y.salary;
});
// display the employee list
displayList(employees);


employees.sort(function (x, y) {
    var a = new Date(x.hireDate),
        b = new Date(y.hireDate);
    return a - b;
});
displayList(employees); 