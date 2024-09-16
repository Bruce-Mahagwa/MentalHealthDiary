// files
import SingleFriendRow from "./SingleFriendRow"
import Loading from "../Loading/Loading";
// functions
import { getMyFriendRequestsHandler} from "./lib";
// dependencies
import {useState, useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import { Alert } from "@mui/material";

const FriendsRequests = () => { 
    const [localError, setLocalError] = useState("")
    const dispatch = useDispatch();
    useEffect(() => {
        getMyFriendRequestsHandler(dispatch, setLocalError);
    }, [])
    const {requests, loading, error} = useSelector(state => state.friends.friend_requests)

    return (
        <div>
            {error && 
                <Alert severity="error">{error}</Alert>
            }
            {localError && 
                <Alert severity="error">{localError}</Alert>
            }
            {!loading && requests.length === 0 && 
                <Alert>You haven't sent any requests yet</Alert>
            }
            {!loading && requests.map((friend) => {
                const {userName, highlight, _id} = friend;
                return (
                    <SingleFriendRow userName = {userName} highlight = {highlight} isRequest={true} key = {userName} _id = {_id} dispatch={dispatch}/>
                )
            })}
            {loading && 
            <div className = "flex justify-center items-center">
                <Loading />
            </div>
            }
        </div>
        
    )
}
export default FriendsRequests;