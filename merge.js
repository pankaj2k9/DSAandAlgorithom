const merge = (arr1, arr2) => {
    const results = [];
    let i = 0;
    let j = 0;
    while(i < arr1.length && j < arr2.length) {
      if(arr1[i] < arr2[j]){
        results.push(arr1[i])
        i++
      } else {
        results.push(arr2[j])
        j++
      }
    }

    while( i < arr1.length) {
        results.push(arr1[i])
        i++
    }
    while( j < arr2.length) {
        results.push(arr2[j])
        j++
    }


    return results;
}

const mergeSort = (arr) => {
    let mid = Math.floor(arr.length / 2)
    if(arr.length <= 1) return arr;
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));
    return merge (left, right);

}

console.log(mergeSort([1, 3, 5, 2, 4, 6, 9]))

