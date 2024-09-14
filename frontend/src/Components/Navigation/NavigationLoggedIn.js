// files
import { Button, Dropdown } from "flowbite-react";
// dependencies
import {HiUserCircle} from "react-icons/hi";
import { FcAbout } from "react-icons/fc";
import { MdOutlineLogout } from "react-icons/md";
const NavigationLoggedIn = () => {
    return (
        <>
            <Button.Group className = "hidden sm:flex justify-end pr-4 md:pr-10 xl:pr-12 pt-4">
                <Button outline color="success" className="hover:opacity-0.5">
                    <FcAbout className = "mr-1 h-4 w-4"/>
                    About
                </Button>
                <Button outline color="success">
                    <HiUserCircle className="mr-1 h-4 w-4" />
                    Profile
                </Button>
                <Button outline color="success">
                    <MdOutlineLogout className = "mr-1 h-4 w-4" />
                    Logout
                </Button>
            </Button.Group>
            {/* small screens */}
            <Button.Group className = "sm:hidden flex flex-wrap justify-end pr-2 pt-4">
                <Button outline color = "success" size="sm">
                    <FcAbout className = "mr-1 h-4 w-4"/>
                    About
                </Button>
                <Button outline color = "success" size="sm">
                    <HiUserCircle className="mr-1 h-4 w-4" />
                    Profile
                </Button>
                <Button outline color = "success" size="sm">
                    <MdOutlineLogout className = "mr-1 h-4 w-4" />
                    Logout
                </Button>
            </Button.Group>
        </>
    )  
}
export default NavigationLoggedIn;