import { useColorScheme } from 'react-native';
import { COLORS } from './constants/color';
import { STRINGS } from './constants/string';
import { FONT_SIZE, LINE_HEIGHT, FONT_WEIGHT, FONT_FAMILY, LETTER_SPACING } from './constants/font';
import { SPACING } from './constants/spacing';

export type ThemePalette = {
  background: string;
  card: string;
  text: string;
  secondaryText: string;
  border: string;
  accent: string;
  error: string;
  white: string;
};

const lightPalette: ThemePalette = {
  background: '#f6f7fb',
  card: '#ffffff',
  text: '#1f1f1f',
  secondaryText: '#6d6d72',
  border: '#e6e6ef',
  accent: '#0a84ff',
  error: '#ff3b30',
  white: '#ffffff',
};

const darkPalette: ThemePalette = {
  background: '#121212',
  card: '#1f1f1f',
  text: '#ffffff',
  secondaryText: '#b0b0b0',
  border: '#2c2c2c',
  accent: '#0a84ff',
  error: '#ff453a',
  white: '#ffffff',
};

export const useAppTheme = () => {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';
  const palette = isDark ? darkPalette : lightPalette;

  return {
    isDark,
    palette,
    colors: COLORS,
    strings: STRINGS,
    fonts: {
      FONT_SIZE,
      LINE_HEIGHT,
      FONT_WEIGHT,
      FONT_FAMILY,
      LETTER_SPACING,
    },
    spacing: SPACING,
  };
};

export { COLORS, STRINGS, FONT_SIZE, LINE_HEIGHT, FONT_WEIGHT, FONT_FAMILY, LETTER_SPACING, SPACING };
