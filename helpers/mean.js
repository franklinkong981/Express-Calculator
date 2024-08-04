function calculateMean(nums) {
    let sum = nums.reduce((currentSum, currentValue) => {
        return currentSum + currentValue;
    }, 0);
    return sum / nums.length;
}

module.exports = calculateMean;