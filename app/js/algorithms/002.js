//
// Solution
// APP.uniqueStringInArray
//
// "Given an array of strings, return the first one which appears only once in the array."
//
(function( module ) {

    "use strict";

    /**
     * @desc: Solution of algorithm 002
     */
    module.uniqueStringInArray = function( arrayOfStrings ){
        var i,
            prop,
            hash = {},
            string = "",
            len = arrayOfStrings.length;

        // Make the hash, with the number of times that the strings appears
        //
        // ["a","b","c","b","a","b"]
        //
        // hash["a"] = 2
        // hash["b"] = 3
        // hash["c"] = 1
        //
        for( i = 0; i < len; i++ ){
            string = arrayOfStrings[ i ];
            hash[ string ] = hash[ string ] + 1 || 1;
        }

        // Iterate through hash looking for the first string which appears only
        // once.
        for( prop in hash ){
            if ( hash[ prop ] === 1 ){
                return prop;
            }
        }

        return "";
    };

}.call( this, APP ) );