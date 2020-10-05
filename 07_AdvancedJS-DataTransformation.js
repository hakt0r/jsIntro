
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

