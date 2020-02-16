import React from 'react'
import {addNote} from '../redux/actions/actions';
import { useDispatch } from 'react-redux';
import uuid from 'uuid';

export default function AddNote() {
    const [title , setTitle] = React.useState(null);

    const [body , handleBody] = React.useState(null);

    const [hidden , toggleHide] = React.useState(true);

    const [isArchived , setArchived ] = React.useState(false);

    const [isPinned , setPinned ] = React.useState(false);

    const handleTitleChange = (e)=>{
        setTitle(e.target.value);
    }

    const handleBodyChange = (e)=>{
        handleBody(e.target.value);
    }

    const dispatch = useDispatch();

    const handleSave = (e)=>{
        e.preventDefault();
        dispatch(addNote({title,body , isArchived , isPinned , id : uuid() }));
        toggleHide(true)    
    }



    return (
        <div className="editor">
            <div className="title">
                <input type="text" placeholder="Title" onClick={()=>toggleHide(false)} onChange={handleTitleChange}/>
            </div>
            {!hidden?(
                 <div className="body">
                    <textarea placeholder="Add Description Here..." onChange={handleBodyChange}></textarea>
                    <div className="buttongroup">
                        <button>
                             <i className="material-icons" onClick={()=>setArchived(true)}>archive</i>
                        </button>
                        <button>
                            <i className="material-icons" onClick={()=>setPinned(true)}>mark </i>
                        </button>
                        <button>
                            Cancel
                        </button>
                        <button onClick={handleSave}>
                            Save
                        </button>
                    </div>
                </div>
            ):(
                <div/>
            )}
        </div>
    )
}
