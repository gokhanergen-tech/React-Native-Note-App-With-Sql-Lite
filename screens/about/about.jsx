import React, { useCallback, useEffect, useRef, useState } from "react";
import { Animated, Button, Easing, Text, ToastAndroid, TouchableOpacity, View } from "react-native";

const About = ({navigation}) => {
    const value=useRef(new Animated.Value(0)).current;
    const rotate=useRef(new Animated.Value(0)).current;
    useEffect(()=>{
        const unsubscribe=navigation.addListener("focus",()=>{
      
        });
        return unsubscribe;
    },[navigation]);
    return (
      
        <View style={{backgroundColor:"blue",flex:1,flexDirection:"row"}}>
            <TouchableOpacity  onPress={()=>{
              
                Animated.parallel([
                    Animated.sequence([
                        Animated.timing(value,{
                            toValue:1,
                            duration:500,
                            easing:Easing.linear,
                            useNativeDriver:true,
                        
                        }),
                        Animated.timing(value,{
                            toValue:0,
                            duration:500,
                            easing:Easing.linear,
                            useNativeDriver:true,
                        
                        })
                    ])
                    ,Animated.sequence([
                        Animated.timing(rotate,{
                            toValue:0,
                            duration:800,
                            easing:Easing.linear,
                            useNativeDriver:true,
                        
                        }),
                        Animated.timing(rotate,{
                            toValue:1,
                            duration:0,
                            easing:Easing.linear,
                            useNativeDriver:true,
                        
                        })
                    ])
                  
                ])
                    .start();
          
            
           
         
        
            }}>
                <Animated.View style={{backgroundColor:"green",opacity:value.interpolate({
                    inputRange:[0,1],
                    outputRange:[1,0]
                }),alignSelf:"baseline",transform:[{
                    rotateZ:rotate.interpolate({
                        inputRange:[0,1],
                        outputRange:["0deg","360deg"]
                    })
                }],position:"relative"}}>
                    <Text style={{backgroundColor:"red"}}>aBOUT</Text>
                    <Text style={{backgroundColor:"red"}}>aBOUT</Text>
                </Animated.View>
            </TouchableOpacity>
        </View>
   
  
  
    );
};

export default About;