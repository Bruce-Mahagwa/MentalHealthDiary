// files
import "./Landing.css";
import GetStarted from "../Buttons/GetStarted";
import NavigationNotLoggedIn from "../Navigation/NavigationNotLoggedIn";
const Landing = () => {
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