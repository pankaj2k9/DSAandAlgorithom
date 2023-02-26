
const fizzBuzz = (num) => {
    let result = '';
    for(let i = 0; i <= num; i++ ) {
      if(i % 3 === 0 && i % 5 === 0) {
        result += 'fizzBuzz \n'
      } else if (i % 3 === 0) {
        result += 'fizz \n'
      } else if (i % 5 === 0) {
        result += 'buzz \n'
      } else {
        result += i + '\n'
      }
    }
    return result;
}

console.log(fizzBuzz(100))