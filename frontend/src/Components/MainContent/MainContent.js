// files
import Editor from "../Editor/Editor";
import FriendsContent from "../Friends/FriendsContent";
import Entries from "../Entries/Entries";
import SearchFriends from "../Friends/SearchFriends";
import FriendsRequests from "../Friends/FriendRequests";
import Invites from "../Friends/Invites";
import MyEntries from "../Entries/MyEntries";
import TaggedEntries from "../Entries/TaggedEntries";
import Logo from "../Logo/Logo";
// dependencies 
const MainContent = ({openWriteEntry, openLatestPosts, openMyEntries,openTaggedEntries, openSearch, openFriends, openRequests, openInvites, showLogo}) => {   
    return (  
        <section className = "max-h-screen overflow-y-scroll mx-auto w-full mt-4 md:mt-8 lg:w-4/5">
            <div className = "w-full mx-auto">
                {openWriteEntry && <Editor />}
                {openFriends && <FriendsContent />}
                {openLatestPosts && <Entries />}
                {openTaggedEntries && <TaggedEntries />}
                {openMyEntries && <MyEntries />}
                {openSearch && <SearchFriends />}
                {openRequests && <FriendsRequests />}
                {openInvites && <Invites />}
                {showLogo && <Logo />}
            </div>
        </section>
    )
}
export default MainContent;