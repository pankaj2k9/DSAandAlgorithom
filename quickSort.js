
const swap = (arr, idx1, idx2) => {
   [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
}

const pivot = (arr, pivotIndex = 0, endIndex = arr.length - 1) => {
    let swapIndex = pivotIndex;
    for (let i = pivotIndex + 1; i <= endIndex; i++){
       if(arr[i] < arr[pivotIndex]) {
        swapIndex++
        swap(arr, swapIndex, i)
       }
    }
    swap(arr, pivotIndex, swapIndex )

    return swapIndex;

}

const quickSort = (arr, left = 0, right = arr.length - 1) => {
    if(left < right) {
        let pivotIndex = pivot(arr, left, right)
        quickSort(arr, left, pivotIndex - 1);
        quickSort(arr, pivotIndex + 1, right);
    }
    return arr;

}

console.log(quickSort([5, 9, 7, 4, 2 , 3]))

