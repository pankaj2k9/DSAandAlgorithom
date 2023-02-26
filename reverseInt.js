const reverseInt = (Int) => {
    let revNum = Int.toString().split('').reverse(). join('')

    if(revNum.endsWith('-')) {
        revNum = '-' + revNum.slice(0, revNum.length - 1)
    }
    return Number(revNum)
}

console.log(reverseInt(500))
console.log(reverseInt(-90))