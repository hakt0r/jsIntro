// Random Dream

function RandomDream ( milliseconds ) {
    return new Promise(
        ( resolve, reject )=> {
            setTimeout( () => {
                if ( Math.random() > 0.5 ){
                    resolve('I saw a princess!!!')
                } else {
                    reject('I saw a ghost!!!')
                }
            }, milliseconds )
        }
    );
}

RandomDream(10)
.catch( error => {
    console.log('oooh that was a bad one!', error );
    return "Even though i saw a ghost!"
})
.then(  value => { console.log('oooh im happy', value) } )
.then(  value => { console.log('now im awake') } )
