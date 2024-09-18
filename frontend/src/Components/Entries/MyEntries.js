// files
import SingleEntry from "./SingleEntry";
import Loading from "../Loading/Loading";
// functions
import { handleMyEntries } from "./lib";
// dependencies
import { useState } from "react";
import {useDispatch, useSelector} from "react-redux"
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Button, TextInput } from 'flowbite-react';
import dayjs from 'dayjs';
import { Alert } from "flowbite-react";

const MyEntries = () => {
    const dispatch = useDispatch();
    const {entries, loading, error} = useSelector(state => state.diary.my_entries);
    const [localError, setLocalError] = useState("")
    const [start, setStart] = useState(dayjs(new Date()));
    const [end, setEnd] = useState(dayjs(new Date()))
    return (
        <>
            <header className = "mb-4 mx-auto w-full text-center pt-4">
                <h3>Latest Posts</h3>
                <nav className = "flex gap-2 flex-wrap md:gap-4 justify-center items-baseline">
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                            slotProps={{
                            textField: {
                                helperText: 'FROM',
                            },
                            }}
                            value={start}
                            onChange={(newValue) => setStart(newValue)}
                        />
                    </LocalizationProvider>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                            slotProps={{
                            textField: {
                                helperText: 'TO',
                            },
                            }}
                            value={end}
                            onChange={(newValue) => setEnd(newValue)}
                        />
                    </LocalizationProvider>        
                    <Button color = "success" disabled = {loading ? true : false} className = "h-max" onClick = {() => handleMyEntries(dispatch, setLocalError, start, end)}>Filter Entries</Button>
                </nav>
            </header>
            <div className = "flex flex-wrap gap-4 w-full justify-center pt-4 pb-8">               
                {loading && <Loading />}
                {error && <Alert color="failure" onDismiss={() => {}}>
                    <span className="font-medium">Latest posts:</span> {error}
                </Alert>}
                {localError && <Alert color="failure" onDismiss={() => {}}>
                    <span className="font-medium">Latest posts</span> {localError}
                </Alert>}                 
                {!loading && entries.length === 0 && <Alert color="success" onDismiss={() => {}}>
                    <span className="font-medium">Please select a time frame to load your posts or add posts to see them here.</span> 
                </Alert>}   
                {entries.map((item) => {
                    const {entry, createdAt, _id} = item;
                    return (  
                        <SingleEntry entry = {entry} createdAt={createdAt} key = {_id}/>
                    )
                })}
                </div>
        </>
    )
}
export default MyEntries;