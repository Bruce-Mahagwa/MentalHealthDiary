// files
import "./Landing.css";
import LinkItem from "../Link/Link";
import GetStarted from "../Buttons/GetStarted";
const Landing = () => {
    return (
        <>
            <section className = "w-full h-screen flex flex-col justify-between" id = "landing">
                <nav className = "flex justify-end gap-4 md:gap-8 xl:gap-12 pr-6 md:pr-10 xl:pr-12">
                        <LinkItem label = {"Login"} path = {"/login"} /> 
                        <LinkItem label = {"Register"} path = {"/register"} /> 
                </nav>
                <GetStarted /> 
            </section>
            <section className = "w-full h-screen" id = "intro">

            </section>
        </>
    )
}
export default Landing;