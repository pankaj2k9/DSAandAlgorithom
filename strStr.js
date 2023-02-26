const strStr = (haystack, needle) => {
    if(needle === '') return 0;
    for (let i = 0; i < haystack.length; i++) {
       let j = 0;
       for(; j < needle.length; j++) {
          if(haystack[i + j] !== needle[j]) break;
       }
       if(j === needle.length) return i
    }
    return -1;
}

console.log(strStr('hello', 'e'))