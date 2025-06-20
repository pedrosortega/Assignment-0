function pairSum(nums, target) {

  if(nums.length<=1){
    throw new Error("Invalid input provided.");
  }

  for(let i = 0; i <nums.length-1;i++){
    for(let j = i;j<nums.length;j++){
      if(nums[i]+nums[j]===target){
        return true;
      }
    }
  }
   return false;
  
}

// Do not edit this line;
module.exports = pairSum;