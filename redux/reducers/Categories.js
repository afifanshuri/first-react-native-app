import { createSlice } from '@reduxjs/toolkit';
import { create } from 'react-test-renderer';


const initialState = {
  categories: [
    { name: 'Plumbing', categoryId: 1, icon: 'plumber' },
    { name: 'Mechanic', categoryId: 2, icon: 'mechanic' },
    { name: 'Babysitter', categoryId: 3, icon: 'babysitter' },
    { name: 'Electrician', categoryId: 4, icon: 'electrician' },
    { name: 'Moving', categoryId: 5, icon: 'moving' },
    { name: 'Petsitter', categoryId: 6, icon: 'petsitter' },
    { name: 'Cleaner', categoryId: 7, icon: 'cleaner' },
    { name: 'Towing', categoryId: 8, icon: 'towing' },
    { name: 'Painter', categoryId: 9, icon: 'painter' },
    { name: 'Graphic Designer', categoryId: 10, icon: 'graphicdesign' },
    { name: 'Developer', categoryId: 11, icon: 'developer' },
    { name: 'Aircond Service', categoryId: 12, icon: 'aircond' },
  ],
  currentSelectedCategory: null,
  currentCategory: {},
};

const categorySlice = createSlice({
  name: 'categories',
  initialState: initialState,
  reducers: {
    chooseCategory: (state, action) => {
      state.currentSelectedCategory = action.payload;
      state.currentCategory = state.categories.find(
        item => item.categoryId === action.payload,
      );
    },
  },
});

export const { chooseCategory } = categorySlice.actions;
export default categorySlice.reducer;
