
const div  = document.querySelector("body > div:nth-child(1)");
const divs = document.querySelectorAll("div");
const ul   = document.querySelector("body > ul")

divs.forEach(div => {
    console.log(div)
    if ( div.style.border ){
        console.log(div.style.border)
    }
})

let i = 101, j = 24, k = -1;

while( i < 100 ){
    while( j < 23 ){
        while ( k > 0 ){
            i += j - 10;
            k--;
        }
    }
}