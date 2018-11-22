
const doSomethingAsync = () => {
    return new Promise((resolve) => {
        setTimeout(() => resolve('I did something'), 3000);
    })
}

const doSomething = async () => {
    console.log(await doSomethingAsync());     // await 
}

console.log('Before');
doSomething();
console.log('After');

/* When you want to call this function you prepend await, 
     and the calling code will stop until the promise is resolved or rejected. 
 One caveat: the client function must be defined as async.*/