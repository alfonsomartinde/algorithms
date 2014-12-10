//
// Solution
// APP.hasAnAnagramWithAPalindrome
//
// Giving a string (str), an anagram which has a palindrome, should have:
//
// * If str.length is odd: the number of each character must be even, but one.
// * If str.length is even: the number of each character must be even.
//
(function( module ) {

    "use strict";

    /**
     * @desc: Solution of algorithm 001
     */
    module.hasAnAnagramWithAPalindrome = function( str ){

        var i,
            len,
            prop,
            hasOddLength,
            character,
            amountOfOddCharacters = 0,
            hash = {};
        
        str = module.Helpers.removeWhiteSpaces( str );   // Remove white spaces
        str = str.split('').sort();                      // Make it an array
        len = str.length;                                // Get length
        hasOddLength = ( len % 2 !== 0 ) ? true : false; // Is length odd?

        // count the amount of every characters in str.
        for( i = 0; i < len; i++ ){
            character = str[ i ];
            hash[ character ] = hash[ character ] + 1 || 1;
        }

        // check the amount of odd characters in the strig.
        for ( prop in hash ) {
            if( hash[ prop ] % 2 !== 0 ){
                amountOfOddCharacters++;
            }
        }

        if( hasOddLength && amountOfOddCharacters !== 1 ){
            return false;
        }
        
        if( !hasOddLength && amountOfOddCharacters !== 0 ){
            return false;
        }
        
        return true;

    };

}.call( this, APP ) );