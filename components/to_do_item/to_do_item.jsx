import React from "react";
import { StyleSheet,View,Text, Alert, ToastAndroid, Animated} from "react-native";
import { AntDesign } from "@expo/vector-icons";

import noteController from "../../database/controller/note-controller";
const TodoItem = ({item,indis,del}) => {
  
    const handleDeleteNote=async ()=>{
        const result=await noteController.deleteNote(indis);
        if(result!==-1){
            del();
            //Callback after deleting from database
            ToastAndroid.show("Silme işlemi başarılı",ToastAndroid.SHORT);
        }else{
            ToastAndroid.show("Silme işlemi sırasında bir hata oluştu",ToastAndroid.SHORT);
        }
    };

    return (
        <Animated.View style={styles.item_box} >
            <Text style={styles.text}>{item}</Text>
            <AntDesign onPress={handleDeleteNote} name="delete" size={24} color="black" />
        </Animated.View>
    );
};
const styles=StyleSheet.create({
    item_box:{
    
        alignItems:"center",
        borderColor:"black",
        borderRadius:30,
        borderStyle:"solid",
        borderWidth:2,
        display:"flex",
        flexDirection:"row",
        height:100,
        justifyContent:"space-between",
        margin:"5%",
        overflow:"hidden",
        paddingHorizontal:10,
        width:"40%"
   
    },
    text:{
        fontFamily:"opensans-regular",
        width:"80%"
    }
});
export default TodoItem;