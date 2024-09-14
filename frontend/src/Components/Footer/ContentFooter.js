// dependencies
import { Button } from "flowbite-react";
import { FaPlus } from "react-icons/fa";
import { Pagination } from "flowbite-react";
import { useState } from "react";
const ContentFooter = ({make_post}) => {
    const [currentPage, setCurrentPage] = useState(1);
    return (
        <footer className="mt-20">
            {/* footer to be used when user is sending a post */}
            {/* <nav className = "flex gap-4"> 
                <Button color="success">Post</Button>
                <Button color = "gray" className = "flex items-baseline gap-2" outline>Tag
                <FaPlus className = "h-4 w-4" /></Button>
            </nav> */}
            {/* end of footer */}

            {/* footer to be used as pagination for my entries */}
            <nav className = "flex overflow-x-auto sm:justify-center">
                <Pagination totalPages={100} currentPage={currentPage}/>
            </nav>
            {/* end of footer to be used as pagination */}
        </footer>
    )
}
export default ContentFooter;