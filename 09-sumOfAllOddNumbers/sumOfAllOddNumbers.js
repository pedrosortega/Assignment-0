function sumOfAllOddNumbers(nums) {
  let count = 0;

  for(let i = 0; i < nums.length;i++){
    if(nums[i]%2!==0){
      count++;
    }
  }
  return count;
}

let arr=[1,2,3,4,5];
sumOfAllOddNumbers(arr);

// Do not edit this line;
module.exports = sumOfAllOddNumbers;