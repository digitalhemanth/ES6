var x = 10;
function testLet() {
    var y = 15;
    var x = 5;
    if (x == y) {
        console.log('true');
    }
    console.log('false');
    console.log(x);
    console.log(y);
    console.log(x);
}
testLet();
