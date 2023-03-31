const bubbleSort = (arr) => {
    for (let i = 0; i < arr.length ; i++){
        let swap = false;
        for (let j = 0; j < arr.length - i - 1; j++){
            if(arr[j] > arr[j+ 1]) {
                let temp = arr[j]
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                let swap = true;
            }
        }
        if (!swap) {
          break;
        }
    }
    return arr;
}

console.log(bubbleSort([1, 10, 2, 20, 6, 30, 9]))