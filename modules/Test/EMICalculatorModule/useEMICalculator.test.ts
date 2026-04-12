import { calculateEmi, validateInputs } from '../../EMICalculatorStack/src/EMICalculatorScreen/useEMICalculator';

describe('useEMICalculator helpers', () => {
  it('calculates a known EMI correctly', () => {
    expect(
      calculateEmi({
        principal: 100000,
        annualInterestRate: 12,
        tenureMonths: 12,
      })
    ).toEqual({
      monthlyEMI: 8884.88,
      totalPayment: 106618.55,
      totalInterest: 6618.55,
    });
  });

  it('validates minimum and maximum interest rate boundaries', () => {
    expect(validateInputs({ principal: 100000, annualInterestRate: 0.5, tenureMonths: 12 })).toHaveProperty('annualInterestRate');
    expect(validateInputs({ principal: 100000, annualInterestRate: 36.1, tenureMonths: 12 })).toHaveProperty('annualInterestRate');
    expect(validateInputs({ principal: 100000, annualInterestRate: 1, tenureMonths: 12 })).not.toHaveProperty('annualInterestRate');
    expect(validateInputs({ principal: 100000, annualInterestRate: 36, tenureMonths: 12 })).not.toHaveProperty('annualInterestRate');
  });

  it('validates minimum and maximum tenure boundaries', () => {
    expect(validateInputs({ principal: 100000, annualInterestRate: 8.5, tenureMonths: 2 })).toHaveProperty('tenureMonths');
    expect(validateInputs({ principal: 100000, annualInterestRate: 8.5, tenureMonths: 361 })).toHaveProperty('tenureMonths');
    expect(validateInputs({ principal: 100000, annualInterestRate: 8.5, tenureMonths: 3 })).not.toHaveProperty('tenureMonths');
    expect(validateInputs({ principal: 100000, annualInterestRate: 8.5, tenureMonths: 360 })).not.toHaveProperty('tenureMonths');
  });

  it('rejects zero and negative inputs', () => {
    const errors = validateInputs({ principal: 0, annualInterestRate: -5, tenureMonths: -12 });

    expect(errors).toHaveProperty('principal');
    expect(errors).toHaveProperty('annualInterestRate');
    expect(errors).toHaveProperty('tenureMonths');
  });
});
