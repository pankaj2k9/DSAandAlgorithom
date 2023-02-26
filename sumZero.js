const sumZero = (arr) => {
  let left = 0;
  let right = arr.length -1;
  while(left < right) {
    if(arr[left] + arr[right] === 0) {
       return [arr[left], arr[right]]
    }
    if(arr[left]+ arr[right] > 0) {
       right--
    }
    if(arr[left]+ arr[right] < 0) {
        left++
     }
  } return undefined;
}

console.log(sumZero([-3, -2, -1, 0, 6, 5, 4]));