import React from 'react'
import {addNote} from '../redux/actions/actions';
import { useDispatch } from 'react-redux';

export default function AddNote() {
    const [title , setTitle] = React.useState(null);
    const [body , handleBody] = React.useState(null);

    const handleTitleChange = (e)=>{
        setTitle(e.target.value);
    }

    const handleBodyChange = (e)=>{
        handleBody(e.target.value);
    }

    const dispatch = useDispatch();

    const handleSave = (e)=>{
        e.preventDefault();
        dispatch(addNote({title,body}))    
    }

    return (
        <div>
            <div className="title">
                <input type="text" onChange={handleTitleChange}/>
            </div>
            <div className="body">
                <textarea onChange={handleBodyChange}></textarea>
            </div>
            <div className="buttongroup">
                <button>
                    Cancel
                </button>
                <button onClick={handleSave}>
                    Save
                </button>
            </div>
        </div>
    )
}
