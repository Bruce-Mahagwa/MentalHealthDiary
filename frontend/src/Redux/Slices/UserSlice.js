// dependencies
import { createSlice } from '@reduxjs/toolkit';
import { registerUser, logoutUser, loginUser } from '../Actions/UserActions';

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
        })
    }
})

export default userSlice.reducer