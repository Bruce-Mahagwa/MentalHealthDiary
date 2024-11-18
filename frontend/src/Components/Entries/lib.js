// actions
import { getTaggedEntries, getLatestEntries, getEntries } from "../../Redux/Actions/DiaryActions";

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

export const handleMyEntries = (dispatch, setLocalError, start, end) => {
    try {
        dispatch(getEntries({start: start.$d, end: end.$d}))
    }
    catch(e) {
        setLocalError("We are experiencing some difficulties. Please reload the page")
    }
}