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