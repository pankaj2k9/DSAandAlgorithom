const isPowerOfTwo = (n) => {
    if( n < 1 ) {
        return false;
    }

    return (n & (n - 1)) === 0;

}

// 10 , 100, 1000, 100000 etc
// 10000
// 10001
// 10000

console.log(isPowerOfTwo(16));
console.log(isPowerOfTwo(20));