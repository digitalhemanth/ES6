const s = new Set([1,8,9,'hemanth',2.5])
console.log(s);
let x = [...s.keys()];
console.log(x);
s.forEach(i => {
    console.log(i);
});