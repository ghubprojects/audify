import { createSlice, current } from '@reduxjs/toolkit';
import { bookList } from 'utils/homepage-data';

const initialState = {
    listAll: [],
    list: [],
    current: {},
    chapter: 1
};

export const bookSlice = createSlice({
    name: 'book',
    initialState,
    reducers: {
        getListAll: (state) => {
            state.listAll = bookList;
        },
        setCurrent: (state, action) => {
            state.current = action.payload;
        },
        setChapter: (state, action) => {
            state.chapter = action.payload;
        }
    }
});

export const { getListAll, setCurrent, setChapter } = bookSlice.actions;

export default bookSlice.reducer;
