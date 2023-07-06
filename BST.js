class Node {
   constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
   }
}

class BST {
    constructor() {
        this.root = null;
    }

    insert(val) {
        const newNode = new Node(val)
        if(this.root === null) {
            this.root = newNode
            return this
        }

        let temp = this.root;
        while(true) {
            if(temp.val === val) return undefined
            if(newNode.val  < temp.val ) {
                if(temp.left === null ) {
                    temp.left = newNode
                    return this // ekta value insert complete and return the this means bst
                }
                temp = temp.left
            } else {
                if(temp.right === null) {
                    temp.right = newNode
                    return this
                }
                temp = temp.right
            }
        }
    }

    contains(val) {
        if(this.root === null) return false
        let temp = this.root
        while(temp) {
            if(val < temp.val) {
                temp = temp.left
            } else if (val > temp.val) {
                temp = temp.right
            } else {
                return true
            }
        }
        return false;
    }

    BFS() {
        let currentNode = this.root
        let queue = [currentNode]
        let results= []
        while(queue.length){
            currentNode = queue.shift()
            results.push(currentNode.val)
            if(currentNode.left) {
                queue.push(currentNode.left)
            }
            if(currentNode.right) {
                queue.push(currentNode.right)
            }
        }
        return results;
    }

    DFSPreOrder() {
        let results = []
        function traverse(currentNode){
            results.push(currentNode.val)
            if(currentNode.left) traverse(currentNode.left)
            if(currentNode.right) traverse(currentNode.right)
        }

        traverse(this.root)
        return results;
    }

    DFSPostOrder() {
        let results = []
        function traverse(currentNode){
            if(currentNode.left) traverse(currentNode.left)
            if(currentNode.right) traverse(currentNode.right)
            results.push(currentNode.val)
        }

        traverse(this.root)
        return results;
    }
    DFSInOrder() {
        let results = []
        function traverse(currentNode){
            if(currentNode.left) traverse(currentNode.left)
            results.push(currentNode.val)
            if(currentNode.right) traverse(currentNode.right)
        }

        traverse(this.root)
        return results;
    }
}

const bst = new BST()
bst.insert(10)
bst.insert(11)
bst.insert(12)
bst.insert(13)
bst.insert(14)
bst.insert(9)
bst.insert(8)
bst.insert(7)
console.log(bst.DFSInOrder())

