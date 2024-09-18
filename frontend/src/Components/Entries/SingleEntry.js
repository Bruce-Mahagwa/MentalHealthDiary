// dependencies
import { Card } from "flowbite-react";
import { useState } from "react";
// files
import Reader from "../Reader/Reader";

const SingleEntry = ({entry, createdAt, userName}) => {
    const [openReaderModal, setOpenReaderModal] = useState(false);

    const date = new Date(createdAt);
    const month = date.toLocaleString('default', { month: 'long' });
    const weekday = date.toLocaleString('default', { weekday: 'long' });
    const day = date.getDate()
    const time = `${date.getFullYear()}, ${month}, ${weekday}, ${day}`
    
    return ( 
        <>
            <Card className="max-w-sm cursor-pointer" onClick = {() => setOpenReaderModal(true)}>
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {userName ? userName : ""}
                </h5>
                <h6>{time}</h6>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    {entry.substr(0, 50)}
                </p>
            </Card>
            <Reader entry = {entry} time = {time} userName = {userName} openReaderModal = {openReaderModal} setOpenReaderModal = {setOpenReaderModal} />
        </>
    )
}
export default SingleEntry;