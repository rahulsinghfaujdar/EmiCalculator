import React, { useState } from 'react';
import { View } from 'react-native';
import { StyleSheet } from 'react-native';
import Header from '../../../GlobalComponents/components/common/header';
import PrimaryButton from '../../../GlobalComponents/components/common/button';
import PhoneNumberInput from '../../../GlobalComponents/components/common/phone_number_input';
import PasswordInput from '../../../GlobalComponents/components/common/password';
import CustomText from '../../../GlobalComponents/components/common/text';
import { showExitAppAlert, showForgotPasswordAlert, showLoginSuccessAlert } from '../../../GlobalComponents/components/common/alerts';
import { COLORS, STRINGS, FONT_SIZE, FONT_WEIGHT, SPACING } from '../../../ThemeUIWrapper';
import { useAppTheme, type ThemePalette } from '../../../ThemeUIWrapper';
import { useAppDispatch } from '../../../EMICalculatorStack/src/store/hooks';
import { setLoggedIn } from './store/loginSlice';
import { SafeAreaView } from 'react-native-safe-area-context';

const LoginScreen: React.FC<{ onLoginSuccess?: () => void }> = ({ onLoginSuccess }) => {
  
  const dispatch = useAppDispatch();
  const theme = useAppTheme();
  const styles = createStyles(theme.palette);

  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');

  const isPhoneValid = /^\d{10}$/.test(phoneNumber);
  const isPasswordValid = password.length >= 8;
  const isLoginDisabled = !isPhoneValid || !isPasswordValid;

  const backPressHandler = () => {
    showExitAppAlert();
  };

  const handleLoginPress = () => {
    if (!isLoginDisabled) {
      dispatch(setLoggedIn());
      //showLoginSuccessAlert();
      onLoginSuccess?.();
    }
  };

  return (
    <SafeAreaView style={styles.appContainer}>
      <View style={styles.appContainer}>
        <View style={styles.headerContainer}>
          <Header title="login" onBackPress={backPressHandler} />
        </View>

        <View style={styles.middleContainer}>
          <CustomText style={styles.loginText}>{STRINGS.loginToAccount}</CustomText>
          <PhoneNumberInput
            value={phoneNumber}
            onChangeText={setPhoneNumber}
          />
          {!isPhoneValid && phoneNumber.length > 0 && (
            <CustomText style={styles.errorText}>{STRINGS.phoneError}</CustomText>
          )}
          <PasswordInput
            value={password}
            onChangeText={setPassword}
            placeholder={STRINGS.enterPassword}
          />
          {!isPasswordValid && password.length > 0 && (
            <CustomText style={styles.errorText}>{STRINGS.passwordError}</CustomText>
          )}
          <CustomText style={styles.forgotText} onPress={showForgotPasswordAlert}>{STRINGS.forgotPassword}</CustomText>
        </View>

        <View style={styles.buttonContainer}>
          <PrimaryButton
            title={STRINGS.logIn}
            onPress={handleLoginPress}
            disabled={isLoginDisabled}
          />
        </View>
      </View>
      </SafeAreaView>
  );
};
 
const createStyles = (palette: ThemePalette) =>
  StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  appContainer: {
    flex: 1,
    flexDirection: 'column',
    alignContent:'space-between',
    backgroundColor: palette.background,
  },
  headerContainer: {
    flex: 0,
    paddingHorizontal: SPACING.padding.xxl,
    //paddingBottom: SPACING.padding.md,
    backgroundColor: palette.background,
  },
  buttonContainer: {
    flex: 0,
    marginHorizontal: SPACING.padding.xl,
    justifyContent: 'center',
  },
  loginText: {
    fontSize: FONT_SIZE.xxlarge,
    fontWeight: FONT_WEIGHT.normal,
    color: palette.text,
    paddingHorizontal: SPACING.padding.none,
    paddingTop: SPACING.padding.xl,
  },
  forgotText: {
    fontSize: FONT_SIZE.large,
    fontWeight: FONT_WEIGHT.bold,
    color: palette.accent,
    paddingHorizontal: SPACING.padding.none,
    paddingTop: SPACING.padding.xl,
  },
  errorText: {
    color: palette.error,
    fontSize: FONT_SIZE.small,
    marginTop: SPACING.margin.md,
    marginBottom: SPACING.margin.xs,
  },
  middleContainer: {
    flex: 1,
    paddingHorizontal: SPACING.padding.xl,
    marginTop: SPACING.margin.md,
    justifyContent: 'flex-start',
  },
});

export default LoginScreen;
