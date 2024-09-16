// files
import "./Home.css"
import NavigationLoggedIn from "../Navigation/NavigationLoggedIn";
import DrawerNavigation from "../Navigation/DrawerNavigation";
import MainContent from "../MainContent/MainContent";
// dependencies
import { useState } from "react";
import { useSelector } from "react-redux";  
const Home = () => {
    const [isOpen, setIsOpen] = useState(true);
    // const user = useSelector(state => state.users);  
    // console.log(user)
    const friends = useSelector(state => state.friends);
    console.log(friends.my_friends);
     
    return ( 
        <>
            <main id = "main" className = "w-full min-h-screen overflow-y-hidden">
                <NavigationLoggedIn setIsOpen={setIsOpen} />
                <div className = "flex">
                    <DrawerNavigation isOpen={isOpen} setIsOpen={setIsOpen}/>
                    <MainContent />
                </div>
            </main>
        </>
    )
}
export default Home;