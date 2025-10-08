// actions
import { makeDiaryEntry } from "../../Redux/Actions/DiaryActions";

export const handleDiaryEntry = (setLocalError, dispatch, value, tags) => {
    try {
        if (!value) {
            setLocalError("Entry cannot be empty");
            return;            
        }
        dispatch(makeDiaryEntry({"entry": value, "tags": tags}));
    }
    catch(e) {
        setLocalError("We have encountered a local error. Please reload page.")
    }
}