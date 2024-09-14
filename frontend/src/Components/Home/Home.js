// files
import "./Home.css"
import NavigationLoggedIn from "../Navigation/NavigationLoggedIn";
import DrawerNavigation from "../Navigation/DrawerNavigation";
import ContentHeader from "../Headers/ContentHeader";
const Home = () => {
    return (
        <main id = "main" className = "w-full min-h-screen overflow-y-auto">
            <NavigationLoggedIn />
            <DrawerNavigation />
            <ContentHeader />
        </main>
    )
}
export default Home;