const sum = (arr) => {
    // flag varaible
    let total = 0;

    for (let num of arr) {
        total+= num;
    }

    return total;

}

console.log(sum([10, 15, 30, 5]))