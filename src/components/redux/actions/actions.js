export function addNote(value){
    console.log(value)
    return{
        type : "AddNote",
        value : value
    }
}

export function ArchiveNote(value){
    return{
        type : "Archive",
        value : value
    }
}

