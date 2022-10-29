import React from "react";
import { View, Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "../components/Home";
import Login from "../components/login";
import Busqueda from "../components/Busqueda";

const Stack = createNativeStackNavigator()
const Routes = () =>{
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name = 'Login'
                    component={Login}
                />
                <Stack.Screen
                    name = 'Home'
                    component={Home}
                />
                <Stack.Screen
                    name = 'Busqueda'
                    component={Busqueda}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Routes