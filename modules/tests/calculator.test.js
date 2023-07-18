const my_calculator = require('../calculator')();

const variables = {
  a: 4, 
  b: 2, 
  expectedAdd: 6,
  expectedSubstract: 2,
  expectedMultiply: 8,
  expectedDivide: 2
}

describe('my_calculator', () => {
  test('should add a to b', () => { 
    expect(my_calculator.add(variables.a, variables.b)).toEqual(variables.expectedAdd); 
  })
  test('should add a to b, with b >= 0', () => { 
    expect(my_calculator.add(variables.a, variables.b)).toBeGreaterThanOrEqual(variables.a); 
  })
  test('should add a to b', () => {
    for(let a=1, b=1; a<10, b<10; a++, b++){
      expect(my_calculator.add(variables.a, variables.b)).not.toEqual(0); 
      expect(my_calculator.add(variables.a, variables.b)).not.toBe(0); 
    }
  })


  test('should substract b from a', () => { 
    expect(my_calculator.substract(variables.a, variables.b)).toEqual(variables.expectedSubstract);  
  })
  test('should multiply a by b', () => { 
    expect(my_calculator.multiply(variables.a, variables.b)).toEqual(variables.expectedMultiply);  
  })
  test('should divide a by b', () => { 
    expect(my_calculator.divide(variables.a, variables.b)).toEqual(variables.expectedDivide);  
  })
})