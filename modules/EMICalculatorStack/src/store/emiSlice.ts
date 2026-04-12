import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { EMICalculatorInputs, EMICalculatorState, EMIBreakdown } from '../types';

const calculateEmi = (inputs: EMICalculatorInputs): EMIBreakdown => {
  const { principal, annualInterestRate, tenureMonths } = inputs;
  const monthlyRate = annualInterestRate / 100 / 12;
  const tenure = Math.max(1, tenureMonths);

  if (monthlyRate <= 0 || principal <= 0 || tenure <= 0) {
    return {
      monthlyEMI: 0,
      totalPayment: 0,
      totalInterest: 0,
    };
  }

  const factor = Math.pow(1 + monthlyRate, tenure);
  const monthlyEMI = (principal * monthlyRate * factor) / (factor - 1);
  const totalPayment = monthlyEMI * tenure;
  const totalInterest = totalPayment - principal;

  return {
    monthlyEMI: Number(monthlyEMI.toFixed(2)),
    totalPayment: Number(totalPayment.toFixed(2)),
    totalInterest: Number(totalInterest.toFixed(2)),
  };
};

const initialState: EMICalculatorState = {
  principal: 0,
  annualInterestRate: 0,
  tenureMonths: 0,
  monthlyEMI: 0,
  totalPayment: 0,
  totalInterest: 0,
  lastUpdated: '',
};

const emiSlice = createSlice({
  name: 'emiCalculator',
  initialState,
  reducers: {
    setPrincipal(state: EMICalculatorState, action: PayloadAction<number>) {
      state.principal = action.payload;
    },
    setAnnualInterestRate(state: EMICalculatorState, action: PayloadAction<number>) {
      state.annualInterestRate = action.payload;
    },
    setTenureMonths(state: EMICalculatorState, action: PayloadAction<number>) {
      state.tenureMonths = action.payload;
    },
    calculateEMI(state: EMICalculatorState) {
      const breakdown = calculateEmi({
        principal: state.principal,
        annualInterestRate: state.annualInterestRate,
        tenureMonths: state.tenureMonths,
      });

      state.monthlyEMI = breakdown.monthlyEMI;
      state.totalPayment = breakdown.totalPayment;
      state.totalInterest = breakdown.totalInterest;
      state.lastUpdated = new Date().toISOString();
    },
    resetCalculator(state: EMICalculatorState) {
      state.principal = initialState.principal;
      state.annualInterestRate = initialState.annualInterestRate;
      state.tenureMonths = initialState.tenureMonths;
      state.monthlyEMI = 0;
      state.totalPayment = 0;
      state.totalInterest = 0;
      state.lastUpdated = '';
    },
  },
});

export const {
  setPrincipal,
  setAnnualInterestRate,
  setTenureMonths,
  calculateEMI,
  resetCalculator,
} = emiSlice.actions;

export const selectEMICalculator = (state: { emiCalculator: EMICalculatorState }) => state.emiCalculator;

export default emiSlice.reducer;
