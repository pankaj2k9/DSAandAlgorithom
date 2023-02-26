const lengthOfLongestSubString = (s) => {
   let i = 0;
   let j = 0;
   let max = 0;
   const uniqueSet = new Set()
   while( i < s.length) {
       if(!uniqueSet.has(s[i])){
          uniqueSet.add(s[i])
          max = Math.max(max, uniqueSet.size)
          i++
       } else {
          uniqueSet.delete(s[j])
          j++
       }
   }
   return max;
}

console.log(lengthOfLongestSubString('abcabcbb'));