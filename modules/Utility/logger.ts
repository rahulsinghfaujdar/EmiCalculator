// Global logger utility to enable/disable logs across the project

const LOGGING_ENABLED = __DEV__; // Set to false to disable all logs in production

export const logger = {
  log: (message: string, ...args: any[]) => {
    if (LOGGING_ENABLED) {
      console.log(message, ...args);
    }
  },
  warn: (message: string, ...args: any[]) => {
    if (LOGGING_ENABLED) {
      console.warn(message, ...args);
    }
  },
  error: (message: string, ...args: any[]) => {
    if (LOGGING_ENABLED) {
      console.error(message, ...args);
    }
  },
  info: (message: string, ...args: any[]) => {
    if (LOGGING_ENABLED) {
      console.info(message, ...args);
    }
  },
};
