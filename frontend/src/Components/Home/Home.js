// files
import "./Home.css"
import NavigationLoggedIn from "../Navigation/NavigationLoggedIn";
import DrawerNavigation from "../Navigation/DrawerNavigation";
import MainContent from "../MainContent/MainContent";
const Home = () => {
    return ( 
        <>
            <main id = "main" className = "w-full h-screen overflow-y-hidden">
                <NavigationLoggedIn />
                <div className = "flex">
                    <DrawerNavigation />
                    <MainContent />
                </div>
            </main>
        </>
    )
}
export default Home;