import React from 'react'
import marked from 'marked';


export default function Notes(props) {
     
    const convertToHtml = (raw)=>{
        return {__html : raw}
    }

    return (
        <div>
            <h3>
                {
                   props.note.title
                }
            </h3>
            <br/>
            <div dangerouslySetInnerHTML={convertToHtml(marked(props.note.body))} />
        </div>
    )
}
