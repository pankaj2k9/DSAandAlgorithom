const maxSubarraySum = (arr, num) => {
   if(arr.length < num) {
    return null;
   }
   let max = -Infinity
   for (let i = 0; i < arr.length - num + 1; i++) {
      let tempSum = 0
      for (let j = 0; j < num; j++) {
        tempSum += arr[i + j]
      }
      max = Math.max(tempSum, max)
   }
   return max;
}


console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2))

const maxSubarraySumOptimised = (arr, num) => {
    if(arr.length < num) {
     return null;
    }
    let max = 0
    let tempSum = 0
    for (let i = 0; i < num; i++) {
       max += arr[i]
    }
    tempSum = max
    for(let j = num; j < arr.length - num + 1; j++) {
        tempSum = tempSum - arr[j - num ] + arr[j]
        max= Math.max(tempSum, max)
    }
    return max;
 }

 console.log(maxSubarraySumOptimised([1, 2, 5, 2, 8, 1, 5], 2))