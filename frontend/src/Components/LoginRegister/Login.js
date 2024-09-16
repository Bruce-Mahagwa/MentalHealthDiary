// dependencies
import { Button, Label, TextInput, Modal, Spinner } from "flowbite-react";
import { useRef, useState } from "react";
import {useSelector, useDispatch} from "react-redux";
import Alert from '@mui/material/Alert';
// functions
import { handleLogin } from "./lib";

const Login = ({openModalLogin, setOpenModalLogin}) => {
    const dispatch = useDispatch();
    const userNameRef = useRef();
    const passwordRef = useRef();
    const [localError, setLocalError] = useState("");
    const userName = userNameRef.current?.value;
    const password = passwordRef.current?.value;

    const user = useSelector(state => state.users);
    // state
    const {loading, error} = user;

    const handleLoginKeyDown = (e) => {
        // when user presses the enter key
        e.preventDefault()
        if (e.key === "Enter") {
          return handleLogin(dispatch, setLocalError, userName, password);
        }
    }
console.log(error)
    return ( 
        <>        
        <Modal show={openModalLogin} onClose={() => setOpenModalLogin(false)} dismissible>
            <Modal.Header>Login</Modal.Header>
            <Modal.Body>
                <div>
                    {localError && 
                    <Alert severity="error">{localError}</Alert>
                    }
                    {error && 
                        <Alert severity="error">{error}</Alert>
                    }
                </div>
                <form className="flex max-w-md flex-col gap-4 mx-auto mt-8">                
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="username" value="Your userName" />
                        </div>
                        <TextInput id="username" type="text" required shadow ref = {userNameRef} />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="password" value="Your password" />
                        </div>
                        <TextInput id="password" type="password" required shadow ref = {passwordRef} />
                    </div>                    
                    {!loading && <Button type="submit" className = "text-black" onKeyDown={handleLoginKeyDown} onClick = {(e) => {e.preventDefault(); handleLogin(dispatch, setLocalError, userName, password)}}>Login</Button>}
                    {loading && <Button type="submit" disabled className = "text-black">
                        <Spinner aria-label="Spinner button example" size="sm" />
                        <span className="pl-3">Loading...</span>    
                    </Button>}
                </form>
            </Modal.Body>
        </Modal>
        </>
    )
}
export default Login;