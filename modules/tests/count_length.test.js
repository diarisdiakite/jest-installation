const my_str_length = require ('../count_length')

let str = "Maman";

test('Count string length', () => {
  expect(my_str_length(str)).toEqual(5)
})
