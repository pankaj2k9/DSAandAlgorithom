function isElementExists( arr1, arr2 ) {
  let exists = false;
  for (let elm of arr1) {
    if(arr2.includes(elm)) {
        exists = true;
        break
    }
  }
  return exists;
}

console.log(isElementExists(["a", "b", "c"], [1, 2, 3 , "z"]))