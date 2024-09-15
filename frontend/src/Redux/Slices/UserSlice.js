// dependencies
import { createSlice } from '@reduxjs/toolkit';
import { registerUser, logoutUser } from '../Actions/UserActions';

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
            console.log(state.error)
            state.loading = false;
        }).addCase(registerUser.fulfilled, (state, action) => {
            const {data} = action.payload.data;
            console.log(data)
            state.user = data;
            state.loading = false;
        }).addCase(logoutUser.fulfilled, (state) => {
            state.user = {};
            state.userProfile = {}
        })
    }
})

export default userSlice.reducer