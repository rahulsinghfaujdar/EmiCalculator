import { initRemoteConfig } from './appConfig';
import { logger } from '../modules/Utility/logger';

export async function initializeApp() {
  try {
    const { calculatorEnabled } = await initRemoteConfig();
    return { calculatorEnabled };
  } catch (error) {
    logger.warn('App initialization failed:', error);
    return { calculatorEnabled: false };
  }
}
