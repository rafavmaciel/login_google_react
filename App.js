import React from "react";
//import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


import About from "./src/pages/about/index";
import Login from "./src/pages/login/Login";

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Login"
                    component={Login}
                    options={{
                        title: "Cadastrar",
                        headerStyle: {
                            backgroundColor: "#f4511e",
                        },
                    }}
                />
                <Stack.Screen
                    name="About"
                    component={About}
                    options={{
                        title: "Sobre",
                        headerStyle: {
                            backgroundColor: "#f4511e", 
                        },
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
