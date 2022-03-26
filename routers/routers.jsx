import { createNativeStackNavigator } from "@react-navigation/native-stack"; 
import React from 'react'
import { NavigationContainer } from "@react-navigation/native";
import { Entypo } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Animated, Text, View } from "react-native";
import Home from "../screens/home/home";
import TodoListScreen from "../screens/todo_list_screen/todo_list_screen";
import About from "../screens/about/about";


const Tab=createBottomTabNavigator();
const Stack=createNativeStackNavigator()

const Routers = () => {
  return (
    <NavigationContainer>
          
    <Stack.Navigator initialRouteName="Home" screenOptions={
        {
            headerStyle:{
                backgroundColor:"#00000090",
            },
            headerTintColor:"#ffffff",
            headerBackVisible:false,
            headerShadowVisible:false
        }
    }>
     <Stack.Group>
      <Stack.Screen name="Home" component={Home} options={({navigation})=>({headerRight:()=><Text onPress={()=>navigation.navigate("About")} style={{color:"white",fontSize:20}}>About</Text>})}></Stack.Screen>
      <Stack.Screen name="TodoListScreen" component={TodoListScreen} options=
         {
             ({route,navigation})=>({title:route.params?.name||"TodoListScreen",headerRight:()=><Entypo onPress={()=>navigation.goBack("Home")} style={{color:"white"}} name="back" size={24} color="black" />
            })
         }
      ></Stack.Screen>
     </Stack.Group>

     <Stack.Group screenOptions={{presentation:"modal",headerShown:false}}>
      <Stack.Screen name="About">
          {
              ()=>(
            <Tab.Navigator screenOptions={{
                tabBarActiveTintColor:"white",
                tabBarActiveBackgroundColor:"#9999ff",
                tabBarVisibilityAnimationConfig:{

                }
            }}  initialRouteName='Abb'>
              <Tab.Screen name='Abb' component={About}></Tab.Screen>
              <Tab.Screen name='Abb1' component={TodoListScreen}></Tab.Screen>
            </Tab.Navigator>)
          }
      </Stack.Screen>
     </Stack.Group>
   
    </Stack.Navigator>

  </NavigationContainer>
 
  )
}

export default Routers
