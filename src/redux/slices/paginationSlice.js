import { createSlice } from '@reduxjs/toolkit';

const paginationSlice = createSlice({
    name: 'pagination',
    initialState: {
        page: 1
    },
    reducers: {
        pageUpdate: (state, { payload }) => {
            state.page = payload
        },
    },
});

export const { pageUpdate } = paginationSlice.actions;
export default paginationSlice.reducer;
