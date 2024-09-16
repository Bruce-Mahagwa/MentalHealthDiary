// dependencies
import { createSlice } from '@reduxjs/toolkit';
import { makeDiaryEntry } from '../Actions/DiaryActions';

// initial state
const initialState = {
    error: {},
    loading: false,
    new_entry: {},
    edited_entry: {},
    my_entries: {},
    tagged_entries: {},
    searched_entries: {}
}

const diarySlice = createSlice({
    name: "diary",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(makeDiaryEntry.pending, (state, action) => {
            state.loading = true;
        }).addCase(makeDiaryEntry.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        }).addCase(makeDiaryEntry.fulfilled, (state, action) => {
            const {data} = action.payload.data;
            state.new_entry = data;
        })
    }
})

export default diarySlice.reducer;