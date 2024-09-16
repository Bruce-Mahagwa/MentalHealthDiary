// dependencies
import { Button } from "flowbite-react";
const SingleFriendRow = ({isFriend, isInvite, isRequest, userName, highlight}) => {
    return (  
        <div className = "flex justify-between w-full md:w-4/5 md:mx-auto lg:w-1/2 border-gray-400 border-1 align-middle p-2 sm:p-4">
            <p className = "font-bold">{userName}</p>
            <p>{highlight}</p>
            {isRequest && <Button color = "dark">Accept</Button>}  
        </div>
    )
}
export default SingleFriendRow;