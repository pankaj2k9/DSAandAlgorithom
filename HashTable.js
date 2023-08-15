class HT {
    constructor(size = 7) {
        this.dataMap = new Array(size)
    }
    _hash(key) {
        let intialHashVal = 0
        let hash;
        for (let i = 0; i < key.length; i++) {
            hash = (intialHashVal + key.charCodeAt(i) * 23) % this.dataMap.length;
        }
        return hash;
    }
    set(key, value) {
        let index = this._hash(key)
        if(!this.dataMap[index]) {
            this.dataMap[index] = []
        }
        this.dataMap[index].push([key, value])
    }
    get(key) {
        let index = this._hash(key)
        if(this.dataMap[index]) {
            for(let i = 0; i < this.dataMap[index].length; i++) {
                if(this.dataMap[index][i][0] == key) {
                       return this.dataMap[index][i][1]
                }
            }
        }
    }
    keys() {
        const allKeys = []
        for (let i = 0; i < this.dataMap.length; i++) {
            if(this.dataMap[i]) {
                for (let j = 0; j < this.dataMap[i].length; j++) {
                    allKeys.push(this.dataMap[i][j][0])
                }
            }
        }
        return allKeys;
    }

}

const ht = new HT()
ht.set('firstName', 'pankaj')
ht.set('lastName', 'pankaj')
ht.set('email', 'pankaj.me2k9@gmail.com')
console.log(ht.keys())