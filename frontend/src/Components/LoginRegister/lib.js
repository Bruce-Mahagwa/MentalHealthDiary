// actions
import { registerUser } from "../../Redux/Actions/UserActions"
export const handleRegister = async (dispatch, setLocalError, userName, email, password) => {
    try {
        if (userName && password && email) {
            dispatch(registerUser({userName: userName, email: email, password: password}));
        }
        else {
            return;
        }
    }
    catch(e) {
        setLocalError("There had been a local error. Please reload the page.")
    }
}