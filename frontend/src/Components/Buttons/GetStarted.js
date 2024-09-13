// dependencies
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { FaArrowRightLong } from "react-icons/fa6";
const GetStarted = () => {
    const navigate = useNavigate();

    return (
        <Button onClick = {() => navigate("/home")} variant = "danger" size = "lg" className = "w-max self-center mb-12">
            Get Started 
            <FaArrowRightLong className = "inline-block ml-2" />
        </Button>
    )
}
export default GetStarted;