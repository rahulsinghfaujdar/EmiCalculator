import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface LoginState {
  isLoggedIn: boolean;
  phoneNumber: string;
}

const initialState: LoginState = {
  isLoggedIn: false,
  phoneNumber: '',
};

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setLoggedIn(state) {
      state.isLoggedIn = true;
    },
    setLoggedOut(state) {
      state.isLoggedIn = false;
      state.phoneNumber = '';
    },
    setPhoneNumber(state, action: PayloadAction<string>) {
      state.phoneNumber = action.payload;
    },
  },
});

export const { setLoggedIn, setLoggedOut, setPhoneNumber } = loginSlice.actions;

export default loginSlice.reducer;
