// actions
import { getMyFriends, searchForUsers, sendFriendRequest, getMyFriendRequests, withdrawFriendRequest, getMyInvites, acceptFriendRequest, rejectFriendRequest } from "../../Redux/Actions/FriendActions"
export const getFriends = (dispatch, setLocalError) => {
    try {
        dispatch(getMyFriends());
    }
    catch(e) {
        setLocalError("There had been a local error. Please reload the page.")
    }
}

export const searchUsers = (dispatch, setLocalError, name) => {
    try {
        dispatch(searchForUsers({"name": name}));
    }
    catch(e) {
        setLocalError("There had been a local error. Please reload the page.")
    }
}

export const sendAFriendRequest = (dispatch, _id) => {
    try {
        dispatch(sendFriendRequest({_id: _id}));
    }
    catch(e) {
        // setLocalError("There had been a local error. Please reload the page.")
        console.log(e)
    }
}

export const getMyFriendRequestsHandler = (dispatch, setLocalError) => {
    try {  
        dispatch(getMyFriendRequests())
    }
    catch(e) {
        setLocalError("There had been a local error. Please reload the page.")
    }
}

export const withdrawFriendRequestHandler = (dispatch, _id) => {
    try {
        dispatch(withdrawFriendRequest({_id: _id}))
    }
    catch(e) {
        console.log(e);
    }
}

export const getMyInvitesHandler = (dispatch, setLocalError) => {
    try {
        dispatch(getMyInvites());
    }
    catch(e) {
        setLocalError("There had been a local error. Please reload the page.")
    }
}

export const acceptFriendRequestHandler = (dispatch, _id) => {
    try {
        dispatch(acceptFriendRequest({_id: _id}))
    }
    catch(e) {
        console.log(e)
    }
}

export const rejectFriendRequestHandler = (dispatch, _id) => {
    try {
        dispatch(rejectFriendRequest({_id:_id}))
    }
    catch(e) {
        console.log(e)
    }
}