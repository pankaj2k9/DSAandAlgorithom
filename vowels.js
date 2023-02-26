const vowels = (str) => {
   let count = 0;
   const collectedVowels = ['a', 'e', 'i', 'o', 'u']
   for (let char of str.toLowerCase()){
     if(collectedVowels.includes(char)) {
        count++
     }
   }
   return count;
}

console.log(vowels('whya?'))

const vowelsOptimized= (str) => {
    let count = 0;
    const collectedVowels = ['a', 'e', 'i', 'o', 'u']
    for (let char of str.toLowerCase()){
    if (char === 'a' || char === 'e' ||char === 'i' ||char === 'o' ||char === 'u') {
         count++
      }
    }
    return count;
 }

 console.log(vowelsOptimized('whya?'))