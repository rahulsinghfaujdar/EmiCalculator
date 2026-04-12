import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import EMICalculatorScreen from '../modules/EMICalculatorStack/src/EMICalculatorScreen';
import HomeScreen from '../modules/HomeStack/src/HomeScreen';
import LoginScreen from '../modules/LoginStack/src/LoginScreen';
import { useAppSelector } from '../modules/EMICalculatorStack/src/store/hooks';
import { initializeApp } from './initApp';

function AppContent() {
    
  const [enableCalculatorFeature, setEnableCalculatorFeature] = useState(false);
  const isLoggedIn = useAppSelector(state => state.login.isLoggedIn);

  useEffect(() => {
    const init = async () => {
      const { calculatorEnabled } = await initializeApp();
      setEnableCalculatorFeature(calculatorEnabled);
    };

    init();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        {!isLoggedIn ? (
          <LoginScreen />
        ) : enableCalculatorFeature ? (
          <EMICalculatorScreen />
        ) : (
          <HomeScreen />
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default AppContent;
