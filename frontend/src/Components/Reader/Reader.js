// dependencies
import { Modal } from "flowbite-react";
import { Paper } from "@mui/material";

const Reader = ({entry, time, userName, openReaderModal, setOpenReaderModal}) => {
    return (
        <Modal show = {openReaderModal} onClose={() => setOpenReaderModal(false)}>
            <Modal.Header>
                {userName}  {time}
            </Modal.Header>
            <Modal.Body>
                <Paper elevation={24} className = "w-full p-4" square = {false} >
                    {entry}
                </Paper>
            </Modal.Body>
        </Modal>
    )
}
export default Reader;