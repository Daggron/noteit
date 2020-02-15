import React from 'react'

export default function Dialouge({open , handleClose , note}) {
    if(open){
        return(
            <div className="open">
                <div className="dialouge">
                    <h1>
                        {
                            note.title
                        }
                    </h1>
                    <button onClick={handleClose}>
                        Close
                    </button>
                </div>
            </div>
        )
    }else{
        return(
            <div style={{display : "none"}}/>
        )
    }
}
