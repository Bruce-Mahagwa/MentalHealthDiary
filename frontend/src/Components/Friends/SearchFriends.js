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

    return (
        <div>
            {/* start of navigation for search */}
            {<nav className = "flex gap-2 flex-wrap md:gap-4 justify-center items-center">
                <TextInput type = "text" className = "w-3/4" onChange = {(e) => setSearchQuery(e.currentTarget.value)}/> 
                <FaSearch className = "cursor-pointer" onClick={handleSearch}/>
            </nav>}
            {/* end of navigation for search */}
            {error && 
                <Alert severity="error">{error}</Alert>
            }
            {!loading && users.map((friend) => {
                const {userName, highlight} = friend;
                return (
                    <SingleFriendRow userName = {userName} highlight = {highlight} isNotFriend={true} key = {userName} />
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
export default SearchFriends;