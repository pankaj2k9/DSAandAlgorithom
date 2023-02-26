const searchInsert = (arr, searchElm) => {
    let low = 0;
    let high = arr.length - 1;
    while(low <= high) {
        let mid = Math.floor((low + high) / 2)
        let midVal = arr[mid]
        if(midVal === searchElm) return mid;
        if(searchElm > midVal) {
            low = mid + 1
        } else {
            high = mid - 1;
        }
    }
    return low;
}

console.log(searchInsert([1, 3, 4, 5], 2))