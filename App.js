import React from 'react';
//import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Task from './src/pages/task/task';

import About from './src/pages/about/index';
import Login from './src/pages/login/Login';
import NewTask from './src/pages/newTask/NewTask';
import Details from './src/pages/details/details';
import Icon from 'react-native-vector-icons/MaterialIcons'
import ProfileButton from './src/components/ProfileButton';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            title: 'Cadastrar',
            headerStyle: {
              backgroundColor: '#f4511e',
            },
          }}
        />
        <Stack.Screen
          name="About"
          component={About}
          options={{
            title: 'Sobre',
            headerStyle: {
              backgroundColor: '#f4511e',
            },
          }}
        />
        <Stack.Screen
          name="Task"
          component={Task}
          options={{
            title: 'Tarefa',
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerBackVisible:false,
            headerRight: () => ( 
                <ProfileButton/>
            )
          }}
        />
        <Stack.Screen
          name="NewTask"
          component={NewTask}
          options={{
            title: 'Nova Tarefa',
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name="Details"
          component={Details}
          options={{
            title: 'Detalhes',
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
