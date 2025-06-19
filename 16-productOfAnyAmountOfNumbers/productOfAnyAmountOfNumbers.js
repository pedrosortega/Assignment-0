function productOfAnyAmountOfNumbers(...args) {
  let amount=1;
  for(let i = 0;i<args.length;i++){
    amount*=args[i];
  }
  return amount;
}

// Do not edit this line;
module.exports = productOfAnyAmountOfNumbers;