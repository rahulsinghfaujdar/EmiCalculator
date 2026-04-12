import { useMemo, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import {
  calculateEMI as calculateEMIAction,
  resetCalculator,
  selectEMICalculator,
  setAnnualInterestRate,
  setPrincipal,
  setTenureMonths,
} from '../store/emiSlice';
import type { EMIBreakdown, EMICalculatorInputs } from '../types';
import { logger } from '../../../Utility/logger';
import { useAppTheme } from '../../../ThemeUIWrapper';
import { STRINGS } from '../../../ThemeUIWrapper/constants/string';

const DEFAULT_INPUTS: EMICalculatorInputs = {
  principal: 100000,
  annualInterestRate: 8.5,
  tenureMonths: 60,
};

export type EMICalculatorInputErrors = Partial<Record<keyof EMICalculatorInputs, string>>;

export const validateInputs = (
  inputs: EMICalculatorInputs,
  strings = STRINGS,
): EMICalculatorInputErrors => {
  const errors: EMICalculatorInputErrors = {};

  if (inputs.principal <= 0) {
    errors.principal = strings.emiValidationLoanAmount;
  }

  if (inputs.annualInterestRate < 1 || inputs.annualInterestRate > 36) {
    errors.annualInterestRate = strings.emiValidationInterestRate;
  }

  if (inputs.tenureMonths < 3 || inputs.tenureMonths > 360) {
    errors.tenureMonths = strings.emiValidationTenure;
  }

  return errors;
};

export const calculateEmi = (inputs: EMICalculatorInputs): EMIBreakdown => {
  const { principal, annualInterestRate, tenureMonths } = inputs;
  const monthlyRate = annualInterestRate / 100 / 12;
  const tenure = Math.max(1, tenureMonths);

  if (principal <= 0 || annualInterestRate <= 0 || tenure <= 0) {
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

const initialBreakdown: EMIBreakdown = {
  monthlyEMI: 0,
  totalPayment: 0,
  totalInterest: 0,
};

export const useEMICalculator = () => {
  
  const dispatch = useAppDispatch();
  const calculatorState = useAppSelector(selectEMICalculator);

  const [errors, setErrors] = useState<EMICalculatorInputErrors>({});

  const theme = useAppTheme();

  const inputs: EMICalculatorInputs = {
    principal: calculatorState.principal,
    annualInterestRate: calculatorState.annualInterestRate,
    tenureMonths: calculatorState.tenureMonths,
  };

  const result: EMIBreakdown = {
    monthlyEMI: calculatorState.monthlyEMI,
    totalPayment: calculatorState.totalPayment,
    totalInterest: calculatorState.totalInterest,
  };

  const isValid = useMemo(() => Object.keys(validateInputs(inputs, theme.strings)).length === 0, [inputs, theme.strings]);

  const handleInputChange = (field: keyof EMICalculatorInputs, value: string) => {
    const numericValue = value.replace(/[^0-9.]/g, '');
    const parsed = numericValue === '' ? 0 : Number(numericValue);
    const nextInputs = { ...inputs, [field]: parsed };

    logger.log('Input Change:', field, value, 'Parsed:', parsed);
    
    switch (field) {
      case 'principal':
        dispatch(setPrincipal(parsed));
        break;
      case 'annualInterestRate':
        dispatch(setAnnualInterestRate(parsed));
        break;
      case 'tenureMonths':
        dispatch(setTenureMonths(parsed));
        break;
      default:
        break;
    }

    setErrors(validateInputs(nextInputs, theme.strings));
  };

  const calculate = () => {
    const nextErrors = validateInputs(inputs, theme.strings);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length === 0) {
      dispatch(calculateEMIAction());
    }
  };

  const reset = () => {
    dispatch(resetCalculator());
    setErrors({});
  };

  return {
    inputs,
    errors,
    result,
    isValid,
    theme,
    handleInputChange,
    calculate,
    reset,
  };
};
