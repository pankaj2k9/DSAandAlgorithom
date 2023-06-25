class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class LinkedList {
    constructor(value) {
         const newNode = new Node(value)
         this.head = newNode
         this.tail = newNode
         this.length = 1
    }
    push(value) {
        const newNode = new Node(value)
        if(!this.head) {
            this.head = newNode
            this.tail = newNode
        } else {
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length++
    }
     unshift(value) {
        const newNode = new Node(value)
        if(!this.head) {
            this.head = newNode
            this.tail = newNode
        } else {
            newNode.next = this.head
            this.head = newNode
        }
        this.length++
     }
     shift() {
        if(!this.head) {
            return null;
        } else {
            const temp = this.head
            this.head = this.head.next
            temp.next = null
            if(this.length === 0) {
                this.tail = null
            }
        }
        this.length--
        return temp
     }
     pop() {
        if(!this.head) return null;
        const temp = this.head;
        const pre = this.head;
        while( temp.next ) {
            pre = temp
            temp = temp.next
        }
        this.tail = pre
        this.tail.next = null
        this.length--
        if(this.length === 0) {
            this.tail = null
            this.head = null
        }
        return temp;
     }
     get(index) {
        if(index < 0 || index >= this.length ) return null;
        let temp = this.head;
        for (let i = 0; i < index; i++) {
            temp = temp.next
        }
        return temp;
     }
     set( index, value) {
        let temp = this.get(index)
        if(temp) {
            temp.value = value
            return true
        }
        return false
     }
     insert (index, value) {
        if(index < 0 || index > this.length) return false
        if(index === 0) return this.unshift(value)
        if(index === this.length) return this.push(value)

        const newNode = new Node(value)
        const temp = this.get(index - 1)
        newNode.next = temp.next
        temp.next = newNode
        this.length++
        return true
     }

     remove(index) {
        if(index < 0 || index >= this.length) return false
        if(index === 0) return this.shift()
        if(index === this.length) return this.pop()
        const prevRef = this.get(index - 1)
        let temp = prevRef.next
        prevRef.next = temp.next
        temp.next = null
        this.length--
     }

     reverse() {
         let temp = this.head
         this.head = this.tail
         this.tail = temp
         let next = temp.next
         let prev = null
         for(let i = 0 ; i < this.length; i++) {
            next = temp.next
            temp.next = prev
            prev = temp
            temp = next
         }
     }
}

const linkedList = new LinkedList(10)
linkedList.push(11)
linkedList.push(14)
linkedList.push(15)
linkedList.push()
linkedList.insert(1, 12)
linkedList.insert(2, 13)
linkedList.reverse()
console.log(linkedList)
