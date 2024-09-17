// files
import SingleEntry from "./SingleEntry";
import Reader from "../Reader/Reader";
// functions
import { handleLatestEntries } from "./lib";
// dependencies
import { useEffect, useState } from "react";
import {useDispatch, useSelector} from "react-redux"
const Entries = () => {
    const dispatch = useDispatch();
    const {entries, loading, error} = useSelector(state => state.diary.latest_entries);
    const [localError, setLocalError] = useState("")
    useEffect(() => {
        handleLatestEntries(dispatch, setLocalError)
    }, [])
    return (
        <>
        <div className = "flex flex-wrap gap-4 w-full justify-center">
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
export default Entries;