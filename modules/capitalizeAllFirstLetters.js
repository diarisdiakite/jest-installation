const capitalizeAllFirstLetters = (str) => {
  //declare variables
  let newStr = [] //has to be an array to be joined afterwards
  let splittedStr = str.split(" ");

  if(str.length === 0){
    return str;
  }


  for(let word in splittedStr){
    //let remaining = splittedStr[word].slice(1)
    //console.log(remaining)
    //console.log(word, splittedStr[word]);
    newStr[word] = splittedStr[word][0].toUpperCase() + splittedStr[word].slice(1).toLowerCase();
  }

  return newStr.join(" ");  
}
module.exports = capitalizeAllFirstLetters;