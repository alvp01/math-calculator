import calculate from '../logic/calculate';

describe('Test the calculate logic', () => {
  const operation = {
    total: null,
    next: null,
    operation: null,
  };

  test('When press AC it returns an empty operation', () => {
    expect(calculate(operation, 'AC')).toEqual({
      total: null,
      next: null,
      operation: null,
    });
  });

  test('When pressed a number it updates next value', () => {
    expect(calculate(operation, '5')).toEqual({
      total: null,
      next: '5',
    });
  });

  test('It concatenates next value with a previous one', () => {
    Object.assign(operation, calculate(operation, '1'));
    expect(calculate(operation, '5')).toEqual({
      next: '15',
      total: null,
    });
  });

  test('It gets an operation when there is a number value', () => {
    Object.assign(operation, calculate(operation, '5'));
    expect(calculate(operation, '+')).toEqual({
      next: null,
      operation: '+',
      total: '15',
    });
  });

  test('It gets a value after an operation being pressed', () => {
    Object.assign(operation, calculate(operation, '+'));
    expect(calculate(operation, '9')).toEqual({
      next: '9',
      total: '15',
      operation: '+',
    });
  });

  test('It sums the values', () => {
    Object.assign(operation, calculate(operation, '9'));
    expect(calculate(operation, '=')).toEqual({
      total: '24',
      next: null,
      operation: null,
    });
  });

  test('It does the substraction operation', () => {
    Object.assign(operation, calculate(operation, 'AC'));
    Object.assign(operation, calculate(operation, '8'));
    Object.assign(operation, calculate(operation, '-'));
    Object.assign(operation, calculate(operation, '5'));
    expect(calculate(operation, '=')).toEqual({
      next: null,
      operation: null,
      total: '3',
    });
  });

  test('It does the multiplication operation', () => {
    Object.assign(operation, calculate(operation, 'AC'));
    Object.assign(operation, calculate(operation, '8'));
    Object.assign(operation, calculate(operation, 'x'));
    Object.assign(operation, calculate(operation, '5'));
    expect(calculate(operation, '=')).toEqual({
      next: null,
      operation: null,
      total: '40',
    });
  });

  test('It does the multiplication operation', () => {
    Object.assign(operation, calculate(operation, 'AC'));
    Object.assign(operation, calculate(operation, '8'));
    Object.assign(operation, calculate(operation, '÷'));
    Object.assign(operation, calculate(operation, '2'));
    expect(calculate(operation, '=')).toEqual({
      next: null,
      operation: null,
      total: '4',
    });
  });
});
