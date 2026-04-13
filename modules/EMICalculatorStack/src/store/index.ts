import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import emiCalculatorReducer from './emiSlice';
import { loginReducer } from '../../../LoginStack/src/LoginScreen/store';

//Combine Reducers (App State Structure)
const rootReducer = combineReducers({
  emiCalculator: emiCalculatorReducer,
  login: loginReducer,
});

//Persist Configuration (Saving State Locally)
const persistConfig = {
  key: 'root',    //Root storage key
  version: 1,    //Version for migrations
  storage: AsyncStorage,    //Use React Native local storage
  whitelist: ['login', 'emiCalculator', 'navigation'],    //Only persist these slices of state
  blacklist: [],    //Don't persist these slices of state
};

//Create Persisted Reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

//Configure Store (Redux Toolkit)
export const store = configureStore({
  reducer: persistedReducer,    //Persisted reducer (instead of normal reducer)
  middleware: (getDefaultMiddleware) =>   //Redux Toolkit enforces serializable state/actions But Redux Persist uses some non-serializable internal actions
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);


//Type-safe useSelector and useDispatch hooks for TypeScript
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
