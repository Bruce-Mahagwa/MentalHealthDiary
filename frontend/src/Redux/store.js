// dependencies
import { configureStore } from "@reduxjs/toolkit"
// reducers
import userReducer from "./Slices/UserSlice";
import diaryReducer from "./Slices/DiarySlice";
import friendsReducer from "./Slices/FriendsSlice";
// userInfo and profile
const userInfoInLocalStorage = localStorage.getItem("userInfo") ? JSON.parse(localStorage.getItem("userInfo")) : {}
const userProfileInLocalStorage = localStorage.getItem("userProfile") ? JSON.parse(localStorage.getItem("userProfile")) : {}

// initialState
const INITIAL_STATE = {
    users: {
      user: userInfoInLocalStorage,
      error: null,
      userProfile: userProfileInLocalStorage,
      loading: false
    },
    diary: {
        error: {},
        loading: false,
        new_entry: {},
        edited_entry: {},
        my_entries: {},
        tagged_entries: {},
        searched_entries: {}
    },
    friends: {
        my_friends: {friends: [], loading: "", error: ""},
        searched_users: {users: [], loading: "", error: ""},
        friend_request_status: {message: "", error: "", loading: ""},
        friend_requests: {requests: [], loading: "", error: ""},
        withdraw_request_status: {message: "", error: "", loading: ""},
        error: "",
        loading: ""        
    }
}

export default configureStore({
    reducer: {
        users: userReducer,
        friends: friendsReducer,
        diary: diaryReducer
    },
    preloadedState: INITIAL_STATE
})