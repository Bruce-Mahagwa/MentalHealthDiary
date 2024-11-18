// files
import SingleEntry from "./SingleEntry";
import Loading from "../Loading/Loading";

// functions
import { handleTaggedEntries } from "./lib";
import { clearTaggedEntries } from "../../Redux/Slices/DiarySlice";
// dependencies
import { useEffect, useState } from "react";
import {useDispatch, useSelector} from "react-redux"
import { Alert } from "flowbite-react";

const TaggedEntries = () => {
    const dispatch = useDispatch();
    const {entries, loading, error} = useSelector(state => state.diary.tagged_entries);
    const [localError, setLocalError] = useState("")

    useEffect(() => {
        setLocalError("");
        dispatch(clearTaggedEntries());
        handleTaggedEntries(dispatch, setLocalError)
    }, [])

    return (
        <>
        <header className = "mb-4 mx-auto w-max text-center pt-4">
            <h3>Tagged Posts</h3>
        </header>
        <div className = "flex flex-wrap gap-4 w-full justify-center pt-4 pb-8">
            {loading && <Loading />}
            {error && <Alert color="failure" className = "mt-4">
                <span className="font-medium">Tagged posts:</span> {error}
            </Alert>}
            {localError && <Alert color="failure" className = "mt-4">
                <span className="font-medium">Tagged posts</span> {localError}
            </Alert>}
            {!loading && !error && !localError && entries.length === 0 && <Alert color="success" className = "mt-4">
                <span className="font-medium">You have not been tagged in any post yet</span> 
            </Alert>}
            {!loading && entries.map((item) => {
                const {entry, createdAt, _id} = item;
                const {userName} = item.owner
                return (
                    <SingleEntry entry = {entry} createdAt={createdAt} userName = {userName} key = {_id} />
                )
            })}
        </div>
        </>
    )
}
export default TaggedEntries;