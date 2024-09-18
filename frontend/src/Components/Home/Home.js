// files
import "./Home.css"
import NavigationLoggedIn from "../Navigation/NavigationLoggedIn";
import DrawerNavigation from "../Navigation/DrawerNavigation";
import MainContent from "../MainContent/MainContent";
// dependencies
import { useState } from "react"; 
const Home = () => {
    const [isOpenMenu, setIsOpenMenu] = useState(false); //toggles drawer navigation for small screens     
    const [openWriteEntry, setOpenWriteEntry] = useState(false);
    const [openLatestPosts, setOpenLatestPosts] = useState(false);
    const [openMyEntries, setOpenMyEntries] = useState(false);
    const [openTaggedEntries, setOpenTaggedEntries] = useState(false);
    const [openSearch, setOpenSearch] = useState(false);
    const [openFriends, setOpenFriends] = useState(false);
    const [openRequests, setOpenRequests] = useState(false);
    const [openInvites, setOpenInvites] = useState(false);
    const [showLogo, setShowLogo] = useState(true)
    return ( 
        <>
            <main id = "main" className = "w-full min-h-screen overflow-y-hidden">
                <NavigationLoggedIn setIsOpenMenu={setIsOpenMenu} />
                <div className = "flex">
                    <DrawerNavigation isOpenMenu={isOpenMenu} setIsOpenMenu={setIsOpenMenu}
                    setOpenFriends = {setOpenFriends}
                    setOpenInvites = {setOpenInvites}
                    setOpenRequests = {setOpenRequests}
                    setOpenTaggedEntries = {setOpenTaggedEntries}
                    setOpenSearch = {setOpenSearch}
                    setOpenWriteEntry = {setOpenWriteEntry}
                    setOpenLatestPosts = {setOpenLatestPosts}
                    setOpenMyEntries = {setOpenMyEntries}
                    setShowLogo = {setShowLogo}
                    />
                    <MainContent 
                    openWriteEntry={openWriteEntry}
                    openLatestPosts={openLatestPosts}
                    openMyEntries={openMyEntries}
                    openTaggedEntries={openTaggedEntries}
                    openSearch={openSearch}
                    openFriends={openFriends}
                    openRequests={openRequests}
                    openInvites={openInvites}
                    showLogo = {showLogo}
                    />
                </div>
            </main>
        </>
    )
}
export default Home;