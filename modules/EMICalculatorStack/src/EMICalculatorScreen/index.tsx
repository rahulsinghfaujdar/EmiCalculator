import React from 'react';
import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import EMIBreakdownCard from './EMIBreakdownCard';
import { useEMICalculator } from './useEMICalculator';
import { useAppTheme } from '../../../ThemeUIWrapper';

const EMICalculatorScreen = () => {

  const theme = useAppTheme();
  const styles = createStyles(theme);

  const { inputs, errors, result, isValid, handleInputChange, calculate, reset } = useEMICalculator();

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView contentContainerStyle={styles.content} keyboardShouldPersistTaps="handled">
        <Text style={styles.heading}>{theme.strings.emiTitle}</Text>
        <Text style={styles.description}>{theme.strings.emiDescription}</Text>

        <View style={styles.formGroup}>
          <Text style={styles.label}>{theme.strings.emiLoanAmountLabel}</Text>
          <TextInput
            value={inputs.principal === 0 ? '' : String(inputs.principal)}
            onChangeText={value => handleInputChange('principal', value)}
            keyboardType="numeric"
            placeholder={theme.strings.emiLoanAmountPlaceholder}
            placeholderTextColor={theme.palette.secondaryText}
            style={styles.input}
          />
          {errors.principal ? <Text style={styles.errorText}>{errors.principal}</Text> : null}
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>{theme.strings.emiInterestRateLabel}</Text>
          <TextInput
            value={inputs.annualInterestRate === 0 ? '' : String(inputs.annualInterestRate)}
            onChangeText={value => handleInputChange('annualInterestRate', value)}
            keyboardType="numeric"
            placeholder={theme.strings.emiInterestRatePlaceholder}
            placeholderTextColor={theme.palette.secondaryText}
            style={styles.input}
          />
          {errors.annualInterestRate ? <Text style={styles.errorText}>{errors.annualInterestRate}</Text> : null}
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>{theme.strings.emiTenureLabel}</Text>
          <TextInput
            value={inputs.tenureMonths === 0 ? '' : String(inputs.tenureMonths)}
            onChangeText={value => handleInputChange('tenureMonths', value)}
            keyboardType="numeric"
            placeholder={theme.strings.emiTenurePlaceholder}
            placeholderTextColor={theme.palette.secondaryText}
            style={styles.input}
          />
          {errors.tenureMonths ? <Text style={styles.errorText}>{errors.tenureMonths}</Text> : null}
        </View>

        <View style={styles.buttonRow}>
          <Pressable style={[styles.button, styles.resetButton]} onPress={reset}>
            <Text style={styles.resetButtonText}>{theme.strings.emiResetButton}</Text>
          </Pressable>
          <Pressable
            style={[styles.button, styles.calculateButtonWrapper, isValid ? styles.calculateButton : styles.calculateButtonDisabled]}
            onPress={calculate}
            disabled={!isValid}
          >
            <Text style={styles.calculateButtonText}>{theme.strings.emiCalculateButton}</Text>
          </Pressable>
        </View>

        <EMIBreakdownCard breakdown={result} />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

type ThemeContext = ReturnType<typeof useAppTheme>;

const createStyles = (theme: ThemeContext) => {
  const { palette, colors, fonts, spacing } = theme;

  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: palette.background,
    },
    content: {
      padding: spacing.padding.xxxl,
      paddingBottom: spacing.size.md,
    },
    heading: {
      fontSize: fonts.FONT_SIZE.heading,
      fontWeight: fonts.FONT_WEIGHT.bold,
      marginBottom: spacing.margin.md,
      color: palette.text,
    },
    description: {
      fontSize: fonts.FONT_SIZE.body,
      marginBottom: spacing.padding.xxxl,
      lineHeight: fonts.LINE_HEIGHT.body,
      color: palette.secondaryText,
    },
    formGroup: {
      marginBottom: spacing.padding.xl,
    },
    label: {
      fontSize: fonts.FONT_SIZE.small,
      marginBottom: spacing.margin.md,
      fontWeight: fonts.FONT_WEIGHT.semibold,
      color: palette.text,
    },
    input: {
      borderWidth: spacing.borderWidth.thin,
      borderRadius: spacing.borderRadius.lg,
      paddingVertical: spacing.padding.md,
      paddingHorizontal: spacing.padding.md,
      fontSize: fonts.FONT_SIZE.body,
      backgroundColor: palette.card,
      borderColor: palette.border,
      color: palette.text,
    },
    errorText: {
      marginTop: spacing.margin.md,
      color: palette.error,
      fontSize: fonts.FONT_SIZE.tiny,
    },
    buttonRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: spacing.margin.sm,
    },
    button: {
      flex: 1,
      borderRadius: spacing.borderRadius.lg,
      paddingVertical: spacing.padding.md,
      alignItems: 'center',
    },
    calculateButtonWrapper: {
      marginLeft: spacing.padding.sm,
    },
    resetButton: {
      backgroundColor: colors.surfaceLight,
    },
    resetButtonText: {
      color: colors.textPrimary,
      fontWeight: fonts.FONT_WEIGHT.bold,
    },
    calculateButton: {
      backgroundColor: palette.accent,
    },
    calculateButtonDisabled: {
      backgroundColor: colors.buttonDisabled,
    },
    calculateButtonText: {
      color: colors.white,
      fontWeight: fonts.FONT_WEIGHT.bold,
    },
  });
};

export default EMICalculatorScreen;
