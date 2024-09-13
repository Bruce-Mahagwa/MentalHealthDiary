// dependencies
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useState } from 'react';
const Editor = () => {
    const [value, setValue] = useState('');

    return (
     <div>
    <ReactQuill theme="snow" value={value} onChange={setValue} />
    </div>
    )
}
export default Editor;