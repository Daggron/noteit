import React from 'react'
import { useSelector , useDispatch } from 'react-redux';
import Notes from '../notes/Notes';
import './home.css'
import Dialouge from '../notes/Dialouge';
import AddNote from '../notes/AddNote'; 
import { DeleteNote ,  UpdatePinnedNote, UpdateNote} from '../redux/actions/actions';


export default function Archived() {
    
    let [notes , setNotes ] = React.useState([]);

    const raw = useSelector(state=>state.NoteReducer);

    const dispatch = useDispatch();

    const [open , setOpen] = React.useState(false);

    const [note , setNote] = React.useState(null);


    const handleClose = ()=>{
        setOpen(false)
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

    const updateArchived = async(e)=>{
        dispatch(UpdateNote(e))
    }

    const updatePinned = (e)=>{
        dispatch(UpdatePinnedNote(e))
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
                                <div className="singlenote" key={eachNote.id}>
                                    <Notes note={eachNote} deleteNote={deleteNote} handleNote={handleNote} setOpen={setOpen} updateArchived={updateArchived} updatePinned={updatePinned} />
                                </div>
                            )
                    })
                }
            </div>
        </div>
    )
}
