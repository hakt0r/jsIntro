

let promise = new Promise(
    ( resolve, reject )=> {
        setTimeout( resolve, 1000 )
    }
);

console.log(promise); // Promise { <pending> }

promise.then(
    ()=> { console.log("it's fulfilled at 1000 ms") }
)

// This gives the Sleep function

function Sleep ( milliseconds ) {
    return new Promise(
        ( fulfilled )=> {
            setTimeout( fulfilled, milliseconds )
        }
    );
}

Sleep( 42 )
.then( ()=> console.log('i just woke up after 42 ms') )
.then( ()=> { return Sleep(1000) } )
.then( ()=> console.log('! i think im done here (also 1042 ms)') )
.then( ()=> console.log('! i just woke up after 1042 ms') )
.then( console.log('im not inside a function') ) // << wrong

// callback hell version

setTimeout( ()=> {
    console.log('i just woke up after 42 ms')
    setTimeout( ()=>{
        console.log('! i just woke up after 1042 ms')
        console.log('! i think im done here (also 1042 ms)')
    }, 1000 )
}, 42 )

console.log('im not inside a function')

// 

// This gives the Sleep function

function SleepAndRandom ( milliseconds ) {

    return new Promise (

        ( resolve, reject )=> {

            setTimeout( ()=> {

                let num = Math.random();
                resolve(num);
                
            }, milliseconds )

        }

    );

}

SleepAndRandom(1000)
.then( num => {
    console.log('random 1:', num)
    return num + 1;
})
.then( num => {
    console.log('random 2:', num)
})
.then( num => {
    return SleepAndRandom(1000);
})
.then( num => {
    console.log('random 3:', num)
})

SleepAndRandom(0)
.then( num => { console.log(num); return num + 1 } )
.then( num => { console.log(num); return num + 1 } )
.then( num => { console.log(num); return num + 1 } )
.then( num => { console.log(num); return num + 1 } )
.then( num => { console.log(num); return num + 1 } )
.then( num => { console.log(num); return num + 1 } )

// Breaking a promise

function BadDream ( milliseconds ) {
    return new Promise(
        ( resolve, reject )=> {
            setTimeout( () => {
                reject('I saw a ghost!!!')
            }, milliseconds )
        }
    );
}

BadDream(2000)
.then(  val => { console.log('oooh im happy', val) } )
.catch(  () => { console.log('oooh that was a bad one1') })
.then(  val => { console.log('oooh im happy', val) } )
.then(  val => { console.log('oooh im happy', val) } )

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

RandomDream(3000)
.then(  val => { console.log('oooh im happy', val) } )
.catch(  () => { console.log('oooh that was a bad one1') })
.then(  val => { console.log('oooh im happy', val) } )
.then(  val => { console.log('oooh im happy', val) } )
