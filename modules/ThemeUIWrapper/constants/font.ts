export const FONT_SIZE = {
  tiny: 12,
  small: 14,
  body: 15,
  medium: 16,
  large: 18,
  xlarge: 20,
  sectionTitle: 24,
  heading: 28,
  xxlarge: 32,
} as const;

export const LINE_HEIGHT = {
  body: 22,
  heading: 34,
} as const;

export const FONT_WEIGHT = {
  normal: '400' as const,
  semibold: '600' as const,
  bold: '700' as const,
};

export const FONT_FAMILY = {
  regular: 'System',
  semibold: 'System',
  bold: 'System',
} as const;

export const LETTER_SPACING = {
  normal: 0,
  wide: 0.5,
} as const;
