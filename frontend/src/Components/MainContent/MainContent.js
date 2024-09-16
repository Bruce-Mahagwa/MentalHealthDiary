// files
import Editor from "../Editor/Editor";
import ContentHeader from "../Headers/ContentHeader";
import ContentFooter from "../Footer/ContentFooter";
import FriendsContent from "../Friends/FriendsContent";
import Entries from "../Entries/Entries";
import SearchFriends from "../Friends/SearchFriends";
import FriendsRequests from "../Friends/FriendRequests";
import Invites from "../Friends/Invites";
// dependencies
import { useState } from "react";
const MainContent = () => {
    
    return (
        <section className = "flex flex-col items-center max-h-screen overflow-y-scroll w-full md:w-2/3 lg:w-4/5">
            <ContentHeader />
            <div className = "mb-4 w-full">
                {/* <Editor /> */}
                <FriendsContent />
                {/* <Entries />   */}
                {/* <SearchFriends /> */}
                {/* <FriendsRequests /> */}
                {/* <Invites /> */}
            </div>
            <ContentFooter />
        </section>
    )
}
export default MainContent;