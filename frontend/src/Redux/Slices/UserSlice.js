// dependencies
import { createSlice } from '@reduxjs/toolkit';
import { registerUser, logoutUser, loginUser, fetchProfile, saveUserProfile } from '../Actions/UserActions';

// initial state
const initialState = {
    user: {},
    error: null,
    userProfile: {}, 
    loading: false
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(registerUser.pending, (state, action) => {
            state.loading = true;           
        }).addCase(registerUser.rejected, (state, action) => {
            state.error = action.payload;
            state.loading = false;
        }).addCase(registerUser.fulfilled, (state, action) => {
            const {data} = action.payload.data;
            state.user = data;
            state.loading = false;
        }).addCase(logoutUser.fulfilled, (state) => {
            state.user = {};
            state.userProfile = {}
        }).addCase(loginUser.fulfilled, (state, action) => {
            const {data} = action.payload.data;
            state.user = data;
            state.loading = false;
        }).addCase(loginUser.pending, (state) => {
            state.loading = true;           
        }).addCase(loginUser.rejected, (state, action) => {
            state.error = action.payload;
            state.loading = false;
        }).addCase(fetchProfile.pending, (state) => {
            state.loading = true;
        }).addCase(fetchProfile.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        }).addCase(fetchProfile.fulfilled, (state, action) => {
            const {data} = action.payload;
            state.userProfile = data;
            state.loading = false;
        }).addCase(saveUserProfile.pending, (state, action) => {
            state.loading = true;
        }).addCase(saveUserProfile.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload
        }).addCase(saveUserProfile.fulfilled, (state, action) => {
            const {data} = action.payload;
            state.loading = false;
            state.userProfile = data;
            console.log(data)
        })
    }
})

export default userSlice.reducer