import * as SQLite from "expo-sqlite";
import { ToastAndroid } from "react-native";

const DB=SQLite.openDatabase("db.user-database");

export function connect(){
    try{
        DB.transaction((tx)=>{
            tx.executeSql("CREATE TABLE IF NOT EXISTS notes(id INTEGER PRIMARY KEY AUTOINCREMENT, note TEXT NOT NULL);");
        },(err)=>{
            alert(err);
        },()=>{
            ToastAndroid.show("Bağlantı başarılı",ToastAndroid.SHORT);
        });
    }catch(err){
        alert(err);
    }
         
       
}

export default DB; 





