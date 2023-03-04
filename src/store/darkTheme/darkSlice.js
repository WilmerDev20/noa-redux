import { createSlice } from '@reduxjs/toolkit';
export const darkSlice = createSlice({
    name: 'dark',
    initialState: {
        dark:false,
    },
    reducers: {
     setDark: (state ) => {
         state.dark = !state.dark;
     },
}
});
export const { setDark } = darkSlice.actions;