//to save a note
const notes = [];
function addNOte(content, id) {
    
    notes.push({content: content,
                 id: id,});
}
addNOte("My Note of Daily Purpose",1);
addNOte("Hello Everyone",2);
console.log(notes);

//to see a specific note
function getNoteFromId(id) {
    for (let i = 0; i < notes.length; i++) {
        if (notes[i].id === id) {
            console.log(notes[i]);
        }
        else if (id != Number) {
            console.log("Invalid ID");
        }
    }
    return null;
}
getNoteFromId(1);
getNoteFromId("2");

//Get all notes
function getAllNotes() {
    console.log(notes);
}
getAllNotes();

//Log out notes
function logOutNotesFormatted() {
    for (let i = 0; i < notes.length; i++){
        let logOutNotes = "The note with id: "+ notes[i].id +", has the following note text:" +notes[i].content+ '.'
        console.log(logOutNotes);
    }
    
}
logOutNotesFormatted();