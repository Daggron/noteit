import React from 'react'
import { useSelector } from 'react-redux'
import Notes from '../notes/Notes'
import './home.css'
import Dialouge from '../notes/Dialouge';

export default function Home() {
    const notes = useSelector(state=>state.NoteReducer);

    const [open , setOpen] = React.useState(false);

    const [note , setNote] = React.useState(null);

    const handleClose = ()=>{
        console.log('clicked')
        setOpen(false)
    }

    

    const handleNote = (e)=>{
        setNote(e);
    }  
    return (
        <div className="notes">
            <Dialouge open={open} handleClose={handleClose} note={note} />
            {
                notes.map(eachNote=>{
                    return(
                        <div onClick={()=>{handleNote(eachNote); setOpen(true)}} className="singlenote" key={eachNote.title+eachNote.body}>
                           <Notes note={eachNote} />
                        </div>
                    )
                })
            }
        </div>
    )
}
