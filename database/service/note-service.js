import DB from "../connection";

const getData=()=>new Promise((resolve,reject)=>{
 
    DB.transaction((tx)=>{
        tx.executeSql("SELECT * FROM notes",null
            ,(txObj,{rows:{_array}})=>{
                resolve([..._array]);
            },
            (txObj,err)=>{
                reject(-1);
            },);
    },(err)=>{
        reject(-1);
    });
    
});

const getBetweenByCount=(start,count)=>new Promise((resolve,reject)=>{
 
    DB.transaction((tx)=>{
        tx.executeSql("SELECT * FROM notes LIMIT ?,?",[start,count]
            ,(txObj,{rows:{_array}})=>{
                resolve([..._array]);
            },
            (txObj,err)=>{
                reject(-1);
            },);
    },(err)=>{
        reject(-1);
    });
    
});

const getNoteCounts=()=>new Promise((resolve,reject)=>{
 
    DB.transaction((tx)=>{
        tx.executeSql("SELECT count(*) as count FROM notes",null
            ,(txObj,resultSet)=>{
                resolve(resultSet.rows.item(0).count);
            },
            (txObj,err)=>{
                reject(-1);
            },);
    },(err)=>{
        reject(-1);
    });
    
});

const addData=(note)=>new Promise((resolve,reject)=>{
  
    DB.transaction((transaction)=>{
  
        transaction.executeSql("INSERT INTO notes(note) VALUES (?)",[note.note]
            ,(txObj,resultSet)=>{

                resolve(resultSet.insertId);
            },(txObj,err)=>{
                reject(-1);
            });
    },(err)=>{
        reject(-1);
    });
   
});

const deleteDataById=(id)=>new Promise((resolve,reject)=>{
    DB.transaction((transaction)=>{
        transaction.executeSql("DELETE FROM notes where id=?",[id]
            ,(txObj,resultSet)=>{
                resolve(resultSet.insertId);
            },(txObj,err)=>{
                reject(-1);
            });
    },(err)=>{
        reject(-1); 
    });
   
});

class NoteService{
    async addNote(note){
        const result=await addData(note);
        return result;   
    }

    async getNotes(){
        const result=await getData();
        return result;   
    }

    async deleteNote(id){
        const result=await deleteDataById(id);
        return result; 
    }

    async getBetween(start,count){
        const result=await getBetweenByCount(start,count);
        return result; 
    }

    async getCount(){
        const result=await getNoteCounts();
        return result; 
    }
}

const noteService=new NoteService();

export default noteService;