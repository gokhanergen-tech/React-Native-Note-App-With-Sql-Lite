import React,{useEffect, useState,useCallback} from "react";
import { View,StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import AddItem from "../../components/add_item/add_item";
import NoteLinks from "../../components/notes_pages_links/note_links";
import TodoList from "../../components/to_do_list/TodoList";
import noteController from "../../database/controller/note-controller";
import { updateData } from "../../store/actions/todo-list-actions/todo-list-actions";

Number.prototype.rangeArray=(val)=>{
    const start=0;
    const max=val;
    if(typeof max!=="number"){
        throw new Error("It must be number");
    }else if(max <0){
        throw new Error("It mustn't be negative");
    }else if(start>max){
        throw new Error("The start value is bigger than max value so It must be lower");
    }
    const array=[];
    for(let i=start;i<max;i++){
        array.push(i);
    }
    return array;
};
const TodoListScreen = ({navigation}) => {
  
    const dispatch=useDispatch();
    const link=useSelector(state=>state.link);
    const getData=useCallback(async ()=>{
        try{
            const result=await noteController.getBetween((link-1)*5,5);    
            if(result!==-1)
                dispatch({type:updateData(),payload:{
                    list:[...result]
                }});
        
        }catch(err){
            alert(err);
        }
    },[link]);

    const getCount=useCallback(async ()=>{
        await noteController.getCount().then((res)=>{
            dispatch({type:updateData(),payload:{
                count:res
            }});
        }).catch((err)=>{
            ToastAndroid.show(err,ToastAndroid.LONG);
        });
    },[]);
        
    useEffect(()=>{
        getCount();
    },[]);

    useEffect(()=>{
        getData();
    },[link]);


    return (
        <View style={styles.content}>
            <TodoList getData={getData}/>
            <View>
                <NoteLinks/>
                <AddItem></AddItem>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    content:{
        flex:1,
        justifyContent:"space-between"
    }
});
export default TodoListScreen;