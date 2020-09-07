
function PromisedError ( delayInMs ){
    return new Promise(
        ( resolve, reject )=> {
            setTimeout( function() { reject( "Awwww!" )} , delayInMs)
        }
    );
}

function PromisedValue ( value, delayInMs ){
    return new Promise(
        ( resolve )=> {
            setTimeout( function() { resolve( value )} , delayInMs)
        }
    );
}

function PromisedRandom ( delayInMs ){
    return new Promise(
        ( resolve )=> {
            setTimeout( function() { resolve( Math.random() )} , delayInMs)
        }
    );
}

// Gives you a Promise that all Promises will be finished
Promise.all([
    PromisedRandom(100),
    PromisedRandom(200),
    PromisedRandom(300)
])
.then( val => {
    // console.log(val);
});

// Gives you a Promise that all Promises will be finished

Promise.race([
    PromisedValue( 1, Math.random() * 1000 ),
    PromisedValue( 2, Math.random() * 1000 ),
    // PromisedError(    Math.random() * 100  ),
    PromisedValue( 3, Math.random() * 1000 )
])

.catch(
    error => {
        console.log('a horse exploded:', error );
        return 'Samis head exploded';
    }
)

.then( val => {
    console.log( 'and the winner is:', val );
})
