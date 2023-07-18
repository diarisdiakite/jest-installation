const capitalizedFirstLetter = (str) => {
  if (str.length === 0) {
    return str; 
  }
  
  let words = str.split(' ');
  words[0] = words[0][0].toUpperCase() + words[0].slice(1);
  
  return words.join(' ');
};

module.exports = capitalizedFirstLetter;


//This one works
/* const capitalizedFirstLetter = (str) => {
  if (str.length === 0) {
    return str;
  }

  let firstLetter = str.charAt(0).toUpperCase();
  let restOfString = str.slice(1);

  return firstLetter + restOfString;
}; 

module.exports = capitalizedFirstLetter;
*/
