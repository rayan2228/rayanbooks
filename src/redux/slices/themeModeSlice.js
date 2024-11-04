import { createSlice } from '@reduxjs/toolkit';

const themeModeSlice = createSlice({
    name: 'themeMode',
    initialState: {
        theme: "dark",
    },
    reducers: {
        toggleTheme: (state, { payload }) => {
            state.theme = payload
            document.querySelector("html").classList.remove("dark", "light");
            document.querySelector("html").classList.add(state.theme);

        },
    },
});

export const { toggleTheme } = themeModeSlice.actions;
export default themeModeSlice.reducer;
