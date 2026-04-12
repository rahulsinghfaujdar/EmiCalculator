import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Text,
} from 'react-native';
import { arrowBack } from '../../assets/icons';
import { COLORS, STRINGS, FONT_SIZE, FONT_WEIGHT, SPACING } from '../../../ThemeUIWrapper';
import { useAppTheme, type ThemePalette } from '../../../ThemeUIWrapper';

interface HeaderProps {
  title?: string;
  onBackPress?: () => void;
}

const Header: React.FC<HeaderProps> = ({ title = STRINGS.loginTitle, onBackPress }) => {

  const theme = useAppTheme();
  const styles = createStyles(theme.palette);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={onBackPress}
        activeOpacity={0.7}
      >
        <Image
          source={arrowBack}
          style={styles.icon}
          resizeMode="contain"
        />
      </TouchableOpacity>

      <Text style={styles.title}>{title}</Text>

      <View style={styles.spacer} />
    </View>
  );
};

const createStyles = (palette: ThemePalette) =>
  StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: palette.background,
  },
  backButton: {
    padding: SPACING.padding.none,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: SPACING.size.sm,
    height: SPACING.size.sm,
    tintColor: palette.text,
  },
  title: {
    flex: 1,
    textAlign: 'center',
    fontSize: FONT_SIZE.xlarge,
    fontWeight: FONT_WEIGHT.semibold,
    color: palette.text,
    includeFontPadding: false,
  },
  spacer: {
    width: SPACING.size.md,
  },
});

export default Header;
