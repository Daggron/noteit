import React from 'react'

export default function Notes(props) {
     

    return (
        <div>
            
            <h1>
                {
                   props.note.title
                }
            </h1>

            <br/>
            {
                props.note.body
            }
        </div>
    )
}
