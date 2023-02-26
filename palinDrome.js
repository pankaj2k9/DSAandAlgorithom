const palinDrome = (str) => {
   const re = /[\W_]/g
   const normalizeStr = str.toLowerCase().replace(re, '');
   const reverseStr = normalizeStr.split('').reverse().join('')
   return normalizeStr === reverseStr;

}

console.log(palinDrome('race car'));