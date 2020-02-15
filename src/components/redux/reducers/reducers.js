import { combineReducers } from "redux"



let initstate = localStorage.getItem('theme')|| 'whtite'

function SwitchTheme(state=initstate , action){
    switch(action.type){
        case "ToggleTheme":
            if(state==='white'){
                return 'dark'
            }else{
                return 'white'
            }
        default : return 'white'
    }
}

let notes = [
    {
        title : "Abhay",
        body : "This is a first note i have made"
    },
    {
        title : "Second Note",
        body : "This is the second note in the list"
    }
]

function NoteReducer(state = notes , action){
    switch (action.type){
        case "AddNote":
            return[
            ...state ,
            action.value
        ]
        default : return state
    }
}

const combined = combineReducers({
    SwitchTheme,
    NoteReducer
})

export default combined;