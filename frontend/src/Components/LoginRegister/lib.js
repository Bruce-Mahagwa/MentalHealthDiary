// actions
import { registerUser, loginUser } from "../../Redux/Actions/UserActions"
export const handleRegister = async (dispatch, setLocalError, userName, email, password) => {
    try {
        console.log("register", userName, password)
        if (userName && password && email) {
            dispatch(registerUser({userName: userName, email: email, password: password}));
        }
        else {
            setLocalError("Please fill all inputs")
        }
    }
    catch(e) {
        setLocalError("There had been a local error. Please reload the page.")
    }
}

export const handleLogin = async (dispatch, setLocalError, userName, password) => {
    try {
        if (userName && password) {
            dispatch(loginUser({userName: userName, password: password}));
        }
        else {
            setLocalError("Please fill all inputs")
        }
    }
    catch(e) {
        setLocalError("There had been a local error. Please reload the page.")
    }
}