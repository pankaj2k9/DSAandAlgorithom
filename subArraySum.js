const subArraySum = (nums, k) => {
    const hashMap = {
       0: 1
    }
    let sum = 0;
    let result = 0;
    for (let i = 0; i < nums.length; i++) {
       sum += nums[i]
       if([sum - k] in hashMap) {
         result += hashMap[sum-k]
       }
       hashMap[sum] = (hashMap[sum] || 0) + 1
    }
    return result;
}

// console.log(subArraySum([1, 1, 1], 2))
console.log(subArraySum([1, 2, 3], 3))