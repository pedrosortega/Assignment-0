function setUnionOfAnyAmountOfSets(...args) {
  const mergedSet=new Set();

  // work through each set
  for(const generalSets of args){
    // access element of each set
    for(element of generalSets){
      mergedSet.add(element);
    }
  }
  return mergedSet;
}

// Do not edit this line;
module.exports = setUnionOfAnyAmountOfSets;