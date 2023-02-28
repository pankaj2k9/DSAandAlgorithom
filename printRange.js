const printRange = (num, num2) => {
   console.log(num2);
   if(num === num2) return;
   printRange(num, num2 - 1)

}

printRange(1, 10);