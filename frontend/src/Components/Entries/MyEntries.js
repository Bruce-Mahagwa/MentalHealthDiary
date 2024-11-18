// files
import SingleEntry from "./SingleEntry";
import Loading from "../Loading/Loading";
// functions
import { handleMyEntries } from "./lib";
import { clearMyEntries } from "../../Redux/Slices/DiarySlice";
// dependencies
import { useState, useEffect } from "react";
import {useDispatch, useSelector} from "react-redux"
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Button } from 'flowbite-react';
import dayjs from 'dayjs';
import { Alert } from "flowbite-react";

const MyEntries = () => {
    const dispatch = useDispatch();
    const {entries, loading, error} = useSelector(state => state.diary.my_entries);
    const [localError, setLocalError] = useState("")
    const [start, setStart] = useState(dayjs(new Date()));
    const [end, setEnd] = useState(dayjs(new Date()))

    useEffect(() => {
        // clears localError state and my_entries global state in redux store
        setLocalError("");
        dispatch(clearMyEntries());
    }, [])
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
                {error && <Alert color="failure" className = "mt-4">
                    <span className="font-medium">MyEntries:</span> {error}
                </Alert>}
                {localError && <Alert color="failure" className = "mt-4">
                    <span className="font-medium">MyEntries:</span> {localError}
                </Alert>}                 
                {!loading && !error && !localError && entries.length === 0 && <Alert color="success" className = "mt-4">
                    <span className="font-medium">Please select a time frame to load your posts or add posts to see them here. Be sure to pick a valid timeframe</span> 
                </Alert>}   
                {!loading && entries.map((item) => {
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