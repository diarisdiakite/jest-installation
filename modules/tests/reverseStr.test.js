const my_reversed_str = require('../reverseStr')

const str = 'Hello!'
test('should return a reversed string', () => { 
  expect(my_reversed_str(str)).toBe('!olleH') 
})