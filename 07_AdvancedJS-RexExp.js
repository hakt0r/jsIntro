
/*
    .match - true or false depending on the search
    .split - return an array with the search as the "knife"

    /^asd/ - will match the beginning of the string 
    /asd$/ - will match the end of the string

    /[a-z]/ - character classes allow you to specify
    /[0-9]/   alternatives, one of the given
    /\d/      needs to macht but not all of them

    * . {}  - Quantifiers or multipiers help you
              to define longer repetetive sections inside a
              string. Usually use them in combination with a
              character class.
*/

"asd".match( /a/  )      // true
"asd".match( /^a/ )      // true
"asd".match( /a$/ )      // false
"asd".match( /^[as]/ )   // true
"asd".match( /^[as]+/ )  // true
"asd".match( /^[as]+$/ ) // false
"asd".match( /^[as]*$/ ) // true