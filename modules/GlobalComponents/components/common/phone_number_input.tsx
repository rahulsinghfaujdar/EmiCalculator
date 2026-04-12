import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  ViewStyle,
  TextStyle,
} from 'react-native';
import { COLORS, STRINGS, FONT_SIZE, SPACING } from '../../../ThemeUIWrapper';
import { useAppTheme, type ThemePalette } from '../../../ThemeUIWrapper';

interface PhoneNumberInputProps {
  label?: string;
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  containerStyle?: ViewStyle;
  labelStyle?: TextStyle;
  inputStyle?: TextStyle;
}

const PhoneNumberInput: React.FC<PhoneNumberInputProps> = ({
  label = STRINGS.phoneNumber,
  value,
  onChangeText,
  placeholder = STRINGS.phoneNumberPlaceholder,
  containerStyle,
  labelStyle,
  inputStyle,
}) => {
  const theme = useAppTheme();
  const styles = createStyles(theme.palette);
  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={[styles.label, labelStyle]}>{label}</Text>
      <TextInput
        style={[styles.input, inputStyle]}
        placeholder={placeholder}
        placeholderTextColor={COLORS.textPlaceholder}
        keyboardType="number-pad"
        maxLength={10}
        value={value}
        onChangeText={onChangeText}
        returnKeyType="done"
      />
    </View>
  );
};

const createStyles = (palette: ThemePalette) =>
  StyleSheet.create({
  container: {
    width: '100%',
    borderRadius: SPACING.borderRadius.md,
    borderWidth: SPACING.borderWidth.thin,
    borderColor: COLORS.border,
    backgroundColor: palette.background,
    padding: SPACING.padding.lg,
    marginTop: SPACING.margin.xl,
  },
  label: {
    fontSize: FONT_SIZE.small,
    color: palette.text,
    marginBottom: SPACING.margin.lg,
    textTransform: 'lowercase',
  },
  input: {
    fontSize: FONT_SIZE.medium,
    color: palette.text,
    paddingVertical: SPACING.padding.none,
  },
});

export default PhoneNumberInput;
