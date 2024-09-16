// files
import SingleFriendRow from "./SingleFriendRow"
import Loading from "../Loading/Loading";
// functions
import { getFriends } from "./lib";
// dependencies
import {useState, useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import { Alert } from "@mui/material";
const FriendsContent = () => { 
    const [localError, setLocalError] = useState("")
    const dispatch = useDispatch();

    useEffect(() => {
        getFriends(dispatch, setLocalError);
    }, [])
    const {friends, loading, error} = useSelector(state => state.friends.my_friends)
    return (
        <div>
            {error && 
                <Alert severity="error">{error}</Alert>
            }
            {!loading && friends.length === 0 && 
                <Alert>You haven't made any friends yet</Alert>
            }
            {!loading && friends.map((friend) => {
                const {userName, highlight, _id} = friend;
                return (
                    <SingleFriendRow userName = {userName} highlight = {highlight} isFriend={true} key = {userName} _id = {_id} dispatch = {dispatch} />
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
export default FriendsContent;