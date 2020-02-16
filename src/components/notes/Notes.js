import React from 'react'
import marked from 'marked';
import './notes.css'


export default function Notes(props) {
     
    const convertToHtml = (raw)=>{
        return {__html : raw}
    }

    

    return (
        <div className="container">
            <div className="container-body" onClick={()=>{props.handleNote(props.note); props.setOpen(true)}}>
                <h3>
                    {
                    props.note.title
                    }
                </h3>
                <br/>
                <div dangerouslySetInnerHTML={convertToHtml(marked(props.note.body))} />
            </div>
            <div className="options hide">
                <ul>
                    <li>
                        <i className="material-icons" onClick={()=>props.deleteNote(props.note.id)}>delete</i>
                    </li>
                    <li>
                        <i className="material-icons" onClick={()=>{props.updateArchived(props.note.id)}}>archive</i>
                    </li>
                    <li>
                        <i className="material-icons" onClick={()=>props.updatePinned(props.note.id)}>person_pin</i>
                    </li>
                </ul>
            </div>
        </div>
    )
}
