function calculateMedian(nums) {
    sortedNums = nums.sort(function (a, b) {  return a - b;  });
    if (sortedNums.length % 2 != 0) {
        //length of nums is odd
        return sortedNums[Math.floor(nums.length / 2)];
    }
    else {
        //length of nums is even
        let secondIndex = sortedNums.length / 2;
        let firstIndex = secondIndex - 1;
        return (sortedNums[firstIndex] + sortedNums[secondIndex]) / 2;
    }
}

module.exports = calculateMedian;