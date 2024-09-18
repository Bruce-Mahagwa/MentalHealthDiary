// dependencies
import axios from "axios"; 
import { createAsyncThunk } from "@reduxjs/toolkit"; 

export const makeDiaryEntry = createAsyncThunk("/diary/add", async ({entry, tags}, {rejectWithValue}) => {
    try {
        const {data} = await axios.post("/diary/add", {"entry": entry, "tags": tags});
        return data;
    }
    catch(e) {
        if (e.reponse.data.error) {
            return rejectWithValue(e.response.data.error);
        }
    }
})

export const getLatestEntries = createAsyncThunk("/diary/latest", async (_, {rejectWithValue}) => {
    try {
        const {data} = await axios.get("/diary/latest");
        return data;
    }
    catch(e) {
        if (e.reponse.data.error) {
            return rejectWithValue(e.response.data.error);
        }
    }
})

export const getTaggedEntries = createAsyncThunk("/diary/tagged", async (_, {rejectWithValue}) => {
    try {
        const {data} = await axios.get("/diary/tagged");
        return data;
    }
    catch(e) {
        if (e.reponse.data.error) {
            return rejectWithValue(e.response.data.error);
        }
    }
})

export const getEntries = createAsyncThunk("/diary/entries", async ({start, end}, {rejectWithValue}) => {
    try {
        const {data} = await axios.get(`/diary/entries?start=${start}&end=${end}`);
        return data;
    }
    catch(e) {
        if (e.reponse.data.error) {
            return rejectWithValue(e.response.data.error);
        }
    }
})