// files
import SingleEntry from "./SingleEntry";
import Reader from "../Reader/Reader";
const Entries = () => {
    return (
        <>
        <div className = "flex flex-wrap gap-4 w-full justify-center">
            <SingleEntry />
            <SingleEntry />
            <SingleEntry />
        </div>
        <Reader />
        </>
    )
}
export default Entries;