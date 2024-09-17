// dependencies
import { createSlice } from '@reduxjs/toolkit';
import { makeDiaryEntry, getLatestEntries, getTaggedEntries } from '../Actions/DiaryActions';

// initial state
const initialState = {
    new_entry: {entry: "", loading: "", error: ""},
    my_entries: {entries: [], loading: "", error: ""},
    tagged_entries: {entries: [], loading: "", error: ""},
    latest_entries: {entries: [], loading: "", error: ""}
}

const diarySlice = createSlice({
    name: "diary",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(makeDiaryEntry.pending, (state, action) => {
            state.new_entry.loading = true;
        }).addCase(makeDiaryEntry.rejected, (state, action) => {
            state.new_entry.loading = false;
            state.new_entry.error = action.payload;
        }).addCase(makeDiaryEntry.fulfilled, (state, action) => {
            const {data} = action.payload.data;
            state.new_entry.entry = data;
        }).addCase(getLatestEntries.pending, (state) => {
            state.latest_entries.loading = true;
        }).addCase(getLatestEntries.rejected, (state, action) => {
            state.latest_entries.loading = false;
            state.latest_entries.error = action.payload;
        }).addCase(getLatestEntries.fulfilled, (state, action) => {
            const {data} = action.payload;
            state.latest_entries.loading = false;
            state.latest_entries.entries = data;
        }).addCase(getTaggedEntries.pending, (state) => {
            state.tagged_entries.loading = true;
        }).addCase(getTaggedEntries.rejected, (state, action) => {
            state.tagged_entries.loading = false;
            state.tagged_entries.error = action.payload;
        }).addCase(getTaggedEntries.fulfilled, (state, action) => {
            const {data} = action.payload;
            state.tagged_entries.loading = false;
            state.tagged_entries.entries = data;
        })
    }
})

export default diarySlice.reducer;