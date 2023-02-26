const palidDromeMultiplePointer = (s) => {
    const normalizeStr = s.replace(/[\W_]/g, '').toLowerCase()
    let left = 0;
    let right = normalizeStr.lenght - 1;
    while(left < right) {
        if(normalizeStr[left] !== normalizeStr[right]){
            return false;
        }
        left++
        right--
    }
    return true;
}

console.log(palidDromeMultiplePointer('A man, a plan, a canal: Panama'))