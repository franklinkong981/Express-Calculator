function calculateMedian(nums) {
    nums.sort();
    if (nums.length % 2 != 0) {
        //length of nums is odd
        return nums[Math.floor(nums.length / 2)];
    }
    else {
        //length of nums is even
        let secondIndex = nums.length / 2;
        let firstIndex = secondIndex - 1;
        return (nums[firstIndex] + nums[secondIndex]) / 2;
    }
}

module.exports = calculateMedian;