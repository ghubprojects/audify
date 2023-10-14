import { createSlice, current } from '@reduxjs/toolkit';
import { bookList } from 'utils/homepage-data';

const initialState = {
    listAll: [],
    list: [],
    current: {}
};

export const bookSlice = createSlice({
    name: 'book',
    initialState,
    reducers: {
        getListAll: (state) => {
            state.listAll = bookList;
        },
        setCurrent: (state, action) => {
            state.current = state.listAll.find((book) => book.id === action.payload.id);
        }
    }
});

export const { getListAll, setCurrent } = bookSlice.actions;

export default bookSlice.reducer;
