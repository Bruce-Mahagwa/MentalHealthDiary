// dependencies
import { Button, Label, TextInput, Modal, Spinner } from "flowbite-react";
import {useEffect, useState } from "react";
import {useSelector, useDispatch} from "react-redux";
import Alert from '@mui/material/Alert';
// functions
import { handleFetchProfile, handleProfileUpdate } from "./lib";

const Profile = () => {
    const dispatch = useDispatch();
    const [highlight, setHighlight] = useState("")
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [localError, setLocalError] = useState("");
    
    const user = useSelector(state => state.users);
    // state
    const {userProfile, loading, error} = user;

    const updateProfile = (e) => {
        // when user presses the enter key
        e.preventDefault()
        handleProfileUpdate(dispatch, setLocalError, firstName, lastName, highlight)
    }
    useEffect(() => {
        handleFetchProfile();
    }, [])
    return ( 
        <>        
        <Modal show={false}  dismissible>
            <Modal.Header>Profile</Modal.Header>
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
                            <Label htmlFor="firstName" value="Your FirstName" />
                        </div>
                        <TextInput id="firstName" type="text" required shadow 
                        onChange = {(e) => setFirstName(e.currentTarget.value)}                        
                        value = {userProfile.firstName}
                        />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="lastName" value="Your Last Name" />
                        </div>
                        <TextInput id="lastName" type="text" required shadow
                         onChange = {(e) => setLastName(e.currentTarget.value)}                        
                        value = {userProfile.lastName}
                        />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="highlight" value="Your Highlight" />
                        </div>
                        <TextInput id="highlight" type="text" required shadow
                         onChange = {(e) => setHighlight(e.currentTarget.value)}                        
                        value = {userProfile.highlight}
                        />
                    </div>                    
                    {!loading && <Button type="submit" className = "text-black" onClick = {updateProfile}>Update</Button>}
                    {loading && <Button type="submit" disabled className = "text-black">
                        <Spinner aria-label="Spinner button example" size="sm" />
                        <span className="pl-3">Updating...</span>    
                    </Button>}
                </form>
            </Modal.Body>
        </Modal>
        </>
    )
}
export default Profile