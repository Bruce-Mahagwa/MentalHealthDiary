// dependencies
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import React, { useState } from 'react';
// files
import TagFriend from '../Friends/TagFriend';
const Editor = () => {
    const [value, setValue] = useState('');
    const [tags, setTags] = useState([]);
    console.log(tags, "tags")
    return (
     <div className = "w-full sm:w-4/5 sm:mx-auto lg:w-3/5">
        <ReactQuill theme="snow" value={value} onChange={setValue}  className = "mx-4 h-80"/>
        <TagFriend tags = {tags} setTags={setTags} />
    </div>
    )
}
export default Editor;