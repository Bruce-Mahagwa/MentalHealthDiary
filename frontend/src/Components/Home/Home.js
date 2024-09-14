// files
import "./Home.css"
import NavigationLoggedIn from "../Navigation/NavigationLoggedIn";
import DrawerNavigation from "../Navigation/DrawerNavigation";
import MainContent from "../MainContent/MainContent";
const Home = () => {
    return (
        <>
            <NavigationLoggedIn />
            <main id = "main" className = "w-full  overflow-y-auto flex">
                <DrawerNavigation />
                <MainContent />
            </main>
        </>
    )
}
export default Home;