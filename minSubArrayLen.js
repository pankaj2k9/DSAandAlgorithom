const minSubArrayLen = (target, nums) => {
    let result = Infinity
    let left = 0
    let val_sum = 0
    for ( let i = 0; i < nums.length; i++ ) {
        val_sum += nums[i]
        while(val_sum >= target) {
            result = Math.min(result, i + 1 -left)
            val_sum -= nums[left]
            left++
        }
    }
    return result === Infinity ? 0 : result;
}

console.log(minSubArrayLen(7, [2, 3, 1, 3, 4, 3]))