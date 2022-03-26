import { createNote } from "../model/note";
import noteService from "../service/note-service";

class NoteController{
    async addNote(note){
        const noteObject=createNote(note);
        return await noteService.addNote(noteObject);
    }

    async getNotes(){
        return await noteService.getNotes();
    }

    async deleteNote(id){
        return await noteService.deleteNote(id);
    }

    async getBetween(start,count){
        return await noteService.getBetween(start,count);
    }

    async getCount(s){
        return await noteService.getCount();
    }
    
}

const noteController=new NoteController();

export default noteController;