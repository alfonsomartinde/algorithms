//
// Helpers
// APP.Helperss
//
(function( module ) {

    "use strict";

    /**
     * @desc: Remove all white spaces from a given string
     * @param str {String}: String to remove white spaces
     * @return {String}: The String without white spaces
     */
    module.removeWhiteSpaces = function( str ){
        return str.replace(/ /g,'');
    };

    /**
     * @desc: Check if the given string is a palindrome
     * @param str {String}: String to check
     * @return {Boolean}
     */
    module.isPalindrome = function( str ){
        str = module.removeWhiteSpaces( str );
        return str === str.split('').reverse().join('');
    };

    /**
     * @desc: Check if two strings are anagrams
     * @param str1 {String}: String to check
     * @param str2 {String}: String to check
     * @return {Boolean}
     */
    module.areAnagrams = function( str1, str2 ) {
        str1 = module.removeWhiteSpaces( str1 ).toLowerCase();
        str2 = module.removeWhiteSpaces( str2 ).toLowerCase();
        return str1.split('').sort().join('') === str2.split('').sort().join('');
    };

}.call( this, APP.namespace( "APP.Helpers" ) ) );