// dependencies
import { createSlice } from '@reduxjs/toolkit';
import { makeDiaryEntry, getLatestEntries, getTaggedEntries, getEntries } from '../Actions/DiaryActions';

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
            // clear state
            state.new_entry.error = ""
        }).addCase(makeDiaryEntry.rejected, (state, action) => {
            state.new_entry.loading = false;
            state.new_entry.error = action.payload;            
        }).addCase(makeDiaryEntry.fulfilled, (state, action) => {
            const {data} = action.payload; 
            state.new_entry.entry = data; 
            state.new_entry.loading = false;
            // clear error
            state.new_entry.error = ""
        }).addCase(getLatestEntries.pending, (state) => {
            state.latest_entries.loading = true;            
            // clear state
            state.latest_entries.error = ""
        }).addCase(getLatestEntries.rejected, (state, action) => {
            state.latest_entries.loading = false;
            state.latest_entries.error = action.payload;            
        }).addCase(getLatestEntries.fulfilled, (state, action) => {
            const {data} = action.payload;
            state.latest_entries.loading = false;
            state.latest_entries.entries = data
            // clear state
            state.latest_entries.error = "";
        }).addCase(getTaggedEntries.pending, (state) => {
            state.tagged_entries.loading = true; 
            // clear state
            state.tagged_entries.error = ""
        }).addCase(getTaggedEntries.rejected, (state, action) => {
            state.tagged_entries.loading = false;
            state.tagged_entries.error = action.payload;            
        }).addCase(getTaggedEntries.fulfilled, (state, action) => {
            const {data} = action.payload;
            state.tagged_entries.loading = false;
            state.tagged_entries.entries = data;
            // clear state
            state.tagged_entries.error = ""
        }).addCase(getEntries.pending, (state) => {
            state.my_entries.loading = true;
            // clear state
            state.my_entries.error = ""
        }).addCase(getEntries.rejected, (state, action) => {
            state.my_entries.loading = false;
            state.my_entries.error = action.payload;            
        }).addCase(getEntries.fulfilled, (state, action) => {
            const {data} = action.payload;
            state.my_entries.loading = false;
            state.my_entries.entries = data.diary_entries;
            // clear state
            state.my_entries.error = ""
        })
    }
})

export default diarySlice.reducer;