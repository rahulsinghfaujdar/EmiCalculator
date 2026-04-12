export const SPACING = {
  // Padding
  padding: {
    none: 0,
    xs: 6,
    sm: 12,
    md: 16,
    lg: 18,
    xl: 20,
    xxl: 22,
    xxxl: 24,
  },

  // Margin
  margin: {
    xs: 4,
    sm: 5,
    md: 8,
    lg: 10,
    xl: 20,
    xxl: 24,
  },

  // Dimensions
  size: {
    xs: 20,
    sm: 24,
    md: 40,
    lg: 60,
  },

  // Border
  borderWidth: {
    thin: 1,
  },

  // Border Radius
  borderRadius: {
    sm: 3,
    md: 9,
    lg: 14,
  },

  // Shadow Radius
  shadowRadius: {
    sm: 4,
    md: 8,
  },

  // Shadow
  shadowOffset: {
    default: { width: 0, height: 4 },
  },
} as const;
