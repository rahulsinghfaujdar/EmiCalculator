import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
} from 'react-native';
import { COLORS, FONT_SIZE, FONT_WEIGHT, LETTER_SPACING, SPACING } from '../../../ThemeUIWrapper';
import { useAppTheme, type ThemePalette } from '../../../ThemeUIWrapper';

interface PrimaryButtonProps {
  title: string;
  onPress: () => void;
  disabled?: boolean;
  style?: ViewStyle;
  textStyle?: TextStyle;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  title,
  onPress,
  disabled = false,
  style,
  textStyle,
}) => {
  const theme = useAppTheme();
  const styles = createStyles(theme.palette);
  return (
    <TouchableOpacity
      style={[
        styles.button,
        disabled && styles.buttonDisabled,
        style,
      ]}
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.8}
    >
      <Text style={[styles.buttonText, textStyle]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const createStyles = (palette: ThemePalette) =>
  StyleSheet.create({
  button: {
    backgroundColor: palette.accent,
    borderRadius: SPACING.borderRadius.sm,
    paddingVertical: SPACING.padding.md,
    paddingHorizontal: SPACING.padding.xxxl,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: SPACING.size.lg,
    width: '100%',
    shadowColor: palette.accent,
    shadowOpacity: 0.3,
    shadowRadius: SPACING.shadowRadius.md,
    shadowOffset: SPACING.shadowOffset.default,
    elevation: 0,
  },
  buttonDisabled: {
    backgroundColor: palette.accent + '80', // 50% opacity
    shadowColor: palette.accent,
    shadowOpacity: 0.1,
  },
  buttonText: {
    color: palette.white,
    fontSize: FONT_SIZE.xlarge,
    fontWeight: FONT_WEIGHT.semibold,
    letterSpacing: LETTER_SPACING.wide,
  },
});

export default PrimaryButton;
