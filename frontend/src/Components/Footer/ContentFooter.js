// dependencies
import { Button } from "flowbite-react";
import { FaPlus } from "react-icons/fa";
import { useState } from "react";
const ContentFooter = ({setOpenModal, dispatch, tags, value, handleDiaryEntry}) => {
    return (
        <footer className="mt-12">
            {/* footer to be used when user is sending a post */}
            <nav className = "flex gap-4"> 
                <Button color="success" onClick = {() => handleDiaryEntry(dispatch, value, tags)}>Post</Button>
                <Button color = "gray" className = "flex items-baseline gap-2" outline onClick={() => setOpenModal(true)}>Tag
                <FaPlus className = "h-4 w-4" /></Button>
            </nav>
            {/* {/* end of footer */}
        </footer>
    )
}
export default ContentFooter;