
try {
    // .. what to try
} catch ( error ) {
    // .. what to do with the error
}

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