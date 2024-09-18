// files
import SingleEntry from "./SingleEntry";
import Reader from "../Reader/Reader";
import Loading from "../Loading/Loading";
// functions
import { handleLatestEntries } from "./lib";
// dependencies
import { useEffect, useState } from "react";
import {useDispatch, useSelector} from "react-redux"
import { Alert } from "flowbite-react";

const Entries = () => {
    const dispatch = useDispatch();
    const {entries, loading, error} = useSelector(state => state.diary.latest_entries);
    const [localError, setLocalError] = useState("")
    useEffect(() => {
        handleLatestEntries(dispatch, setLocalError)
    }, [])

    return (
        <>            
            <header className = "mb-4 mx-auto w-max text-center pt-4">
                <h3>Latest Posts</h3>
            </header>
            <div className = "flex flex-wrap gap-4 w-full justify-center pt-4 pb-8">            
                {loading && <Loading />}
                {error && <Alert color="failure" onDismiss={() => {}}>
                    <span className="font-medium">Latest posts:</span> {error}
                </Alert>}
                {localError && <Alert color="failure" onDismiss={() => {}}>
                    <span className="font-medium">Latest posts</span> {localError}
                </Alert>}

                {entries.map((item) => {
                    const {entry, createdAt, _id} = item;
                    return (
                        <SingleEntry entry = {entry} createdAt={createdAt} key = {_id} />
                    )
                })}
            </div>
        </>
    )
}
export default Entries;