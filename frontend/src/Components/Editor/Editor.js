// dependencies
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useState } from 'react';
const Editor = () => {
    const [value, setValue] = useState('');
    return (
     <div className = "w-full sm:w-4/5 sm:mx-auto lg:w-3/5">
        <ReactQuill theme="snow" value={value} onChange={setValue}  className = "mx-4 h-80 w-full"/>
    </div>
    )
}
export default Editor;