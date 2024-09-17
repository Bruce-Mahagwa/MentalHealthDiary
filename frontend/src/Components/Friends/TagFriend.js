// dependencies
import { Modal, Button, Alert, Checkbox, Label } from "flowbite-react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// functions
import { getFriends } from "./lib";
import TagFriendRow from "./TagFriendRow";
const TagFriend = ({setTags, tags}) => {
    const [localError, setLocalError] = useState("")  
    const dispatch = useDispatch(); 

    useEffect(() => {
        getFriends(dispatch, setLocalError);
    }, [])

    const {friends, loading, error} = useSelector(state => state.friends.my_friends)
    const [openModal, setOpenModal] = useState(true);

    return (
        <div>            
            <Modal show={openModal} onClose={() => setOpenModal(false)}>
                <Modal.Header>
                    <h5>Tag Friends who can view this entry</h5>
                    {!loading && friends.length === 0 && 
                    <Alert color = "success" onDismiss={() => {
                    }}>Please make more friends</Alert>
                    }
                </Modal.Header>
                <Modal.Body>
                    {
                        friends.map((friend) => {
                            const {userName, _id} = friend;
                            return (
                                <TagFriendRow userName={userName} _id={_id} setTags = {setTags} tags = {tags} />
                            )
                        })
                    }
                </Modal.Body>
                <Modal.Footer>
                    <Button color="success">Done</Button>;
                </Modal.Footer>
            </Modal>
        </div>
    )
}
export default TagFriend;