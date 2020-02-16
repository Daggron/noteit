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
                        <i className="material-icons" onClick={()=>props.deleteNote(props.note)}>delete</i>
                    </li>
                </ul>
            </div>
        </div>
    )
}
