const isSame = (arr1, arr2) => {
  if(arr1.length !== arr2.length) return false;
  for(let i = 0; i < arr1.length; i++) {
    let index = arr2.indexOf(arr1[i])
    if (index === -1 ) {
      return false;
    } else {
      arr2.slice(index, 1)
    }
  }
  return true;
}

console.log(isSame([1, 2, 4, 5], [1, 4, 6, 2]))

const isSameOptimized = (arr1, arr2) => {
    if(arr1.length !== arr2.length) return false;
    const hashTable1  = {}
    const hashTable2  = {}
    for (let num of arr1) {
        hashTable1[num] = (hashTable1[num] || 0) + 1
    }
    for (let num of arr2) {
        hashTable2[num] = (hashTable2[num] || 0) + 1
    }
    for (let elm in hashTable1){
        if( !elm in hashTable2 || hashTable1[elm] !== hashTable2[elm]) {
           return false
        }
    }
    return true;
  }

  console.log(isSameOptimized([1, 2, 4, 5], [1, 4, 5, 2]))