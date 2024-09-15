// dependencies
import { Button, Label, TextInput, Modal, Spinner } from "flowbite-react";
import { useRef, useState } from "react";
import {useSelector, useDispatch} from "react-redux";
import Alert from '@mui/material/Alert';

// functions
import { handleRegister } from "./lib";

const Register = ({openModalRegister, setOpenModalRegister}) => {
    const userNameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const [localError, setLocalError] = useState("");
    const userName = userNameRef.current?.value;
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;
    const dispatch = useDispatch();
    const user = useSelector(state => state.users);
    // state
    const {loading, error} = user;

    const handleRegisterKeyDown = (e) => {
        // when user presses the enter key
        e.preventDefault()
        if (e.key === "Enter") {
          return handleRegister();
        }
    }

    return (
        <>
            {localError && 
                <Alert severity="error">{localError}</Alert>
            }
            <Modal show={openModalRegister} onClose={() => setOpenModalRegister(false)} dismissible>
                <Modal.Header>Register</Modal.Header>  
                <Modal.Body>
                    <form className="flex max-w-md flex-col gap-4 mx-auto mt-8">
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="email" value="Your email" />
                            </div>
                            <TextInput id="email" type="email" placeholder="name@flowbite.com" required shadow 
                            helperText={
                                <>
                                Does not have to be a real email.
                                </>
                            }
                            ref = {emailRef}
                            />
                        </div>
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
                        {!loading && <Button type="submit" className = "text-black" onKeyDown={handleRegisterKeyDown} onClick = {(e) => {e.preventDefault(); handleRegister(dispatch, setLocalError, userName, email, password)}}>Register new account</Button>}
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
export default Register;