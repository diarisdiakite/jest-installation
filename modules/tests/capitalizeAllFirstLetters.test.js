const my_capitalized_first_letters = require('../capitalizeAllFirstLetters');


const my_str = ''
const my_str1 = 'Hello, how are you?'

test('should first', () => { 
  expect(my_capitalized_first_letters(my_str)).toBe('');
  expect(my_capitalized_first_letters(my_str1)).toBe('Hello, How Are You?');
})