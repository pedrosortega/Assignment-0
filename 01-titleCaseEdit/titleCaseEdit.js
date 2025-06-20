function titleCaseEdit(title) {
  let sentence=title.split(" ");
  let newArr=[]

  for(let letter of sentence){
    let result = letter[0].toUpperCase()+letter.slice(1).toLowerCase();
        newArr.push(result);
  }
  return newArr.join(" ");
}

// Do not edit this line;
module.exports = titleCaseEdit;