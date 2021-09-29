import operate from '../logic/operate';

describe('Operations', () => {
  it('Sum', () => {
    const result = operate(1, 2, '+');
    expect(result).toBe('3');
  });
  it('Subtract', () => {
    const result = operate(1, 2, '-');
    expect(result).toBe('-1');
  });
  it('Divide', () => {
    const result = operate(1, 2, '÷');
    expect(result).toBe('0.5');
  });
  it('Multiply', () => {
    const result = operate(1, 2, 'x');
    expect(result).toBe('2');
  });
  it('Modulus', () => {
    const result = operate(1, 2, '%');
    expect(result).toBe('1');
  });
});
