function factorial(n) {
    var result = 1;
    for (let i = n; i > 1; i--) {
        result *= i;
    }
    console.log(result);
}
factorial(7); 