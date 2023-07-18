function str_length(str){
  return (str.length > 1 && str.length < 10) 
  ? str.length 
  : "Error message: the str shoulg be between 1 and 10 character length"
}
module.exports = str_length;