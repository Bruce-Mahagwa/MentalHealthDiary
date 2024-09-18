// files
import "./Home.css"
import NavigationLoggedIn from "../Navigation/NavigationLoggedIn";
import DrawerNavigation from "../Navigation/DrawerNavigation";
import MainContent from "../MainContent/MainContent";
// dependencies
import { useState } from "react";
const Home = () => {
    const [isOpenMenu, setIsOpenMenu] = useState(false); //toggles drawer navigation for small screens     
    return ( 
        <>
            <main id = "main" className = "w-full min-h-screen overflow-y-hidden">
                <NavigationLoggedIn setIsOpenMenu={setIsOpenMenu} />
                <div className = "flex">
                    <DrawerNavigation isOpenMenu={isOpenMenu} setIsOpenMenu={setIsOpenMenu}/>
                    <MainContent />
                </div>
            </main>
        </>
    )
}
export default Home;