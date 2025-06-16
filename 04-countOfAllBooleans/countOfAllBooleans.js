function countOfAllBooleans(arr) {
  let count=0;

  for(let i = 0; i<arr.length;i++){
    if(typeof arr[i]==="boolean"){
      count++;
    }
  }

  return count;
}

let myArray=["yea",4,true,false,false,"no"];
countOfAllBooleans(myArray)

// Do not edit this line;
module.exports = countOfAllBooleans;