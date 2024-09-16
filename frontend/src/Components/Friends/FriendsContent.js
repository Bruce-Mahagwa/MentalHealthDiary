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
    const {my_friends, loading, error} = useSelector(state => state.friends)
    return (
        <div>
            {error && 
                <Alert severity="error">{error}</Alert>
            }
            {!loading && my_friends.length === 0 && 
                <Alert>You haven't made any friends yet</Alert>
            }
            {!loading && my_friends.map((friend) => {
                const {userName, highlight} = friend;
                return (
                    <SingleFriendRow userName = {userName} highlight = {highlight} isFriend={true} key = {userName} />
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