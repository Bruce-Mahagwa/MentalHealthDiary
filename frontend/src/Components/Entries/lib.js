// actions
import { getTaggedEntries, getLatestEntries } from "../../Redux/Actions/DiaryActions";

export const handleLatestEntries = (dispatch, setLocalError) => {
    try {
        dispatch(getLatestEntries());
    }
    catch(e) {
        setLocalError("We are experiencing some difficulties. Please reload the page")
    }
}

export const handleTaggedEntries = (dispatch, setLocalError) => {
    try {
        dispatch(getTaggedEntries())
    }
    catch(e) {
        setLocalError("We are experiencing some difficulties. Please reload the page")
    }
}