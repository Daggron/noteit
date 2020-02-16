import React from 'react'
import { useSelector } from 'react-redux';
import Notes from '../notes/Notes';
import './home.css'
import Dialouge from '../notes/Dialouge';
import AddNote from '../notes/AddNote'; 


export default function Archived() {
    
    let [notes , setNotes ] = React.useState([]);

    const raw = useSelector(state=>state.NoteReducer);

    const [open , setOpen] = React.useState(false);

    const [note , setNote] = React.useState(null);


    const handleClose = ()=>{
        setOpen(false)
    }
    

    const handleNote = (e)=>{
        setNote(e);
    }  


    React.useEffect(()=>{
        
        let data =  raw.filter(eachNote=>{
            if(eachNote.isArchived){
                return eachNote
            }
            return false
        })

        setNotes(data);
        
    },[raw])

    if(notes.length===0){
        return (
            <div>
                {
                    console.log(notes)
                }
                Hello
            </div>
        )
    }

    return (
        <div>
            <AddNote />
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
        </div>
    )
}
