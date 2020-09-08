//

promise.then    ( callback )
promise.catch   ( callback )
promise.finally ( callback )

// 
promise
.catch( error => { return 123; } )
.then ( value => { return 123; })
.then ( value => {})
.then ( value => { return new Promise(...) })
let promise2 = // ^^^^^^^^^^^^^^^^^^^^^^^^
// wait for new Promise to finish
promise2
.then ( value => { return 123; })
.then ( value => {})

// The shortcuts
Promise.resolve ( value )
Promise.reject  ( error )

new Promise ( executor )

function excutor ( resolve, reject ){
    resolve ( value )
    reject  ( error )
}

// with then...

fetch( 'https://hktr.de/manifest.json' )
.then( response => response.json() )
.then( result   => console.log(result) )

// in an ideal world world... we can actually write

let response = await fetch( 'https://hktr.de/manifest.json' );
let   result = await response.json();

try {
    // .. what to try
} catch ( error ) {
    // .. what to do with the error
}


try {
    // .. what to try
} catch ( error ) {
    // .. what to do with the error
}

// 

function Sleep ( ms ){
    return new Promise( resolve => setTimeout( resolve, ms ) )
}

async function doFetch(){
    try {
        console.log('before fetch');
        eval('!==')
        let response = await fetch( 'https://kasualevents.de/app/manifest.json' );
        console.log('before response.json()',response);
        let   result = await response.json();
        await Sleep(2000);
        console.log(result);        
    } catch ( error ){
        console.error('!!!',error);
    }
}

console.log('before doFetch');

doFetch();

console.log('after doFetch');