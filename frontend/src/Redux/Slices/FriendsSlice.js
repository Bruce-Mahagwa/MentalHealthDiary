  // dependencies
import { createSlice } from '@reduxjs/toolkit';
import { getMyFriends, searchForUsers } from '../Actions/FriendActions';

// initial state
const initialState = {
    my_friends: {friends: [], loading: "", error: ""},
    searched_users: {users: [], loading: "", error: ""},
    error: "",
    loading: ""
}

const friendsSlice = createSlice({
    name: "friends",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getMyFriends.pending, (state) => {
            state.my_friends.loading = true;
        }).addCase(getMyFriends.rejected, (state,action) => {
            state.my_friends.loading = false;
            state.my_friends.error = action.payload;
        }).addCase(getMyFriends.fulfilled, (state, action) => {
            const {data} = action.payload;
            state.my_friends.loading = false;
            state.my_friends.friends = data.friends;
        }).addCase(searchForUsers.pending, (state) => {
            state.searched_users.loading = true;            
        }).addCase(searchForUsers.rejected, (state, action) => {
            state.searched_users.loading = false;
            state.searched_users.error = action.payload;
        }).addCase(searchForUsers.fulfilled, (state, action) => {
            const {data} = action.payload
            console.log(data)
            state.searched_users.users = data;
            state.searched_users.loading = false;
        })
    }
})

export default friendsSlice.reducer;