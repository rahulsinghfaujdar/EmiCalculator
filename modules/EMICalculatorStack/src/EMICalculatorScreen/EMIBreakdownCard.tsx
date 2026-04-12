import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import type { EMIBreakdown } from '../types';
import { useAppTheme } from '../../../ThemeUIWrapper';

type Props = {
  breakdown: EMIBreakdown;
};

const formatCurrency = (value: number, symbol: string) => `${symbol}${value.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

const EMIBreakdownCard: React.FC<Props> = ({ breakdown }) => {
  const theme = useAppTheme();
  const styles = createStyles(theme);
  const principalAmount = breakdown.totalPayment - breakdown.totalInterest;
  const principalShare = breakdown.totalPayment > 0 ? principalAmount / breakdown.totalPayment : 0;
  const interestShare = 1 - principalShare;

  return (
    <View style={styles.card}>
      <Text style={styles.title}>{theme.strings.emiBreakdownTitle}</Text>
      <View style={styles.row}>
        <Text style={styles.label}>{theme.strings.emiMonthlyEMILabel}</Text>
        <Text style={styles.monthlyValue}>{formatCurrency(breakdown.monthlyEMI, theme.strings.emiCurrencySymbol)}</Text>
      </View>
      <View style={styles.barContainer}>
        <View style={[styles.principalBar, { flex: principalShare }]} />
        <View style={[styles.interestBar, { flex: interestShare }]} />
      </View>
      <View style={styles.legendRow}>
        <Text style={styles.legendText}>{theme.strings.emiPrincipalLabel}</Text>
        <Text style={styles.legendText}>{theme.strings.emiInterestLabel}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>{theme.strings.emiTotalPaymentLabel}</Text>
        <Text style={styles.value}>{formatCurrency(breakdown.totalPayment, theme.strings.emiCurrencySymbol)}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>{theme.strings.emiTotalInterestLabel}</Text>
        <Text style={styles.value}>{formatCurrency(breakdown.totalInterest, theme.strings.emiCurrencySymbol)}</Text>
      </View>
    </View>
  );
};

const createStyles = (theme: ReturnType<typeof useAppTheme>) => {
  const { palette, colors, fonts, spacing } = theme;

  return StyleSheet.create({
    card: {
      backgroundColor: palette.card,
      borderRadius: spacing.borderRadius.lg,
      padding: spacing.padding.xl,
      elevation: 4,
      shadowColor: colors.shadow,
      shadowOpacity: 0.08,
      shadowRadius: spacing.shadowRadius.md,
      shadowOffset: spacing.shadowOffset.default,
      marginTop: spacing.padding.xxxl,
    },
    title: {
      fontSize: fonts.FONT_SIZE.large,
      fontWeight: fonts.FONT_WEIGHT.bold,
      marginBottom: spacing.padding.md,
      color: palette.text,
    },
    row: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: spacing.padding.sm,
    },
    label: {
      color: palette.secondaryText,
      fontSize: fonts.FONT_SIZE.small,
    },
    monthlyValue: {
      color: palette.accent,
      fontSize: fonts.FONT_SIZE.sectionTitle,
      fontWeight: fonts.FONT_WEIGHT.bold,
    },
    value: {
      color: palette.text,
      fontSize: fonts.FONT_SIZE.body,
      fontWeight: fonts.FONT_WEIGHT.semibold,
    },
    barContainer: {
      flexDirection: 'row',
      overflow: 'hidden',
      borderRadius: spacing.borderRadius.lg,
      height: spacing.padding.sm,
      marginBottom: spacing.padding.sm,
      backgroundColor: palette.border,
    },
    principalBar: {
      backgroundColor: colors.success,
    },
    interestBar: {
      backgroundColor: colors.warning,
    },
    legendRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: spacing.padding.md,
    },
    legendText: {
      fontSize: fonts.FONT_SIZE.tiny,
      color: palette.secondaryText,
    },
  });
};

export default EMIBreakdownCard;
