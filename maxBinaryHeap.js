class MaxBinaryHeap {
    constructor() {
        this.values = []
    }

    insertElm(elm) {
        this.values.push(elm)
        this.bubbleUp()
    }

    bubbleUp() {
        let idx = this.values.length - 1
        const element = this.values[idx]
        while(idx > 0) {
            let parentIdx = Math.floor((idx - 1) / 2)
            let parent = this.values[parentIdx]
            if(parent >= element) break;
            this.values[parentIdx] = element
            this.values[idx] = parent
            idx = parentIdx
        }
    }

    extractMax() {
        const max = this.values[0]
        const end = this.values.pop()
        this.values[0] = end;
        this.sinkDown()
        return max;
    }

    sinkDown(){
       let idx = 0
       let length = this.values.length
       const element = this.values[idx]
       while(true){
        let leftchildIndex = (2 * idx) + 1
        let rightchildIndex = (2 * idx) + 2
        let leftChild;
        let rightChild;
        let swap = null;
        if(leftChild < length) {
            leftChild = this.values[leftchildIndex]
            if(leftChild > element) {
                swap = leftchildIndex
            }
        }
        if (rightchildIndex < length) {
            rightChild = this.values[rightchildIndex]
            if((swap === null && rightChild > element) || (swap !== null && rightChild > leftChild)) {
                swap = rightchildIndex
            }
        }
        if( swap === null ) break;
        this.values[idx] = this.values[swap]
        this.values[swap] = element
        idx = swap
       }
    }
}

const maxBinaryHeap = new MaxBinaryHeap()
maxBinaryHeap.insertElm(20)
maxBinaryHeap.insertElm(10)
maxBinaryHeap.insertElm(30)
maxBinaryHeap.insertElm(11)
maxBinaryHeap.insertElm(19)

console.log(maxBinaryHeap.extractMax())
console.log(maxBinaryHeap)