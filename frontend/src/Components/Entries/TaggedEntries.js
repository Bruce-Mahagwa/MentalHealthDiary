// files
import SingleEntry from "./SingleEntry";
import Reader from "../Reader/Reader";
// functions
import { handleTaggedEntries } from "./lib";
// dependencies
import { useEffect, useState } from "react";
import {useDispatch, useSelector} from "react-redux"
const TaggedEntries = () => {
    const dispatch = useDispatch();
    const {entries, loading, error} = useSelector(state => state.diary.tagged_entries);
    const [localError, setLocalError] = useState("")
    useEffect(() => {
        handleTaggedEntries(dispatch, setLocalError)
    }, [])
    return (
        <>
        <div className = "flex flex-wrap gap-4 w-full justify-center">
            {entries.map((item) => {
                const {entry, createdAt} = item;
                const {userName} = item.owner
                return (
                    <SingleEntry entry = {entry} createdAt={createdAt} userName = {userName} />
                )
            })}
        </div>
        <Reader />
        </>
    )
}
export default TaggedEntries;