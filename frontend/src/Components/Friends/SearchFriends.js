// files
import SingleFriendRow from "./SingleFriendRow"
import Loading from "../Loading/Loading";
// functions
import { searchUsers } from "./lib";
// dependencies
import {useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import { Alert } from "@mui/material";
import { FaSearch } from "react-icons/fa";
import { TextInput } from "flowbite-react";
const SearchFriends = () => { 

    const [localError, setLocalError] = useState("")
    const [searchQuery, setSearchQuery] = useState("");
    const dispatch = useDispatch();

    const handleSearch = (e) => {
        e.preventDefault();
        searchUsers(dispatch, setLocalError, searchQuery);
    }

    const {users, loading, error} = useSelector(state => state.friends.searched_users) 

    // state for user who are not friends
    
    const {friend_request_status} = useSelector(state => state.friends);
    const loading_request = friend_request_status.loading;
    const message_request = friend_request_status.message;
    const error_request = friend_request_status.error;
    return (
        <>
        <header className = "mb-2 mx-auto w-max text-center pt-4">
            <h3>Search Users</h3>
            <p>You can only search for users that are not your friends</p>
        </header>
        <div className = "py-8">
            {/* start of navigation for search */}
            {<nav className = "flex gap-2 flex-wrap md:gap-4 justify-center items-center mb-4 w-full">
                <TextInput type = "text" className = "w-4/5" onChange = {(e) => setSearchQuery(e.currentTarget.value)}/> 
                <FaSearch className = "cursor-pointer" onClick={handleSearch}/>
            </nav>}
            {/* end of navigation for search */}
            {error && 
                <Alert severity="error">{error}</Alert>
            }
            {localError && 
                <Alert severity="error">{localError}</Alert>
            }
            {loading && 
                <div className = "flex justify-center items-center">
                    <Loading />
                </div>}
            {!loading && users.map((friend) => {
                const {userName, highlight, _id} = friend;
                return ( 
                    <SingleFriendRow userName = {userName} highlight = {highlight} isNotFriend={true} key = {userName} _id= {_id} 
                    loading_request={loading_request}
                    message_request={message_request}
                    error_request={error_request}
                    dispatch={dispatch}
                    />
                )
            })}            
        </div>
        </>
    )
}
export default SearchFriends;