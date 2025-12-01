import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: localStorage.getItem('token') || null,
    isLoggedIn: !!localStorage.getItem('token'),
    userID: null
  },
  reducers: {
    loginSuccess: (state, action) => {
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.userID = action.payload.userID;
      localStorage.setItem('userID', action.payload.userID);
      localStorage.setItem('token', action.payload.token);
    },
    logout: (state) => {
      state.token = null;
      state.isLoggedIn = false;
      state.userID = null;
      localStorage.removeItem('token');
      localStorage.removeItem('userID');

    }
  }
});

export const { loginSuccess, logout } = authSlice.actions;
export default authSlice.reducer;