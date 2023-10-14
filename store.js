import { configureStore } from '@reduxjs/toolkit';
import { bookReducer } from './slices';

export const store = configureStore({
    reducer: {
        book: bookReducer
    }
});
