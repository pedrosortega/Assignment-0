class MySolution {
  constructor() {
    this.flag = false; // this is optional to use;
  }

  binarySearch(nums, target) {
    let low = 0;
    let high = nums.length - 1;

    let mid = Math.floor((low + high) / 2);
    if (nums[mid] === target) {
      return true;
    } else if (nums[mid] < target) {
      return this.binarySearch(nums.slice(mid + 1), target);
    } else if (nums[mid] > target) {
      return this.binarySearch(nums.slice(0, mid), target);
    }
    return false;
  }
}

// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;
