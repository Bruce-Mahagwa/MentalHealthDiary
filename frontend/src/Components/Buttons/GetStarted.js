// dependencies
import Button from 'react-bootstrap/Button';
import { FaArrowRightLong } from "react-icons/fa6";
import { useState } from 'react';
// files
import Register from '../LoginRegister/Register';
const GetStarted = () => {
    const [openModalRegister, setOpenModalRegister] = useState(false);
    return (
        <>
            <Button onClick = {() => setOpenModalRegister(true)} variant = "danger" size = "lg" className = "w-max self-center mb-12">
                Get Started 
                <FaArrowRightLong className = "inline-block ml-2" />
            </Button>
            <Register openModalRegister={openModalRegister} setOpenModalRegister={setOpenModalRegister} />
        </>
    )
}
export default GetStarted;