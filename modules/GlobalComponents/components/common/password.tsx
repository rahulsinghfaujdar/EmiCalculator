import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ViewStyle,
  TextStyle,
  ImageStyle,
} from 'react-native';
import { icons } from '../../assets/icons';
import { COLORS, STRINGS, FONT_SIZE, SPACING } from '../../../ThemeUIWrapper';
import { useAppTheme, type ThemePalette } from '../../../ThemeUIWrapper';

interface PasswordInputProps {
  label?: string;
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  containerStyle?: ViewStyle;
  labelStyle?: TextStyle;
  inputStyle?: TextStyle;
}

const PasswordInput: React.FC<PasswordInputProps> = ({
  label = STRINGS.password,
  value,
  onChangeText,
  placeholder = STRINGS.enterPassword,
  containerStyle,
  labelStyle,
  inputStyle,
}) => {

  const theme = useAppTheme();
  const styles = createStyles(theme.palette);

  const [isVisible, setIsVisible] = useState(false);

  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={[styles.label, labelStyle]}>{label}</Text>
      <View style={styles.inputWrapper}>
        <TextInput
          style={[styles.input, inputStyle]}
          placeholder={placeholder}
          placeholderTextColor={COLORS.textPlaceholder}
          secureTextEntry={!isVisible}
          autoCapitalize="none"
          autoCorrect={false}
          textContentType="password"
          value={value}
          onChangeText={onChangeText}
          returnKeyType="done"
        />
        <TouchableOpacity
          style={styles.iconButton}
          activeOpacity={0.7}
          onPress={() => setIsVisible((prev) => !prev)}>
          <Image
            source={isVisible ? icons.visibility : icons.visibilityOff}
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
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
    marginBottom: SPACING.margin.sm,
    textTransform: 'lowercase',
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    fontSize: FONT_SIZE.medium,
    color: palette.text,
    paddingVertical: SPACING.padding.none,
    paddingRight: SPACING.padding.sm,
  },
  iconButton: {
    padding: SPACING.padding.xs,
  },
  icon: {
    width: SPACING.size.xs,
    height: SPACING.size.xs,
    resizeMode: 'contain',
    tintColor: COLORS.textPlaceholder,
  },
});

export default PasswordInput;
