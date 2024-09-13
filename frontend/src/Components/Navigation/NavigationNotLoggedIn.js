// files
import { Button } from "flowbite-react";
import Login from "../LoginRegister/Login";
import Register from "../LoginRegister/Register";
// dependencies
import { useState } from "react";
const NavigationNotLoggedIn = () => {
    const [openModalLogin, setOpenModalLogin] = useState(false);
    const [openModalRegister, setOpenModalRegister] = useState(false);
    return (
        <>
            <nav className = "flex justify-end gap-4 md:gap-8 xl:gap-12 pr-6 md:pr-10 xl:pr-12 pt-8">
                <Button color= "success" onClick={() => setOpenModalLogin(true)}>Login</Button>
                <Button color = "success" onClick = {() => (setOpenModalRegister(true))}>Register</Button>
            </nav>
            <Login openModalLogin={openModalLogin} setOpenModalLogin={setOpenModalLogin}/>
            <Register openModalRegister={openModalRegister} setOpenModalRegister={setOpenModalRegister} />
        </>
    )  
}
export default NavigationNotLoggedIn;