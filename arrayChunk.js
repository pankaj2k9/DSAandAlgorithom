const chunk = (arr, size) => {
   const chunked = []
   for (let elm of arr) {
     const last = chunked[chunked.length - 1]
     if(last && last.length < size) {
        last.push(elm)
     } else {
        chunked.push([elm])
     }
   }
   return chunked;
}

console.log(chunk([1, 2, 3, 4, 5], 2))

const chunkOptimized = (arr, size) => {
    let index = 0;
    const chunked = []
    while(index < arr.length) {
        const slicedArray = arr.slice(index, index + size)
        chunked.push(slicedArray)
        index += size
    }
    return chunked;
 }

 console.log(chunkOptimized([1, 2, 3, 4, 5], 2))