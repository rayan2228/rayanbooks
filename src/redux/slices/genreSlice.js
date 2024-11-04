import { createSlice } from '@reduxjs/toolkit';

const genreSlice = createSlice({
    name: 'genre',
    initialState: {
        topic: "choose an option"
    },
    reducers: {
        topicChange: (state, { payload }) => {
            state.topic = payload
        },
    },
});

export const { topicChange } = genreSlice.actions;
export default genreSlice.reducer;
