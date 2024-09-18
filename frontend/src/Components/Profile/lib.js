// actions
import { saveUserProfile, fetchProfile } from "../../Redux/Actions/UserActions"
export const handleProfileUpdate = (dispatch, setLocalError, firstName, lastName, highlight) => {
    try {
        dispatch(saveUserProfile(firstName, lastName, highlight))
    }
    catch(e) {
        setLocalError("We encountered an internal error. Please reload page")
    }
}

export const handleFetchProfile = (dispatch, setLocalError) => {
    try {
        dispatch(fetchProfile());
    }
    catch(e) {
        setLocalError("We encountered an internal error. Please reload page")
    }
}