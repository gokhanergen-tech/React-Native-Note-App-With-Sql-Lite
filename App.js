
import { StyleSheet,Text, View,} from "react-native";
import Header from "./components/header/header";
import React,{useEffect, useState} from "react";
import * as Font from "expo-font";
import Loading from "./components/loading/loading";
import Routers from "./routers/routers";
import { connect } from "./database/connection";
import { Provider } from "react-redux";
import store from "./store/store";
const loadFonts=()=>Font.loadAsync({
    "opensans-regular":require("./assets/fonts/OpenSans-Regular.ttf")
});



export default function App() {
    const [fontLoaded,setFontLoaded]=useState(false);

    useEffect(()=>{
        connect();
    },[]);

    if(fontLoaded)
        return (
            <Provider store={store}>
                <View style={styles.container}>
                    <Header></Header>
                    <Routers/>
                </View>
            </Provider>
      
        );
    else
        return (<Loading asyncFunc={loadFonts} onFinish={()=>setFontLoaded(true)} component={<Text>Font'lar yükleniyor</Text>}>

        </Loading>);
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        paddingTop:40
    }, 
    content:{
        flex:1,
        justifyContent:"space-between"
    }

});
