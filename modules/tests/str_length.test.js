const str_length = require('../str_length');

const str = "Hello!";
const str1 = "Hello there! how are U";
test('should count my string length', () => { 
  expect(str_length(str)).toBeGreaterThanOrEqual(1);
  expect(str_length(str)).toBeLessThanOrEqual(10);
  expect(str_length(str1)).toBe('Error message: the str shoulg be between 1 and 10 character length')
})