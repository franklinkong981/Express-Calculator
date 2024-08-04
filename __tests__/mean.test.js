const calculateMean = require('../helpers/mean.js');

describe("calculate mean", function() {
    it("calculates the mean of an array of numbers", function() {
        expect(calculateMean([1,3,5,7,9])).toBe(5);
        expect(calculateMean([8,3,5,8,6])).toBe(6);
    });
});