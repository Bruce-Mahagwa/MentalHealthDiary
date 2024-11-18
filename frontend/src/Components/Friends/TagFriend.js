// dependencies
import { Modal, Button, Alert } from "flowbite-react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// functions
import { getFriends } from "./lib";
import TagFriendRow from "./TagFriendRow";
import Loading from "../Loading/Loading";

const TagFriend = ({setTags, tags, openModal, setOpenModal}) => {
    const [localError, setLocalError] = useState("")  
    const dispatch = useDispatch(); 

    useEffect(() => {
        if (openModal) {
            getFriends(dispatch, setLocalError);
        }
    }, [openModal])
 
    const {friends, loading, error} = useSelector(state => state.friends.my_friends)
    return ( 
        <div>            
            <Modal show={openModal} onClose={() => setOpenModal(false)}>
                <Modal.Header>
                    <h5>Tag Friends who can view this entry</h5>                    
                </Modal.Header>
                <Modal.Body>
                    <div className="w-full text-center">
                        {!loading && friends.length === 0 && 
                            <Alert color = "success" onDismiss={() => {
                        }}>Please make more friends</Alert>
                        }
                        {localError && 
                            <Alert severity="error">{localError}</Alert>
                        }
                        {error && 
                            <Alert severity="error">{error}</Alert>
                        }
                        {loading && <Loading />}
                    </div>
                    {
                        friends.map((friend) => {
                            const {userName, _id} = friend;
                            return (
                                <TagFriendRow key = {_id} userName={userName} _id={_id} setTags = {setTags} tags = {tags} /> 
                            )
                        }) 
                    }
                </Modal.Body>
                <Modal.Footer>
                    <Button color="success" onClick = {() => setOpenModal(false)}>Done</Button>;
                </Modal.Footer>
            </Modal>
        </div>
    )
}
export default TagFriend;