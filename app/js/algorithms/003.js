//
// Solution
// APP.reverseInPlace
//
// "If you have a string like 'I am the good boy'. How can you generate 'I ma 
// eht doog yob'? Please note that the words are in place but reverse."
//
(function( module ) {

    "use strict";

    /**
     * @desc: Solution of algorithm 003
     */
    module.reverseInPlace = function( str ){
        // convert to array
        var i,
            len = 0,
            arrReverse = [],
            arrOriginal = [];

        // make an array from the string
        // "bla bla" ==> ["bla","bla"]
        arrOriginal = str.split(" ");
        len = arrOriginal.length;

        // reverse each element
        for( i = 0; i < len; i++) {
            // add the reversed element to arrReverse
            arrReverse.push( APP.Helpers.reverseString( arrOriginal[ i ] ) );
        }
        
        return arrReverse.join(" ");
    };

    /**
     * @desc: Another solution of algorithm 003
     * Seen at http://www.thatjsdude.com/interview/js1.html#reverseInPlace
     */
    module.reverseInPlace2 = function( str ){
                              // "abc def ghi" --> input
        return str.split(" ") // ["abc", "def", ghi]
                .reverse()    // ["ghi", "def", "abc"]
                .join(" ")    // ["ghi def abc"]
                .split("")    // ["g", "h", "i", " ", "d", "e" ... ]
                .reverse()    // ["c", "b", "a", " ", "f", "e", ... ]
                .join("");    // "cba fed cba" --> output
    };
}.call( this, APP ) );