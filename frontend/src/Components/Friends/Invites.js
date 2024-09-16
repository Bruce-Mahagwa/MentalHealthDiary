 // files
import SingleFriendRow from "./SingleFriendRow"
import Loading from "../Loading/Loading";
// functions
import { getMyInvitesHandler} from "./lib";
// dependencies
import {useState, useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import { Alert } from "@mui/material";

const Invites = () => { 
    const [localError, setLocalError] = useState("")
    const dispatch = useDispatch();

    useEffect(() => {
        getMyInvitesHandler(dispatch, setLocalError);
    }, [])

    const {invites, loading, error} = useSelector(state => state.friends.invites)

    return (
        <div>
            {error && 
                <Alert severity="error">{error}</Alert>
            }
            {localError && 
                <Alert severity="error">{localError}</Alert>
            }
            {!loading && invites.length === 0 && 
                <Alert>You haven't received any invites yet</Alert>
            }
            {!loading && invites.map((friend) => {
                const {userName, highlight, _id} = friend;
                return (
                    <SingleFriendRow userName = {userName} highlight = {highlight} isInvite={true} key = {userName} _id = {_id} dispatch={dispatch}/>
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
export default Invites;