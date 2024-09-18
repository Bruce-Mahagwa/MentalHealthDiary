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
        const startDay = `${start.$d.getFullYear()}-${Number(start.$d.getMonth()) + 1}-${start.$d.getDate()}`
        const endDay = `${end.$d.getFullYear()}-${Number(end.$d.getMonth()) + 1}-${end.$d.getDate()}`        
        dispatch(getEntries({start: startDay, end: endDay}))
    }
    catch(e) {
        setLocalError("We are experiencing some difficulties. Please reload the page")
    }
}