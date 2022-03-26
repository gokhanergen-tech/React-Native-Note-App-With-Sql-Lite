import React, { useRef, useState } from "react";
import Button from "../button/button";
import { StyleSheet,View,Text, TextInput, Alert,AlertOptions, Keyboard} from "react-native";
import noteController from "../../database/controller/note-controller";
import {  useDispatch, useSelector } from "react-redux";
import { updateData,increaseCount } from "../../store/actions/todo-list-actions/todo-list-actions";
const AddItem = () => {
    const list=useSelector(state=>state.list);
    const dispatch=useDispatch();
    const [text,setText]=useState("");
    const text_input=useRef(null);
    const handleAdd=async ()=>{
    
        if(text){
            const isSuccesfull=await noteController.addNote(text);
            if(isSuccesfull!==-1){
          
                if(list.length<5){
                    dispatch({type:updateData(),payload:{
                        list:[{id:isSuccesfull,note:text},...list]
                    }});
                }
                dispatch({type:increaseCount()});
                text_input.current.clear();
                Keyboard.dismiss();
            }else{
                alert("Hata oluştu!");
            }
        }
        else
            Alert.alert("Uyarı","Metin boş geçilmemeli!",[{text:"Tamam"}]);
    };

    return (
        <View style={styles.box}>
            <View style={styles.content}>
                <Button events={{
                    onPress:handleAdd
                }} title={"Click"} boxStyle={{
                    flex:1
                }} textStyle={{

                }}></Button>
                <View style={styles.box_sub}>
                    <TextInput ref={text_input}  onChangeText={val=>setText(val)} placeholder='Metni giriniz' style={styles.input}></TextInput>
                </View>
            </View>
        
        </View>
    );
};
const styles=StyleSheet.create({
    box:{
        alignSelf:"center",
        justifyContent:"flex-end",
        width:"80%",
       
    },
    box_sub:{
        width:"100%"
    },
    content:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"center",
        width:"100%"
    },
    input:{
        backgroundColor:"gray",
        padding:10,
    }
});
export default React.memo(AddItem);