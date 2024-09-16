// dependencies
import { Button, Label, TextInput, Modal, Spinner } from "flowbite-react";
import { useState } from "react";
import {useSelector, useDispatch} from "react-redux";
import Alert from '@mui/material/Alert';

// functions
import { handleRegister } from "./lib";

const Register = ({openModalRegister, setOpenModalRegister}) => {
    const [userName, setUserName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("");
    const [localError, setLocalError] = useState("");
    const dispatch = useDispatch();
    const user = useSelector(state => state.users);
    // state
    const {loading, error} = user;

    const handleRegisterEvent = (e) => {
        e.preventDefault();
        return handleRegister(dispatch, setLocalError, userName, email, password)
    }

    return (
        <>
            {localError && 
                <Alert severity="error">{localError}</Alert>
            }
            <Modal show={openModalRegister} onClose={() => setOpenModalRegister(false)} dismissible>
                <Modal.Header>Register</Modal.Header>  
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
                                <Label htmlFor="email" value="Your email" />
                            </div>
                            <TextInput id="email" type="email" placeholder="name@flowbite.com" required shadow 
                            helperText={
                                <>
                                Does not have to be a real email.
                                </>
                            }
                            onChange = {(e) => setEmail(e.currentTarget.value)}
                            />
                        </div>
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
                        {!loading && <Button type="submit" className = "text-black" onClick = {handleRegisterEvent}>Register new account</Button>}
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