function calculateMode(nums){
    let frequencies = {};
    let maxFrequency = 0;
    let modes = [];

    for (let num of nums) {
        if (num in frequencies) {
            frequencies[num]++;
        }
        else {
            frequencies[num] = 1;
        }

        if (frequencies[num] == maxFrequency) {
            modes.push(num);
        }
        else if (frequencies[num] > maxFrequency) {
            maxFrequency = frequencies[num];
            modes = [];
            modes.push(num);
        }
    }

    return modes;
}

module.exports = calculateMode;