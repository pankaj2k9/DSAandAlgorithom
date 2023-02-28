const countToZero = (num) => {
    console.log(num);
    //base case
    if ( num === 0 ) return;
    // argument must be chnaged in some context
    countToZero(num - 1);
}

countToZero(10);
