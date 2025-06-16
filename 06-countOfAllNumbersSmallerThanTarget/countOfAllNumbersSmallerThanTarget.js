function countOfAllNumbersSmallerThanTarget(nums, target) {
  let count=0;

  for(let i=0;i<nums.length;i++){
    if(nums[i]<target){
      count++;
    }
  }
  return count;
}
let myArray=[2,4,1,6,5];
countOfAllNumbersSmallerThanTarget(myArray, 0);

// Do not edit this line;
module.exports = countOfAllNumbersSmallerThanTarget;