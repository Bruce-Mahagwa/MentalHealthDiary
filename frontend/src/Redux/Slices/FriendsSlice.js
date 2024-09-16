  // dependencies
import { createSlice } from '@reduxjs/toolkit';
import { getMyFriends } from '../Actions/FriendActions';

// initial state
const initialState = {
    my_friends: [],
    error: "",
    loading: ""
}

const friendsSlice = createSlice({
    name: "friends",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getMyFriends.pending, (state) => {
            state.loading = true;
        }).addCase(getMyFriends.rejected, (state,action) => {
            state.loading = false;
            state.error = action.payload;
        }).addCase(getMyFriends.fulfilled, (state, action) => {
            const {data} = action.payload;
            console.log(data)
            state.loading = false;
            state.my_friends = data.friends;
        })
    }
})

export default friendsSlice.reducer;