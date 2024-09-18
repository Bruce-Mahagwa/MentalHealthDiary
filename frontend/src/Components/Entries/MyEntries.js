// files
import SingleEntry from "./SingleEntry";
import Reader from "../Reader/Reader";
// functions
import { handleMyEntries } from "./lib";
// dependencies
import { useEffect, useState } from "react";
import {useDispatch, useSelector} from "react-redux"
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Button, TextInput } from 'flowbite-react';
import { FaSearch } from "react-icons/fa";
import dayjs from 'dayjs';

const MyEntries = () => {
    const dispatch = useDispatch();
    const {entries, loading, error} = useSelector(state => state.diary.my_entries);
    const [localError, setLocalError] = useState("")
    const [start, setStart] = useState(dayjs(new Date()));
    const [end, setEnd] = useState(dayjs(new Date()))
    
    return (
        <>
        <div className = "flex flex-wrap gap-4 w-full justify-center">
        <nav className = "flex gap-2 flex-wrap md:gap-4 justify-center items-center">
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
                <Button color = "success" className = "h-max" onClick = {() => handleMyEntries(dispatch, setLocalError, start, end)}>Filter Entries</Button>
            </nav>
            {entries.map((item) => {
                const {entry, createdAt} = item;
                return (
                    <SingleEntry entry = {entry} createdAt={createdAt} />
                )
            })}
        </div>
        <Reader />
        </>
    )
}
export default MyEntries;