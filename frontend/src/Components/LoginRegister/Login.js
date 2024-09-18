// dependencies
import { Button, Label, TextInput, Modal, Spinner } from "flowbite-react";
import { useState } from "react";
import {useSelector, useDispatch} from "react-redux";
import Alert from '@mui/material/Alert';
// functions
import { handleLogin } from "./lib";

const Login = ({openModalLogin, setOpenModalLogin}) => {
    const dispatch = useDispatch();
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("");
    const [localError, setLocalError] = useState("");
    
    const user = useSelector(state => state.users);
    // state
    const {loading, error} = user;

    const handleLoginEvent = (e) => {
        // when user presses the enter key
        e.preventDefault()
        return handleLogin(dispatch, setLocalError, userName, password)
    }
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
                        <TextInput id="username" type="text" required shadow 
                        onChange = {(e) => setUserName(e.currentTarget.value)}                        
                        />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="password" value="Your password" />
                        </div>
                        <TextInput id="password" type="password" required shadow
                         onChange = {(e) => setPassword(e.currentTarget.value)}                        
                        />
                    </div>                    
                    {!loading && <Button type="submit" className = "text-black" onClick = {handleLoginEvent}>Login</Button>}
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