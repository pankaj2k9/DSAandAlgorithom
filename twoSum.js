const twoSum = (nums, target) => {

    for (let i = 0; i < nums.length ; i++) {
        for (let j = i + 1 ; j < nums.length ; j++){
            if(nums[i] + nums[j] === target) {
                return [i, j]
            }
        }
    }

}

console.log(twoSum([3, 2, 4], 6));

const twoSumOptimsied = (nums, target) => {
    const hashTable = {}

    for(let i = 0; i < nums.length ; i++) {
       const want = target - nums[i];
       if(want in hashTable) {
          return [hashTable[want], i]
       }
       hashTable[nums[i]] = i;
    }

}

console.log(twoSumOptimsied([3, 2, 4], 7));