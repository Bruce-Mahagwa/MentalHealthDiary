// actions
import { makeDiaryEntry } from "../../Redux/Actions/DiaryActions";

export const handleDiaryEntry = (dispatch, value, tags) => {
    try {
        dispatch(makeDiaryEntry({"entry": value, "tags": tags}));
    }
    catch(e) {

    }
}