// dependencies
import 'react-quill/dist/quill.snow.css';
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Button } from "flowbite-react";
import { FaPlus } from "react-icons/fa"; 
import { useSelector } from 'react-redux';
import { Alert, Spinner } from 'flowbite-react';
// files
import TagFriend from '../Friends/TagFriend';
// functions
import { handleDiaryEntry } from './lib';

const Editor = () => {
    const [value, setValue] = useState('');
    const [tags, setTags] = useState([]);
    const [localError, setLocalError] = useState("");
    const [openModal, setOpenModal] = useState(false);

    const dispatch = useDispatch(); 

    const {entry, loading, error} = useSelector(state => state.diary.new_entry);
    const today = new Date();
    const month = today.toLocaleString('default', { month: 'long' });
    const weekday = today.toLocaleString('default', { weekday: 'long' });
    const date = today.getDate()
    const day = `${today.getFullYear()}, ${month}, ${weekday}, ${date}`
    return ( 
    <>  
     <div className = "w-full lg:mx-auto lg:w-4/5 py-4">
        <header className = "mb-4 mx-auto w-max text-center pt-4">
            <h3>Write Entry</h3>
            <date>{day} </date>
        </header>

        <textarea value={value} onChange={(e) => setValue(e.currentTarget.value)} className='h-80 w-full p-4 rounded' />

        <footer className="mt-4 md:mt-8">
            <nav className = "flex gap-4 mx-auto w-max"> 
                {!loading && <Button color="success" onClick = {() => handleDiaryEntry(setLocalError, dispatch, value, tags)}>Add</Button>}
                {loading && <Button type="submit" disabled className = "text-black" color = "success">
                    <Spinner aria-label="Spinner button example" size="md" color = "success" />
                </Button>}
                <Button color = "gray" className = "flex items-baseline gap-4 hover:opacity-50" outline onClick={() => {setOpenModal(true); setTags([])}}>Tag
                    <FaPlus className = "h-4 w-4" />
                </Button>
                
            </nav>

            {/*alerts */}
            {!error && !localError && entry?.entry && <Alert color="success" onDismiss={() => {}}>
                <span className="font-medium">Entry Saved</span> Your entry has been saved
            </Alert>}
            {error && <Alert color="failure" onDismiss={() => {}}>
                <span className="font-medium">Save failed</span> {error}
            </Alert>}
            {localError && <Alert color="failure" onDismiss={() => {setLocalError("")}}>
                <span className="font-medium">Save failed</span> {localError}
            </Alert>}
            {/* alerts */}
        </footer>
        {/* modals */}
        <TagFriend tags = {tags} setTags={setTags} openModal={openModal} setOpenModal={setOpenModal} />
    </div>
    </>
    )
}
export default Editor;