// dependencies
import { Button, Spinner, Alert } from "flowbite-react";
// functions
import { sendAFriendRequest, withdrawFriendRequestHandler, acceptFriendRequestHandler, rejectFriendRequestHandler, unFriendHandler } from "./lib";
const SingleFriendRow = ({isFriend, isInvite, isRequest, isNotFriend, userName, highlight, _id, dispatch}) => {

    const handleFriendRequest = (e) => {
        e.currentTarget.innerText = "Sent"
        e.currentTarget.disabled=true;
        sendAFriendRequest(dispatch, _id)
    }

    const withdrawRequest = (e) => {
        e.currentTarget.innerText = "Withdrawn"
        e.currentTarget.disabled=true;
        withdrawFriendRequestHandler(dispatch, _id);
    }

    const acceptFriendRequest = (e) => {
        const reject_btn = e.currentTarget.nextElementSibling;
        reject_btn.style.display = "none";
        e.currentTarget.innerText = "Accepted"
        e.currentTarget.disabled=true;
        acceptFriendRequestHandler(dispatch, _id)
    }

    const rejectFriendRequest = (e) => {    
        const accept_btn = e.currentTarget.previousElementSibling;
        accept_btn.style.display = "none"
        e.currentTarget.innerText = "Rejected"
        e.currentTarget.disabled=true;
        rejectFriendRequestHandler(dispatch, _id)
    }
    
    const unFriend = (e) => {
        e.currentTarget.innerText = "Unfriended"
        e.currentTarget.disabled=true;
        unFriendHandler(dispatch, _id)
    }
    return (  
        <div className = "flex justify-between flex-wrap w-full border-gray-400 border-1 align-middle p-2 sm:p-4 lg:w-3/4 lg:mx-auto xl:w-1/2">
            <p className = "font-bold">{userName}</p>
            <p>{highlight}</p>
            {isRequest && <Button color = "dark" className = "px-4" onClick={withdrawRequest}>Withdraw</Button>}
            {isFriend && <Button color = "warning" onClick={unFriend}>Unfriend</Button>}
            {isInvite && <Button color = "purple" onClick = {acceptFriendRequest} id = "accept">Accept</Button>}
            {isInvite && <Button color = "purple" onClick = {rejectFriendRequest} id = "reject">Reject</Button>}

            {/* is not your friend yet */}
            {isNotFriend && <Button color = "purple" className = "px-4"onClick = {handleFriendRequest}>Add Friend</Button>} 
             </div>
    )
}
export default SingleFriendRow;