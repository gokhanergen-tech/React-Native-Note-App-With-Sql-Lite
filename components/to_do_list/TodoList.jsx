import React, { useEffect } from "react";
import {View,FlatList,StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { decreaseCount, conditionalLink } from "../../store/actions/todo-list-actions/todo-list-actions";

import TodoItem from "../to_do_item/to_do_item";

const TodoList = ({getData}) => {
    const dispatch=useDispatch();
    const list=useSelector(state=>state.list);

 
    return (
   
        <View style={styles.list}>
            <FlatList style={{paddingHorizontal:20}}  numColumns={2} keyExtractor={e=>e.id} data={list} renderItem={({item})=>{
                return <TodoItem del={()=>{
                    if(list.length===1){
                        dispatch({type:conditionalLink()});
                        dispatch({type:decreaseCount()});
                    }else{
                        //Delete process
                        dispatch({type:decreaseCount()});
                        getData();
                    }
                }} indis={item.id} item={item.note}></TodoItem>;
            }}/>
        </View>
    );
};
const styles = StyleSheet.create({
    list:{
        flex:1,
        marginRight:10,
   
        marginTop:20,
        width:"100%",
    }
});
export default React.memo(TodoList);