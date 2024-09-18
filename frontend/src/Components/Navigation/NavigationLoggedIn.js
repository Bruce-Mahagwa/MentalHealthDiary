// files and functions
import { logout } from "./lib";
import About from "../About/About";
import Profile from "../Profile/Profile";
// dependencies
import {HiUserCircle} from "react-icons/hi";
import { FcAbout } from "react-icons/fc";
import { MdOutlineLogout } from "react-icons/md";
import { VscThreeBars } from "react-icons/vsc";
import { Button } from "flowbite-react";
import { useDispatch } from "react-redux";

const NavigationLoggedIn = ({setIsOpenMenu}) => {  
    const dispatch = useDispatch();
    return (
        <>
            <Button.Group className = "hidden sm:flex justify-end pr-4 md:pr-10 xl:pr-12 pt-4">
                <Button pill color="success" className="hover:opacity-50 justify-self-start mr-auto md:hidden" onClick={() => setIsOpenMenu(true)}>
                    <VscThreeBars className = "mr-1 h-6 w-6"/>
                </Button>
                <Button color="gray" className="hover:opacity-50">
                    <FcAbout className = "mr-1 h-6 w-6"/>
                    About
                </Button>
                <Button color="gray" className="hover:opacity-50">
                    <HiUserCircle className="mr-1 h-6 w-6" />
                    Profile
                </Button>
                <Button color="gray" onClick = {() => logout(dispatch)} className="hover:opacity-50">
                    <MdOutlineLogout className = "mr-1 h-6 w-6" />
                    Logout
                </Button>
            </Button.Group>
            {/* small screens */}
            <Button.Group className = "sm:hidden flex flex-wrap justify-end pr-2 pt-4">
                <Button pill size = "sm" color="success" className="hover:opacity-50 justify-self-start mr-auto md:hidden" onClick={() => setIsOpenMenu(true)}>
                    <VscThreeBars className = "mr-1 h-4 w-4"/>
                </Button>

                <Button color = "gray" size="sm" className="hover:opacity-50">
                    <FcAbout className = "mr-1 h-4 w-4"/>
                    About
                </Button>
                <Button color = "gray" size="sm" className="hover:opacity-50">
                    <HiUserCircle className="mr-1 h-4 w-4" />
                    Profile
                </Button>
                <Button color = "gray" size="sm" onClick = {() => logout(dispatch)} className="hover:opacity-50">
                    <MdOutlineLogout className = "mr-1 h-4 w-4" />
                    Logout
                </Button>
            </Button.Group>
            {/* gives info about the app */}
            <About />
            {/* gives info about the app */}
        </>
    )  
}
export default NavigationLoggedIn;