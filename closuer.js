function greet() {
    const Ms="helo";
    function greeting(){
        console.log(`hi ${this.Ms}`);
    }
    greeting();
}
greet();