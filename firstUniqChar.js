const firstUniqChar = (str) => {
    const hashTable = {}
    for (let elm of str) {
        hashTable[elm] = (hashTable[elm] || 0) + 1
    }
    for(let i = 0; i < str.length ; i ++) {
        if(hashTable[str[i]] === 1) {
            return i;
        }
    }

    return -1;

}

console.log(firstUniqChar('leetcode'))