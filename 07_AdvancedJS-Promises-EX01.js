/*
Making Promises

Soooooo.....

This is the first set of exercises on promises.
A Promise is a mechanism frequently used in JavaScript to handle asynchronous
processes; that is, promises are how we reason about the business of waiting.

From a somewhat mechanical perspective, promises are simple state machines
with three possible states:

    Pending
    Resolved
    Rejected

Resolved and rejected are final states, which means that once a promise gets
to one of these states, it absolutely cannot go to any other state.
Pending can go either way. A promise that is either resolved or rejected
may also have a payload, a value that it carries. It's a little like an array
that can only contain one value. It's entirely possible that that value will
be undefined, but that's still a value.

How we access these values is the subject of a future chapter of exercises.
For now, we're going to focus on the mechanisms for making promises.
*/

/*
    Exercise 1
    Use Promise.resolve(value) to create a promise that will resolve
    with the value 3.
    new Promise ...
*/

let promise = new Promise ( // create a promise
    function ( resolve ) { // create a promise
        resolve(3); // that will resolve with the value 3
    }
);

// Golf:
// let promise = Promise.resolve(3);

promise.then( value => { console.log(value) })

/*
    Exercise 2
    Use Promise.reject(error) to create a promise that will reject with the
    string "Boo!"
*/

promise = new Promise ( // create a promise
    function ( resolve, reject ) { // create a promise
        reject("Boo!"); // reject with the string "Boo!"
    }
);

// Golf:
// let promise = Promise.resolve(3);

promise.catch( error => { console.log(error) })

/*
Exercise 3

You have the outline of a function
    makePromiseWithConstructor(itShouldResolve)

Use the Promise constructor to create a promise that will:

    resolve if itShouldResolve is truthy
    reject  if itShouldResolve is falsy
*/

function makePromiseWithConstructor(itShouldResolve){
    return new Promise(
        (resolve,reject)=> {
            if ( itShouldResolve ) resolve();
            else                   reject()
        }
    )
}

// truthy =: NOT ANY OF false | 0 | '' | null | undefined
makePromiseWithConstructor('yes')
.then( ()=> console.log('it resolved') )

// falsy =: false | 0 | '' | null | undefined
makePromiseWithConstructor(0)
.catch( ()=> console.log('it rejected') )

/*
    Exercise 
    This is a common use of the Promise constructor. If you want to simulate waiting
    for a value, a common technique is to create a function like the following.
    It simply accepts a value, and a delayInMs, then returns a promise that will
    resolve with that value after that delay.
*/

function PromisedValue ( value, delayInMs ){ // It simply accepts a value, and a delayInMs
    return new Promise(
        ( resolve )=> {
            setTimeout( function() { resolve(value) } , delayInMs)
        }
    );
}

PromisedValue(42,1000)
.then( value => console.log('promised', value) )
