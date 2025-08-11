import { createSlice } from '@reduxjs/toolkit';
import { create } from 'react-test-renderer';

export const User = createSlice({
  name: 'user',
  initialState: {
    firstName: 'Afif',
    lastName: 'Fanshuri',
    email:'afif@mail.com',
    userId: 1,
  },
  reducers: {
    updateFirstName: (state, action) => {
      state.firstName = action.payload.firstName;
    },
  },
});

export const { updateFirstName } = User.actions;
export default User.reducer;
