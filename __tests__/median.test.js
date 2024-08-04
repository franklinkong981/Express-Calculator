const calculateMedian = require('../helpers/median.js');

describe("calculate median", function() {
    it("calculates the median of an array of numbers", function() {
        expect(calculateMedian([1,3,5,7,9])).toBe(5);
        expect(calculateMedian([86, 25, 75, 1, 16, 29])).toBe(27);
    });
});