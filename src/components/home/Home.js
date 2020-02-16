import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Notes from '../notes/Notes'
import './home.css'
import Dialouge from '../notes/Dialouge';
import AddNote from '../notes/AddNote'; 
import {DeleteNote} from '../redux/actions/actions';

export default function Home() {
    const notes = useSelector(state=>state.NoteReducer);

    const dispatch = useDispatch();

    const [open , setOpen] = React.useState(false);

    const [note , setNote] = React.useState(null);


    const handleClose = ()=>{
        setOpen(false)
    }
    

    const handleNote = (e)=>{
        setNote(e);
    }  

    const deleteNote = async (e)=>{
        const value = await notes.filter(eachNote=>{
            if(e === eachNote){
                console.log(e);
                return false
            }
            return true
        })
        dispatch(DeleteNote(value));
        console.log(value)
    }

    if(notes.length===0){
        return(
            <div>
                <AddNote />
                <h1>
                    Please Add some notes 
                </h1>
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
                        if(eachNote.isArchived){
                           return <React.Fragment key={eachNote.title+eachNote.body}></React.Fragment> 
                        }else{
                            return(
                                // onClick={()=>{handleNote(eachNote); setOpen(true)}} 
                                    <div className="singlenote" key={eachNote.title+eachNote.body}>
                                        <Notes note={eachNote} deleteNote={deleteNote} handleNote={handleNote} setOpen={setOpen} />
                                    </div>
                            )
                        }
                    })
                }
            </div>
        </div>
    )
}
