const min = (arr) => {
  let min_num = arr[0];
  for(let num of arr) {
    if(num < min_num) {
        min_num = num;
    }
  }
  console.log(min_num)
}

const max = (arr) => {
  let max_num = arr[0];
  for(let num of arr) {
    if(num > max_num) {
        max_num = num;
    }
  }
  console.log(max_num)
}

min([3, 1, 10, 12, 6, 0, 20])
max([3, 1, 10, 12, 6, 0, 20])