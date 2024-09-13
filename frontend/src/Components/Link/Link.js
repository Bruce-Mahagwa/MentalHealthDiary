// dependencies
import {Link} from "react-router-dom";

const LinkItem = ({label, path}) => {
    return (
        <Link to = {path} className = "inline-block no-underline font-bold text-blue-700 text-base lg:text-lg xl:text-xl 2xl:text-2xl hover:text-blue-500">{label}</Link>
    )
}
export default LinkItem;