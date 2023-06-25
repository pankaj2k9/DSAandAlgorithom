const airthMeticMean = (A, S) => {
    let left = 0;
    let right = 0;
    let sumSoFar = A[0];
    let count = 0;

    while (right < A.length) {
        if (sumSoFar / (right - left + 1) === S) {
            count += right - left + 1;
            if (right < A.length) {
                sumSoFar += A[right];
            }
            right++;
        } else if (sumSoFar / (right - left + 1) < S) {
            right++;
            if (right < A.length) {
                sumSoFar += A[right];
            }
        } else {
            sumSoFar -= A[left];
            left++;
            right++;
        }
    }

    return count;
}

console.log(airthMeticMean([0, 4, 3, -1], 2));
console.log(airthMeticMean([2, 1, 3], 3));
console.log(airthMeticMean([2, 1, 3], 2));