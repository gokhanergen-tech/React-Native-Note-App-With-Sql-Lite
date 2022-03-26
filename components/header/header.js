import React from "react";
import { View,Text } from "react-native";
import { StyleSheet } from "react-native";

const Header = () => {
    return (
        <View style={styles.header}>
            <Text style={styles.brand}>GunceTEK</Text>
        </View>
    );
};
const styles=StyleSheet.create({
    brand:{
        color:"white",
        fontSize:25
    },
    header:{
        backgroundColor:"#0099ff",
        paddingBottom:20,
        paddingHorizontal:20,
        paddingTop:20,
    }
});

export default Header;