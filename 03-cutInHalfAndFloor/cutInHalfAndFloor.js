function cutInHalfAndFloor(num) {
  if(num%2===0){
    return num/2;
  }
  else{
    return Math.floor(num/2);
  }
}

cutInHalfAndFloor(16);
cutInHalfAndFloor(5);

// Do not edit this line;
module.exports = cutInHalfAndFloor;