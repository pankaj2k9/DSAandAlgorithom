const areThereDuplicates = (arr) => {
  let i = 0;
  while(i < arr.length) {
    if(arr[i] === arr[i+1]) {
        return true
    }
    i++;
  }
  return false;
}

console.log(areThereDuplicates([1, 1, 1, 1, 2]))
console.log(areThereDuplicates([1, 2, 3, 4, 5]))