import operate from '../logic/operate'

describe('Test the operate logic file', ()=>{
  test('It cannot devide by zero', ()=>{
    expect(operate(5, 0, '÷')).toBe("Can't divide by 0.");
  });

  test('It divides integers', ()=>{
    expect(operate(15, 5, '÷')).toBe('3');
  });

  test('It sums two numbers', ()=>{
    expect(operate(15, 5, '+')).toBe('20');
  });
});