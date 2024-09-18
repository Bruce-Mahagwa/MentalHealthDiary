// files
import Editor from "../Editor/Editor";
import ContentHeader from "../Headers/ContentHeader";
import ContentFooter from "../Editor/ContentFooter";
import FriendsContent from "../Friends/FriendsContent";
import Entries from "../Entries/Entries";
import SearchFriends from "../Friends/SearchFriends";
import FriendsRequests from "../Friends/FriendRequests";
import Invites from "../Friends/Invites";
import MyEntries from "../Entries/MyEntries";
import TaggedEntries from "../Entries/TaggedEntries";
// dependencies
import { useState } from "react";
const MainContent = () => {
    
    return (
        <section className = "max-h-screen overflow-y-scroll mx-auto w-full mt-4 md:mt-8 lg:w-4/5">
            <div className = "w-full mx-auto">
                {/* <Editor /> */}
                {/* <FriendsContent /> */}
                {/* <Entries />   */}
                {/* <TaggedEntries /> */}
                <MyEntries />
                {/* <SearchFriends /> */}
                {/* <FriendsRequests /> */}
                {/* <Invites /> */}
            </div>
        </section>
    )
}
export default MainContent;