// files
import "./Home.css"
import NavigationLoggedIn from "../Navigation/NavigationLoggedIn";
import DrawerNavigation from "../Navigation/DrawerNavigation";

const Home = () => {
    return (
        <main id = "main" className = "w-full min-h-screen">
            {/* <NavigationLoggedIn /> */}
            <DrawerNavigation />
        </main>
    )
}
export default Home;