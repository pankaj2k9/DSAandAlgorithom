const anagram = (stringA, stringB) => {
    const normalizeStrA = stringA.replace(/[^\w]/g, '').toLowerCase()
    const normalizeStrB = stringB.replace(/[^\w]/g, '').toLowerCase()
    const frequency1 = {}
    const frequency2 = {}
    for(let elm of normalizeStrA) {
        frequency1[elm] = ( frequency1[elm] || 0) + 1
    }

    for(let elm of normalizeStrB) {
        frequency2[elm] = ( frequency2[elm] || 0) + 1
    }
    if(Object.keys(frequency1).length !== Object.keys(frequency2).length){
        return false;
    }
    for(let key in frequency1) {
       if(frequency1[key] !== frequency2[key] || !key in frequency2) {
        return false
       }
    }

    return true;

}

console.log(anagram('rail safety', 'fairy tales'));