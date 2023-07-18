const my_stripcasedWord = require('../capitalizedFirstLetter');

const my_str = ''
const my_str1 = 'how are you?'

test('should capitalize the string first letter', () => { 
  expect(my_stripcasedWord(my_str)).toBe('') 
  expect(my_stripcasedWord(my_str1)).toBe('How are you?') 
})