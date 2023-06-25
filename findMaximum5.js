function solution(N) {
    let max = -Infinity;
    let strOfN = N.toString()

    for (let i = 0; i < strOfN.length ; i++) {
        if(strOfN[i] === "5") {
            const temp = strOfN.slice(0, i) + strOfN.slice(i+ 1)
            let num = parseInt(temp);

            if( N > 0) {
                 if ( num > max) {
                     max = num;
                 }
            } else {
                if ( num > N) {
                     max = num;
                }
            }
        }
    }

    return max === -0 ? 0 : max;
}
console.log(solution(15958))