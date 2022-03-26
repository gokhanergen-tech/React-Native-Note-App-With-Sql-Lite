import React from "react";
import { StyleSheet, TouchableOpacity, View,Text } from "react-native";

const Button = ({title,boxStyle,textStyle,events}) => {
  
    return (
        <TouchableOpacity {...events}>
            <View style={StyleSheet.compose(styles.boxStyle,StyleSheet.flatten(boxStyle))}>
                <Text style={StyleSheet.compose(styles.textStyle,StyleSheet.flatten(textStyle))}>{title}</Text>
            </View>
        </TouchableOpacity>
    );
};
const styles=StyleSheet.create({
    boxStyle:{
        alignItems:"center",
        backgroundColor:"blue",
        justifyContent:"center",
        padding:10
    },
    textStyle:{
        color:"white"
    }
});
export default Button;