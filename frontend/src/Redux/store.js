// dependencies
import { configureStore } from "@reduxjs/toolkit"
// reducers
import userReducer from "./Slices/UserSlice";

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
    }
}

export default configureStore({
    reducer: {
        users: userReducer
    },
    preloadedState: INITIAL_STATE
})