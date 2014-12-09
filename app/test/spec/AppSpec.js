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