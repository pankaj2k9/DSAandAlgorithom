function countCharacter(str) {
   const hashMap = {};
   const normalizeStr = str.toLowerCase();
   for (let i = 0; i < normalizeStr.length; i++ ) {
     const char = normalizeStr[i];
     if (char === ' ') continue;
     hashMap[char] = (hashMap[char] || 0) + 1;
   }
   return hashMap;
}

console.log(countCharacter("He llo"))