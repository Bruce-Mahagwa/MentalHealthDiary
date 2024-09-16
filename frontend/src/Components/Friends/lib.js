// actions
import { getMyFriends } from "../../Redux/Actions/FriendActions"
export const getFriends = (dispatch, setLocalError) => {
    try {
        dispatch(getMyFriends());
    }
    catch(e) {
        setLocalError("There had been a local error. Please reload the page.")
    }
}