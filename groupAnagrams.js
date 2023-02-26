const groupAnagrams = (strs) => {
    const ht ={}
    for (let elm of strs ){
        const sorted = elm.split('').sort().join('')
        if(ht[sorted]){
            ht[sorted].push(elm)
        } else {
            ht[sorted] = [elm]
        }

    }
    return Object.values(ht);

}

console.log(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']))