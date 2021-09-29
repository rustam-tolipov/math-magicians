import calculate from '../logic/calculate';

describe('Calculate tests', () => {
  it('Sum', () => {
    const calcobj = { next: 6, total: 10, operation: '+' };
    const result = calculate(calcobj, '=');
    const next1 = calculate(result, '+');
    const next2 = calculate(next1, '1');
    const next3 = calculate(next2, '=');
    expect(next3.total).toBe('17');
  });
  it('Subtract', () => {
    const calcobj = { next: 13, total: 20, operation: '-' };
    const result = calculate(calcobj, '=');
    expect(result.total).toBe('7');
  });
  it('Multiply', () => {
    const calcobj = { next: 7, total: 11, operation: 'x' };
    const result = calculate(calcobj, '=');
    expect(result.total).toBe('77');
  });
  it('Divide', () => {
    const calcobj = { next: 2, total: 154, operation: '÷' };
    const result = calculate(calcobj, '=');
    expect(result.total).toBe('77');
  });
  it('Modulus', () => {
    const calcobj = { next: 100, total: 777, operation: '%' };
    const result = calculate(calcobj, '=');
    expect(result.total).toBe('77');
  });
});
