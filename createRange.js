const createRange = ( num1, num2 ) => {
    let rangeArr = [];
    const helper = (helperInput, targetNum) => {
       rangeArr.push(helperInput);
       if(helperInput === targetNum) return targetNum;
       helper(helperInput + 1, targetNum)
    };
    helper(num1, num2);
    return rangeArr;
}

console.log(createRange(10, 20));

const createRangeOptimised = ( num1, targetNum, rangeArr = [] ) => {
    rangeArr = rangeArr.concat(num1);
    if( num1 === targetNum ) return rangeArr;
    return createRangeOptimised(num1 + 1, targetNum, rangeArr);
}

console.log(createRangeOptimised(10, 20));