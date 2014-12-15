//
// Helpers
// APP.Helperss
//
(function( module ) {

    "use strict";


    /***************************************************************************
     *
     * STRINGS
     *
     **************************************************************************/
    /**
     * @desc: Remove all white spaces from a given string
     *
     * input: "abc def ghi"
     * output: abcdefghi
     *
     * @param str {String}: String to remove white spaces
     * @return {String}: The string without white spaces
     */
    module.removeWhiteSpaces = function( str ){
        return str.replace(/ /g,'');
    };

    /**
     * @desc: Check if the given string is a palindrome
     *
     * input: "abccba"
     * output: true
     *
     * @param str {String}: String to check
     * @return {Boolean}
     */
    module.isPalindrome = function( str ){
        str = module.removeWhiteSpaces( str );
        return str === str.split('').reverse().join('');
    };

    /**
     * @desc: Check if two strings are anagrams
     *
     * input: "qawsed", "qweasd"
     * output: true
     *
     * @param str1 {String}: String to check
     * @param str2 {String}: String to check
     * @return {Boolean}
     */
    module.areAnagrams = function( str1, str2 ) {
        str1 = module.removeWhiteSpaces( str1 ).toLowerCase();
        str2 = module.removeWhiteSpaces( str2 ).toLowerCase();
        return str1.split('').sort().join('') === str2.split('').sort().join('');
    };

    /**
     * @desc: Reverse a given string
     *
     * input: "abcdef"
     * output: "fedcba"
     *
     * @param str {String}: String to reverse
     * @return {String}: The string reversed
     */
    module.reverseString = function( str ){
        return str.split("").reverse().join("");
    };



    /***************************************************************************
     *
     * ARRAYS
     *
     **************************************************************************/
    /**
     * @desc: Gets the sum of all elements of a given array.
     *        Assuming that all the array elements are numbers.
     *
     * input: [1,2,3,4]
     * output: 10
     *
     * @param arr {Array}
     * @return {Integer}: The result of the sum
     */
    module.sumArrayElements = function( arr ){

        /**
         * @desc: Sums both indexes
         * return {Integer}
         */
        function add( a, b ){
            return a + b;
        }
        
        if( arr.length === 0 ){
            return 0;
        }
        
        return ( arr.length === 1 ) ?
            arr[ 0 ] : 
            arr.reduce( add );
    };

    /**
     * @desc: Sorts an array where all its elements are integers.
     *
     * input: [5,2,1,9]
     * output: [1,2,5,9]
     *
     * @param arr {Array}
     * @return {Array}: The sorted array
     */
    module.sortArrayNumbers = function( arr ){

        /**
         * @desc: Compare both indexes to sort the array
         *
         *     * If compare(a, b) < 0,   sort 'a' to a lower index than 'b'.
         *     * If compare(a, b) === 0, leave 'a' and 'b' unchanged.
         *     * If compare(a, b) > 0,   sort 'b' to a lower index than 'a'.
         *
         * return {Integer}
         */
        function compare( a, b ){
            return a - b;
        }
        
        if( arr.length === 0 ){
            return [];
        }
    
        return ( arr.length === 1 ) ?
             arr :
             arr.sort( compare );

    };

}.call( this, APP.namespace( "APP.Helpers" ) ) );