import React, { useCallback} from "react";
import { StyleSheet, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { updateData } from "../../store/actions/todo-list-actions/todo-list-actions";
import Button from "../button/button";


const NoteLinks = () => {
    const count=useSelector(state=>state.count);
    const link=useSelector(state=>state.link);
    const dispatch=useDispatch();

    const setLink=useCallback((link)=>{
        dispatch({type:updateData(),payload:{
            link
        }});      
    },[]);

    const getMax=useCallback(()=>{
        if(count%5===0)
            return (parseInt(count/5));
        else{
            return (parseInt(count/5)+1);
        }
    },[count]);
  
    return (
        <View style={styles.wrappedView}>
            <Button events={{
                onPress:()=>setLink(1)
            }} boxStyle={styles.boxStyle} title={"İLK"}></Button>
            {
                count.rangeArray(count).map((value)=>{
                    if(value%5===0){
                        return (parseInt(value/5)+1);
                    }
                }).filter(val=>val!==undefined).map((gettedLink,index)=>{
                    const maxLink=getMax();
                    let min=(link-2)<=0?(1):((link+2)>maxLink?(link-(4-(getMax()-link))):link-2);
                    let max=(link-2)<=0?((5-link)+link):((link+2)>maxLink?maxLink:link+2);

                    if(gettedLink>=min && gettedLink<=max)
                        return <Button events={{
                            onPress:()=>setLink(gettedLink)
                        }} key={index} boxStyle={styles.boxStyle} title={(gettedLink)+""}></Button>;
                }).filter(value=>value!==undefined)
            }
       
            <Button events={{
                onPress:()=>{
                    setLink(getMax());
                }
            }} boxStyle={styles.boxStyle} title={"SON"}></Button>
        </View>
    );
};
const styles=StyleSheet.create({
    boxStyle:{
        backgroundColor:"black",
        padding:5
    },
    wrappedView:{
        flexDirection:"row",
        justifyContent:"center",
    }
});
export default React.memo(NoteLinks);