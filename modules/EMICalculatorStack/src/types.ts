export interface EMICalculatorInputs {
  principal: number;
  annualInterestRate: number;
  tenureMonths: number;
}

export interface EMIBreakdown {
  monthlyEMI: number;
  totalPayment: number;
  totalInterest: number;
}

export interface EMICalculatorState extends EMICalculatorInputs, EMIBreakdown {
  lastUpdated: string;
}

export type EMICalculatorStackParamList = {
  EMICalculator: undefined;
};
