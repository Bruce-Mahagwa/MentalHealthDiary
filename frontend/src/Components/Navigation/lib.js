// actions
import { logoutUser } from "../../Redux/Actions/UserActions"
export const logout = (dispatch) => {
    try {
        dispatch(logoutUser());
    }
    catch(e) {
     console.log(e);   
    }
}