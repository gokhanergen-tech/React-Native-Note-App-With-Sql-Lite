import React from "react";
import { Text, View,StyleSheet } from "react-native";
import Button from "../../components/button/button";

const Home = ({navigation}) => {
  
    return (
        <View style={styles.contentWrapper}>
            <Text style={styles.text}>Hoş geldiniz</Text>
            <Button boxStyle={{
                flex:0,padding:20,
                borderRadius:20,
                marginHorizontal:20,
            }} events={{
                onPress:()=>navigation.push("TodoListScreen")
            }} title={"Başlat"}></Button> 
        </View>
    );
};
const styles=StyleSheet.create({
    contentWrapper:{
        backgroundColor:"rgb(66, 158, 245)",
        flex:1,
        justifyContent:"space-evenly"
    }
    ,
    text:{
        color:"white",
        fontFamily:"opensans-regular",
        fontSize:40,
        fontWeight:"bold",
        textAlign:"center",
        textShadowColor:"black",
        textShadowOffset:{
            width:-5,
            height:-10
        },
        textShadowRadius:8
    }
});
export default Home;