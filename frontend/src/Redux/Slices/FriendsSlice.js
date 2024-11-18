  // dependencies
import { createSlice } from '@reduxjs/toolkit';
import { getMyFriends, searchForUsers, sendFriendRequest, getMyFriendRequests, withdrawFriendRequest, getMyInvites } from '../Actions/FriendActions';

// initial state
const initialState = {
    my_friends: {friends: [], loading: "", error: ""},
    searched_users: {users: [], loading: "", error: "", resultsIn: false},
    friend_request_status: {message: "", error: "", loading: ""},
    friend_requests: {requests: [], loading: "", error: ""},
    withdraw_request_status: {message: "", error: "", loading: ""},
    invites: {invites: [], loading: "", error: ""},
    error: "",
    loading: ""
}

const friendsSlice = createSlice({
    name: "friends",
    initialState,
    reducers: {
        clearSearchedUsers(state) {
            state.searched_users.users = [];
            state.searched_users.error = "";
            state.searched_users.resultsIn = false;
        }
    },
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
            state.searched_users.resultsIn = true;
        }).addCase(searchForUsers.fulfilled, (state, action) => {
            const {data} = action.payload
            state.searched_users.users = data;
            state.searched_users.loading = false;
            state.searched_users.resultsIn = true;
        }).addCase(sendFriendRequest.pending, (state) => {
            state.friend_request_status.loading = true;
        }).addCase(sendFriendRequest.rejected, (state,action) => {
            state.friend_request_status.error = action.payload;
            state.friend_request_status.loading = false;
        }).addCase(sendFriendRequest.fulfilled, (state, action) => {
            const {message} = action.payload;
            state.friend_request_status.message = message;
            state.friend_request_status.loading = false;
        }).addCase(getMyFriendRequests.pending, (state) => {
            state.friend_requests.loading = true;
        }).addCase(getMyFriendRequests.rejected, (state, action) => {
            state.friend_requests.loading = false;
            state.friend_requests.error = action.payload
        }).addCase(getMyFriendRequests.fulfilled, (state, action) => {
            const {data} = action.payload;
            state.friend_requests.loading = false;
            state.friend_requests.requests = data.friend_requests_sent;
        }).addCase(withdrawFriendRequest.pending, (state) => {
            state.withdraw_request_status.loading = true;
        }).addCase(withdrawFriendRequest.rejected, (state, action) => {
            state.withdraw_request_status.loading = false;
            state.withdraw_request_status.error = action.payload;
        }).addCase(withdrawFriendRequest.fulfilled, (state, action) => {
            const {message} = action.payload;
            state.withdraw_request_status.loading = false;
            state.withdraw_request_status.message = message;
        }).addCase(getMyInvites.pending, (state) => {
            state.invites.loading = true;
        }).addCase(getMyInvites.rejected, (state, action) => {
            state.invites.error = action.payload;
            state.invites.loading = false;
        }).addCase(getMyInvites.fulfilled, (state, action) => {
            const {data} = action.payload;
            state.invites.loading = false;
            state.invites.invites = data.friend_requests;  
        })
    }
})

export default friendsSlice.reducer;
export const {clearSearchedUsers} = friendsSlice.actions;