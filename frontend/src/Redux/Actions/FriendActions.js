// dependencies
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getMyFriends = createAsyncThunk("/friends/fetchfriends", async (_, {rejectWithValue}) => {
    try { 
        const {data} = await axios.get("/friends/fetchfriends");
        return data;
    }
    catch(e) {
        if (e.reponse.data.error) {
            return rejectWithValue(e.response.data.error);
        }
    }
})

export const searchForUsers = createAsyncThunk("/friends/search", async ({name}, {rejectWithValue}) => {
    try {
        const {data} = await axios.get(`/friends/search?name=${name}`);
        return data;        
    }
    catch(e) {
        if (e.reponse.data.error) {
            return rejectWithValue(e.response.data.error);
        }
    }
})