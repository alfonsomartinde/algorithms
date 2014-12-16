jasmine.getFixtures().fixturesPath = 'dev/html';
jasmine.getStyleFixtures().fixturesPath = 'dev/css';


describe("Environment", function() {

    it("jQuery and namespace ( $ ) loaded", function() {
        expect( $ ).toBeDefined();
        expect( jQuery ).toBeDefined();
        expect( $ === jQuery ).toEqual(true);
    });
    it("Underscore and namespace ( _ ) loaded", function() {
        expect( _ ).toBeDefined();
    });

});

describe("Helpers", function(){

    it("removeWhiteSpaces", function(){
        expect( APP.Helpers.removeWhiteSpaces("a b c") ).toEqual( "abc" );
        expect( APP.Helpers.removeWhiteSpaces("abc") ).toEqual( "abc" );
        expect( APP.Helpers.removeWhiteSpaces(" this is an   example") ).toEqual( "thisisanexample" );
        expect( APP.Helpers.removeWhiteSpaces("this   is an example  ") ).toEqual( "thisisanexample" );
        expect( APP.Helpers.removeWhiteSpaces("  this is an example ") ).toEqual( "thisisanexample" );
    });

    it("isPalindrome", function(){
        expect( APP.Helpers.isPalindrome("abcba") ).toBe( true );
        expect( APP.Helpers.isPalindrome("abba") ).toBe( true );
        expect( APP.Helpers.isPalindrome("dabale arroz a la zorra el abad") ).toBe( true );
        expect( APP.Helpers.isPalindrome("asssaajdu") ).toBe( false );
        expect( APP.Helpers.isPalindrome("abbabba") ).toBe( true );
        expect( APP.Helpers.isPalindrome("d") ).toBe( true );
    });

    it("areAnagrams", function(){
        expect( APP.Helpers.areAnagrams("qwerty", "qwerty") ).toBe( true );
        expect( APP.Helpers.areAnagrams("qw", " wq") ).toBe( true );
        expect( APP.Helpers.areAnagrams("a", "a") ).toBe( true );
        expect( APP.Helpers.areAnagrams(" qawsedrftgyh", "eqwrtyfdsahg ") ).toBe( true );
        expect( APP.Helpers.areAnagrams(" qwawq", "qw aeq ") ).toBe( false );
        expect( APP.Helpers.areAnagrams("qmakzo ", "  qmaaz ok ") ).toBe( false );

    });

    it("sumArrayElements", function(){
        expect( APP.Helpers.sumArrayElements( [1,2,3,4] ) ).toEqual( 10 );
        expect( APP.Helpers.sumArrayElements( [] ) ).toEqual( 0 );
        expect( APP.Helpers.sumArrayElements( [-1,3,10,-3] ) ).toEqual( 9 );
    });

    it("findUniques", function(){
        expect( APP.Helpers.findUniques( [5,2,9,4] ) ).toEqual( [5,2,9,4] );
        expect( APP.Helpers.findUniques( [5,2,1,9,5,2,3,"5","a","b","b"] ) ).toEqual( [1,9,3,"5","a"] );
        expect( APP.Helpers.findUniques( [] ) ).toEqual( [] );
        expect( APP.Helpers.findUniques( [false] )).toEqual( [false] );
    });

    it("sortArrayNumbers", function(){
        expect( APP.Helpers.sortArrayNumbers( [5,2,9,4] ) ).toEqual( [2,4,5,9] );
        expect( APP.Helpers.sortArrayNumbers( [10,20,45,-87,34,487,-25,0,9,1] ) ).toEqual( [-87,-25,0,1,9,10,20,34,45,487] );
        expect( APP.Helpers.sortArrayNumbers( [] ) ).toEqual( [] );
        expect( APP.Helpers.sortArrayNumbers( [-1]  )).toEqual( [-1] );
    });

    it("isPrime", function(){
        expect( APP.Helpers.isPrime( 0 ) ).toBe( true );
        expect( APP.Helpers.isPrime( 1 ) ).toBe( true );
        expect( APP.Helpers.isPrime( 2 ) ).toBe( true );
        expect( APP.Helpers.isPrime( 3 ) ).toBe( true );
        expect( APP.Helpers.isPrime( 4 ) ).toBe( false );
        expect( APP.Helpers.isPrime( 5 ) ).toBe( true );
        expect( APP.Helpers.isPrime( 6 ) ).toBe( false );
        expect( APP.Helpers.isPrime( 7 ) ).toBe( true );
        expect( APP.Helpers.isPrime( 8 ) ).toBe( false );
        expect( APP.Helpers.isPrime( 9 ) ).toBe( false );
        expect( APP.Helpers.isPrime( 10 ) ).toBe( false );
        expect( APP.Helpers.isPrime( 11 ) ).toBe( true );
        expect( APP.Helpers.isPrime( 12 ) ).toBe( false );
        expect( APP.Helpers.isPrime( 13 ) ).toBe( true );
        expect( APP.Helpers.isPrime( 137 ) ).toBe( true );
        expect( APP.Helpers.isPrime( 237 ) ).toBe( false );
    });

});

describe("Algorithm 001: a string as an anagram which is also a palindrome", function(){
    it("hasAnAnagramWithAPalindrome", function(){
        expect( APP.hasAnAnagramWithAPalindrome(" 1q2w3e4 r5t6 y123 qwe4 r5ty6" ) ).toBe( true );
        expect( APP.hasAnAnagramWithAPalindrome(" 1q2w3e4r5t6y 123qwe4r5ty6a " ) ).toBe( true );
        expect( APP.hasAnAnagramWithAPalindrome(" 1q2w3 e4r5t6y1 23qwe 4r5ty6ab " ) ).toBe( false );
        expect( APP.hasAnAnagramWithAPalindrome("dabale arroz a la zorra el abad" ) ).toBe( true );
    });
});

describe("Algorithm 002: unique string in array", function(){
    it("hasAnAnagramWithAPalindrome", function(){
        expect( APP.uniqueStringInArray( ["a","2","vv","ca","d","a","b","e","e","a"] ) ).toBe( "2" );
        expect( APP.uniqueStringInArray( ["1","2","vv","ca","d","a","b","e","e","a"] ) ).toBe( "1" );
        expect( APP.uniqueStringInArray( ["ca","d","vv","ca","d","a","b","e","e","a"] ) ).toBe( "vv" );
        expect( APP.uniqueStringInArray( ["a","a","a","a","b","b","b","e","e","a"] ) ).toBe( "" );
    });
});

describe("Algorithm 003: reverse words in place", function(){
    it("reverseInPlace", function(){
        expect( APP.reverseInPlace( "abc" ) ).toEqual( "cba" );
        expect( APP.reverseInPlace( "abc def ghi jkl" ) ).toEqual( "cba fed ihg lkj" );
        expect( APP.reverseInPlace( "I am the good boy" ) ).toEqual( "I ma eht doog yob" );
    });
    it("reverseInPlace2", function(){
        expect( APP.reverseInPlace2( "abc" ) ).toEqual( "cba" );
        expect( APP.reverseInPlace2( "abc def ghi jkl" ) ).toEqual( "cba fed ihg lkj" );
        expect( APP.reverseInPlace2( "I am the good boy" ) ).toEqual( "I ma eht doog yob" );
    });
});

describe("Algorithm 004: first equilibrium index", function(){
    it("firstEquilibriumIndex", function(){
        expect( APP.firstEquilibriumIndex( [9,12,3,4,6,1,3,7] ) ).toEqual( 2 );
        expect( APP.firstEquilibriumIndex( [1,2,3,4,5] ) ).toEqual( -1 );       // No eq. index
        expect( APP.firstEquilibriumIndex( [1,2,3,-3,-2] ) ).toEqual( 0 );      // The first index
        expect( APP.firstEquilibriumIndex( [1,2,3,-3,-2,-1] ) ).not.toEqual( 0 );
        expect( APP.firstEquilibriumIndex( [1,2,3,4,3,2,1] ) ).toEqual( 3 );
        expect( APP.firstEquilibriumIndex( [9,12,3,4,6,1,3,7] ) ).toEqual( 2 );
        expect( APP.firstEquilibriumIndex( [1,2,3,-3,-2,-1,9] ) ).toEqual( 2 );
        expect( APP.firstEquilibriumIndex( [1,2,3,4,5,-15,35] ) ).toEqual( 6 ); // The last index
    });
    it("firstEquilibriumIndex2", function(){
        expect( APP.firstEquilibriumIndex2( [9,12,3,4,6,1,3,7] ) ).toEqual( 2 );
        expect( APP.firstEquilibriumIndex2( [1,2,3,4,5] ) ).toEqual( -1 );       // No eq. index
        expect( APP.firstEquilibriumIndex2( [1,2,3,-3,-2] ) ).toEqual( 0 );      // The first index
        expect( APP.firstEquilibriumIndex2( [1,2,3,-3,-2,-1] ) ).not.toEqual( 0 );
        expect( APP.firstEquilibriumIndex2( [1,2,3,4,3,2,1] ) ).toEqual( 3 );
        expect( APP.firstEquilibriumIndex2( [9,12,3,4,6,1,3,7] ) ).toEqual( 2 );
        expect( APP.firstEquilibriumIndex2( [1,2,3,-3,-2,-1,9] ) ).toEqual( 2 );
        expect( APP.firstEquilibriumIndex2( [1,2,3,4,5,-15,35] ) ).toEqual( 6 ); // The last index
    });
});