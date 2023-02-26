const reverseString = (str) => {
    let revStr = '';
    for (let i = str.length - 1; i >= 0; i--){
        revStr+= str[i]
    }

    return revStr;
}

console.log(reverseString('hello'))

const reverseStringSecondMethod = (str) => {
    let revStr = '';
    for (let char of str ) {
        revStr = char + revStr;
    }
    return revStr;
}

console.log(reverseStringSecondMethod('hello'))

const reverseStringThirdMethod = (str) => str.split('').reverse().join('')

console.log(reverseStringThirdMethod('hello'))

