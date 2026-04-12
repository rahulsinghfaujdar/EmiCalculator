import remoteConfig from '@react-native-firebase/remote-config';
import { logger } from '../modules/Utility/logger';

export async function initRemoteConfig() {
  (globalThis as any).RNFB_SILENCE_MODULAR_DEPRECATION_WARNINGS = true;

  await remoteConfig().setConfigSettings({
    minimumFetchIntervalMillis: __DEV__ ? 0 : 3600000,
  });

  await remoteConfig().setDefaults({
    enable_development_logs: false,
    enable_production_logs: false,
    enable_calculator_feature: false,
  });

  const activated = await remoteConfig().fetchAndActivate();

  const calculatorEnabled = remoteConfig()
    .getValue('enable_calculator_feature')
    .asBoolean();

  const enableDevLogs = remoteConfig()
    .getValue('enable_development_logs')
    .asBoolean();

  const enableProdLogs = remoteConfig()
    .getValue('enable_production_logs')
    .asBoolean();

  logger.log('Remote Config activated:', activated);
  logger.log('Enable Calculator Feature:', calculatorEnabled);
  logger.log('Remote Development Config Value:', enableDevLogs);
  logger.log('Remote Production Config Value:', enableProdLogs);

  return { activated, calculatorEnabled, enableDevLogs, enableProdLogs };
}