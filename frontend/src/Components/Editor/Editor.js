// dependencies
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
// files
import TagFriend from '../Friends/TagFriend';
import ContentFooter from '../Footer/ContentFooter';
// functions
import { handleDiaryEntry } from './lib';

const Editor = () => {
    const [value, setValue] = useState('');
    const [tags, setTags] = useState([]);
    const [openModal, setOpenModal] = useState(true);
    const dispatch = useDispatch();
    
    return (
    <>
     <div className = "w-full sm:w-4/5 sm:mx-auto lg:w-3/5">
        <ReactQuill theme="snow" value={value} onChange={setValue}  className = "mx-4 h-80"/>
        <TagFriend tags = {tags} setTags={setTags} openModal={openModal} setOpenModal={setOpenModal} />
    </div>
    <ContentFooter setOpenModal={setOpenModal} handleDiaryEntry={handleDiaryEntry} dispatch = {dispatch} tags = {tags} value={value} />
    </>
    )
}
export default Editor;