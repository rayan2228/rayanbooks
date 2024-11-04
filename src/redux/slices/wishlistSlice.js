import { createSlice } from '@reduxjs/toolkit';
import { getFromLocalStorage, saveLocalStorage } from '../../helpers/localStoreHelpers';

const wishlistSlice = createSlice({
    name: 'wishlist',
    initialState: {
        items: getFromLocalStorage("wishlist",[]),
    },
    reducers: {
        toggleWishlist: (state, action) => {
            const book = action.payload;
            if (state.items.some(({ id }) => id == book.id)) {
                state.items = state.items.filter(({ id }) => id !== book.id);
            } else {
                state.items.push(book);
            }
            saveLocalStorage("wishlist", state.items);
        },
    },
});

export const { toggleWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
