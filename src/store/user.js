import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import Axios from 'axios';
import apiConfig from '../config/api';

export const signUp = createAsyncThunk(
  'user/signUp',
  async ({ credentials }) => {
    const response = await Axios.post(`${apiConfig.domain}/users`, {
      user: credentials,
    });
    return response.data.user;
  }
);

export const signIn = createAsyncThunk(
  'user/signIn',
  async ({ credentials }) => {
    const response = await Axios.post(`${apiConfig.domain}/users/signin`, {
      user: credentials,
    });
    return response.data.user;
  }
);

let userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
    status: '',
  },
  reducers: {
    logOut: (state, action) => {
      state.user = null; // se hace de esta manera ya que redux toolkit usa underhood una lib para manejar la inmutabilidad (immer)
    },
  },
  extraReducers: {
    [signUp.pending]: (state, action) => {
      state.status = 'loading';
    },
    [signUp.fulfilled]: (state, action) => {
      state.user = action.payload;
      state.status = 'success';
    },
    [signUp.rejected]: (state, action) => {
      state.status = 'failed';
    },
    [signIn.pending]: (state, action) => {
      state.status = 'loading';
    },
    [signIn.fulfilled]: (state, action) => {
      state.user = action.payload;
      state.status = 'success';
    },
    [signIn.rejected]: (state, action) => {
      state.status = 'failed';
    },
  },
});

// Action creators
export const { logOut } = userSlice.actions;

export default userSlice.reducer;
