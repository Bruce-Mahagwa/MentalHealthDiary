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

export const sendFriendRequest = createAsyncThunk("/friends/request", async ({_id}, {rejectWithValue}) => {
    try {
        const {data} = await axios.post(`/friends/request/${_id}`)
        return data;
    } 
    catch(e) {
        if (e.response.data.error) {
            return rejectWithValue(e.response.data.error);
        }
    }
})

export const getMyFriendRequests = createAsyncThunk("/friends/requests_sent", async (_, {rejectWithValue}) => {
    try {
        const {data} = await axios.get("/friends/requests_sent")
        return data;
    }
    catch(e) {
        if (e.response.data.error) {
            return rejectWithValue(e.response.data.error);
        }      
    }
})

export const withdrawFriendRequest = createAsyncThunk('/friends/widthdraw', async({_id}, {rejectWithValue}) => {
    try {
        const {data} = await axios.post(`/friends/delete_request/${_id}`);
        return data;
    }
    catch(e) {
        if (e.response.data.error) {
            return rejectWithValue(e.response.data.error);
        }
    }
})

export const getMyInvites = createAsyncThunk("/friends/invites", async (_, {rejectWithValue}) => {
    try {
        const {data} = await axios.get("/friends/requests");
        return data;
    }
    catch(e) {
        if (e.response.data.error) {
            return rejectWithValue(e.response.data.error);
        }
    }
})

export const acceptFriendRequest = createAsyncThunk("/friends/accept_friend", async ({_id}, {rejectWithValue}) => {
    try {
        const {data} = await axios.post(`/friends/accept_request/${_id}`)
        return data;
    }
    catch(e) {
        if (e.response.data.error) {
            return rejectWithValue(e.response.data.error);
        }
    }
})

export const rejectFriendRequest = createAsyncThunk("/friends/reject_friend", async ({_id}, {rejectWithValue}) => {
    try {
        const {data} = await axios.post(`/friends/reject_request/${_id}`)
        return data;
    }
    catch(e) {
        if (e.response.data.error) {
            return rejectWithValue(e.response.data.error);
        }
    }
})

export const unFriend = createAsyncThunk("/friends/unfriend", async ({_id}, {rejectWithValue}) => {
    try {
        const {data} = await axios.post(`/friends/unfriend/${_id}`);
        return data;
    }
    catch(e) {
        if (e.response.data.error) {
            return rejectWithValue(e.response.data.error);
        }      
    }
})