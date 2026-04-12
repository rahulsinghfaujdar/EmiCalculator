import { Alert, BackHandler } from 'react-native';
import { STRINGS } from '../../../ThemeUIWrapper';
import { logger } from '../../../Utility/logger';

/**
 * Shows an alert dialog asking user to confirm app exit
 * with options to continue or exit the app
 */
export const showExitAppAlert = () => {
  Alert.alert(
    STRINGS.exitAppTitle,
    STRINGS.exitAppMessage,
    [
      {
        text: STRINGS.continue,
        onPress: () => logger.log('Continuing in app'),
        style: 'cancel',
      },
      {
        text: STRINGS.exit,
        onPress: () => BackHandler.exitApp(),
        style: 'destructive',
      },
    ],
    { cancelable: false }
  );
};

export const showLoginSuccessAlert = () => {
  Alert.alert(
    STRINGS.loginSuccessTitle,
    STRINGS.loginSuccessMessage,
    [
      {
        text: STRINGS.ok,
        onPress: () => logger.log('Login success acknowledged'),
        style: 'default',
      },
    ],
    { cancelable: false }
  );
};

export const showForgotPasswordAlert = () => {
  Alert.alert(
    STRINGS.forgotPasswordTitle,
    STRINGS.forgotPasswordMessage,
    [
      {
        text: STRINGS.ok,
        onPress: () => logger.log('Forgot password acknowledged'),
        style: 'default',
      },
    ],
    { cancelable: false }
  );
};

/**
 * Generic alert function for custom messages
 * @param title - Alert title
 * @param message - Alert message
 * @param buttons - Array of button configurations
 */
export const showAlert = (
  title: string,
  message: string,
  buttons: Array<{
    text: string;
    onPress: () => void;
    style?: 'default' | 'cancel' | 'destructive';
  }>
) => {
  Alert.alert(
    title,
    message,
    buttons,
    { cancelable: false }
  );
};
