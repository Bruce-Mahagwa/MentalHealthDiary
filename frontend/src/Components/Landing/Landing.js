// files
import "./Landing.css";
import GetStarted from "../Buttons/GetStarted";
import NavigationNotLoggedIn from "../Navigation/NavigationNotLoggedIn";
// dependencies
import { useSelector } from "react-redux";

const Landing = () => {
    // state
    const {user} = useSelector(state => state.users);
    if (user?.userName) {
        // in case the user is already logged in this block will redirect to the home page
        window.location.href = "/home"
    }
    return (
        <>
            <section className = "w-full h-screen flex flex-col justify-between" id = "landing">
                <NavigationNotLoggedIn />
                <GetStarted /> 
            </section>            
        </>
    )
}
export default Landing;