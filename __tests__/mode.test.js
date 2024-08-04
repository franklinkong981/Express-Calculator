const calculateMode = require('../helpers/mode.js');

describe("calculate mode", function() {
    it("calculates the mode of an array of numbers", function() {
        expect(calculateMode([1,3,5,7,9]).length).toBe(5);
        expect(calculateMode([8,3,5,8,6]).length).toBe(1);
        expect(calculateMode([8,3,5,8,6])[0]).toBe(8);
    });
});