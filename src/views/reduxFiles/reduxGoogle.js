import { createSlice } from '@reduxjs/toolkit'

export const googleSlice = createSlice({
  name: 'google',
  initialState: {
    jwt_key: "",
    user: {}
  },
  reducers: {
    clear: state => {
      state.jwt_key = "";
      state.user = {};
      state.createUser = false;
    },
    setGoogleToken: (state, action) => {
      state.jwt_key = action.payload;
    },
    setGoogleUser: (state, action) => {
      state.user = action.payload;
    },
    setCreateUser: (state, action) => {
      state.createUser = action.payload;
    }
  }
})

// Action creators are generated for each case reducer function
export const {
  clear,
  setGoogleToken,
  setGoogleUser,
  setCreateUser,
} = googleSlice.actions

export default googleSlice.reducer