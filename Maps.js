let m = new Map();
m.set(01, 'hari');
m.set(02, 'Hemanth');
m.set(03, 'Hem');
m.set(07, 'Hems');


let arr = [...m.values()];
console.log(arr);
let ar = [...m.keys()];
console.log(ar);

for (const [k, v] of m.entries()) {
  console.log(k, v)
}

