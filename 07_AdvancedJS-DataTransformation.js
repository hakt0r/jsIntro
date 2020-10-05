
/*
    Transforming Objects into Arrays:
        - Object.keys    => Array of all keys
        - Object.values  => Array of all values
        - Object.entries => Array of [key,value]
*/

const obj = {
    Apple:     123,
    IBM:       432,
    Microsoft: 213
}

Object.keys(obj)    // ['Apple','IBM','Microsoft']
Object.values(obj)  // [123,432,213]
Object.entries(obj) // [['Apple',123],['IBM',432],['Microsoft',213]]

// Converting the data into a Table:
// <table>
//  <tr><td>Apple</td><td>123</td></tr>
// </table>
// Bonus: Ignore IBM, they're old

let aTable = document.createElement('table');

aTable.innerHTML = Object
.entries ( obj )
.filter  ( ( [key]       ) => key !== 'IBM' )
.map     ( ( [key,value] ) => `<tr><td>${key}</td><td>${value}</td></tr>` )
.join    ( '' )

// But this is not secure enough, our data source could be evil
// avoid using innerHTML

let aTable = document.createElement('table');

Object
.entries ( obj )
.filter  ( ( [key]       ) => key !== 'IBM' )
.forEach ( ( [key,value] ) => {
    const tr  = document.createElement('tr');
    const td1 = document.createElement('td');
    const td2 = document.createElement('td');
    td1.innerText = key;
    td2.innerText = value;
    tr.appendChild(td1);
    tr.appendChild(td2);
    aTable.appendChild(tr);
});

// This is secure but alot to write, so let's
//   use a template engine, like... handlebars

let template = Handlebars.compile(`
<table>
  {{#each obj}}
  	<tr><td>{{@key}}</td><td>{{this}}</td></tr>
  {{/each}} 
</table>`);

$("body").append(template({obj}));

// but now we forgot to filter

// option 1, when you know exactly what to filter
//  BUT: this would destroy our original obj

//delete obj.IBM;

// option 2, create a filtered object

const filteredObj = {};

Object
.entries(obj)
.filter( ([key,value])=> {
    if ( ! key.toLowerCase().includes( 'i' ) ){
    filteredObj[key] = value;
}});

// render with handlebars
let template = Handlebars.compile(`
<table>
  {{#each obj}}
  	<tr><td>{{@key}}</td><td>{{this}}</td></tr>
  {{/each}} 
</table>`);

$("body").append(template({obj:filteredObj}));

/*
    Object within arrays
*/

const apiReply = [
    { t: 21, h: 29, r:0  },
    { t: 25, h: 44, r:36 },
    { t: 22, h: 48, r:58 },
    { t: 26, h: 87, r:73 },
    { t: 24, h: 67, r:23 },
    { t: 16, h: 80, r:43 },
    { t: 15, h: 83, r:85 },
    { t: 5,  h: 7,  r:51 },
    { t: 18, h: 67, r:22 },
    { t: 7,  h: 87, r:78 },
    { t: 32, h: 17, r:50 },
    { t: 18, h: 41, r:61 },
    { t: 2,  h: 68, r:44 },
];

// convert into an array of all t-values

let tempCurve = apiReply.map( temp => temp.t );
let tempCurve = apiReply.map( ({t}) => t );
// => [ 21, 25, 22, 26, 24, 16, 15, 5, 18, 7, 32, 18, 2 ]

let tempHumidCurve = apiReply.map(
    humidity => { return { h:humidity.h, t:humidity.t } }
);

let tempHumidCurve = apiReply.map(
    humidity => ({ h:humidity.h, t:humidity.t })
);

let tempHumidCurve = apiReply.map( ({h,t}) => ({t,h}) );

// let's say i want only the temperatures but, sorted <
let sortedTemps = apiReply
.map ( ({t}) => t )
.sort( (a,b) => a - b )

// one level harder: sorted and under 25 degrees
let sortedTemps = apiReply
.map    ( ({t}) => t )
.sort   ( (a,b) => a - b )
.filter (     t => t <= 25 )

// Quick excourse, does order matter inside object
let a = 1;
let b = 2; 

// the object keys here will actually have a different order
console.log( Object.keys({ a, b }) );
console.log( Object.keys({ b, a }) );

// on a good day this might even survive a JSON incarnation
// but you have no guarantee, JSON is kind of a mystery :D
console.log( JSON.parse(JSON.stringify({ a, b })) );
console.log( JSON.parse(JSON.stringify({ b, a })) );

// one for the mind-blow

const ridiculousResponse = [
    { t: [1,  3,      123,  435,  54345, 2    ] },
    { t: [36, 24114,  564,  3892, 3880,  5544 ] },
    { t: [81, 1016,   2467, 2779, 2599,  33090] },
    { t: [10, 6,      1083, 3278, 505,   32021] },
    { t: [37, 35836,  81,   1558, 122,   35594] },
    { t: [1,  3,      123,  435,  54345, 2    ] },
    { t: [36, 24114,  564,  3892, 3880,  5544 ] },
    { t: [81, 1016,   2467, 2779, 2599,  33090] },
    { t: [10, 6,      1083, 3278, 505,   32021] },
    { t: [37, 35836,  81,   1558, 122,   35594] },
    { t: [83, 13418,  1501, 771,  2643,  35322] }
];

//   get every second number of a t into a new
//   object with a t key

const everySecondNumber = ridiculousResponse
.map( data => ({t:data.t[1]}) );

// get an array of the diagonal numbers

const diagonalNumbers = ridiculousResponse
.map( (data,index) => data.t[index] );
// % data.t.length - would limit index from 0 to 5 then reset
// data.t = [1, 3,    ...], index = 0
// data.t = [36,24114,...], index = 1

const reverseDiagonalNumbers = ridiculousResponse
.map( (data,index) => data.t[data.t.length - index - 1] );
