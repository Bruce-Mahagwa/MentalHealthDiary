// dependencies
import { Modal, Button } from "flowbite-react";
import TagFriendRow from "./TagFriendRow";
const TagFriend = () => {
    return (
        <div>
            <Modal>
                <Modal.Header>
                    <h5>Tag Friends who can view this entry</h5>
                </Modal.Header>
                <Modal.Body>
                    <TagFriendRow />
                    <TagFriendRow />
                    <TagFriendRow />
                    <TagFriendRow />
                    <TagFriendRow />
                </Modal.Body>
                <Modal.Footer>
                    <Button color="success">Done</Button>;
                </Modal.Footer>
            </Modal>
        </div>
    )
}
export default TagFriend;