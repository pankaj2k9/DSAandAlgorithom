// function isElementExists( arr1, arr2 ) {
//   let exists = false;
//   for (let elm of arr1) {
//     if(arr2.includes(elm)) {
//         exists = true;
//         break
//     }
//   }
//   return exists;
// }

// console.log(isElementExists(["a", "b", "c"], [1, 2, 3 , "z"]))

function isElementExistsOptimized( arr1, arr2 ) {
    const frequencyCounter = {}
    for (let elm of arr1) {
        frequencyCounter[elm] = true;
    }
    for (let elm of arr2) {
        if(elm in frequencyCounter) {
            return true;
        } else {
            return false;
        }
    }
  }

  console.log(isElementExistsOptimized(["a", "b", "c"], [1, 2, 3 , "z"]))