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
        expect( APP.Helpers.removeWhiteSpaces("a b c") ).toBe( "abc" );
        expect( APP.Helpers.removeWhiteSpaces("abc") ).toBe( "abc" );
        expect( APP.Helpers.removeWhiteSpaces(" this is an   example") ).toBe( "thisisanexample" );
        expect( APP.Helpers.removeWhiteSpaces("this   is an example  ") ).toBe( "thisisanexample" );
        expect( APP.Helpers.removeWhiteSpaces("  this is an example ") ).toBe( "thisisanexample" );
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
        expect( APP.reverseInPlace( "abc" ) ).toBe( "cba" );
        expect( APP.reverseInPlace( "abc def ghi jkl" ) ).toBe( "cba fed ihg lkj" );
        expect( APP.reverseInPlace( "I am the good boy" ) ).toBe( "I ma eht doog yob" );
    });
    it("reverseInPlace2", function(){
        expect( APP.reverseInPlace2( "abc" ) ).toBe( "cba" );
        expect( APP.reverseInPlace2( "abc def ghi jkl" ) ).toBe( "cba fed ihg lkj" );
        expect( APP.reverseInPlace2( "I am the good boy" ) ).toBe( "I ma eht doog yob" );
    });
});