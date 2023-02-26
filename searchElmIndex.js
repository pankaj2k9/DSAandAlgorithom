const searchElmIndex = (arr, searchFile) => {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === searchFile) return i;
    }
    return -1;
}

console.log(searchElmIndex([1, 3, 5, 7, 9], 7))

const searchElmIndexBinary = (arr, searchElm) => {
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
    return -1;

}

console.log(searchElmIndexBinary([1, 3, 5, 7, 9], 3))