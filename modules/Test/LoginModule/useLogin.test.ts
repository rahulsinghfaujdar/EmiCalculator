import loginReducer, { setLoggedIn, setLoggedOut, setPhoneNumber } from '../../LoginStack/src/LoginScreen/store/loginSlice';

describe('Login slice', () => {
  it('should return the initial state', () => {
    const initialState = loginReducer(undefined, { type: 'unknown' });
    expect(initialState).toEqual({
      isLoggedIn: false,
      phoneNumber: '',
    });
  });

  it('should handle setLoggedIn', () => {
    const state = loginReducer(undefined, setLoggedIn());
    expect(state.isLoggedIn).toBe(true);
    expect(state.phoneNumber).toBe('');
  });

  it('should handle setPhoneNumber', () => {
    const state = loginReducer(undefined, setPhoneNumber('9876543210'));
    expect(state.phoneNumber).toBe('9876543210');
    expect(state.isLoggedIn).toBe(false);
  });

  it('should handle setLoggedOut and reset phone number', () => {
    const loggedInState = {
      isLoggedIn: true,
      phoneNumber: '9876543210',
    };
    const state = loginReducer(loggedInState, setLoggedOut());
    expect(state).toEqual({
      isLoggedIn: false,
      phoneNumber: '',
    });
  });
});
