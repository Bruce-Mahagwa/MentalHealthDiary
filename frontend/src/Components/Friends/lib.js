// actions
import { getMyFriends, searchForUsers } from "../../Redux/Actions/FriendActions"
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
        console.log(name)
        dispatch(searchForUsers({"name": name}));
    }
    catch(e) {
        setLocalError("There had been a local error. Please reload the page.")
    }
}