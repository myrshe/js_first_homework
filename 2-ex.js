function searchingAmount(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return arr = [nums[i],nums[j]];
            }
        }
    }
    return [];
}

console.log(searchingAmount([2,7,11,15], 9));
console.log(searchingAmount([3,2,4], 6));
console.log(searchingAmount([3,3], 6));