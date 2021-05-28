import 'react-native-gesture-handler';
import React from 'react';
import { Text, View, Button, StyleSheet, } from 'react-native';
import { useEffect } from 'react';
import firebase from "firebase/app";
import { firebaseConfig } from './firebase/config';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {initializeFirebase, saveAUser } from './utills/firebaseHelper';
import Signin from './screen/Signin';
import home from './screen/home';
import senderForm from './screen/senderForm'
import receiverForm from './screen/receiverForm';
import { MyRootDrawerNavigator } from './screen/slideScreen';
import firstScreen from './screen/firstScreen';

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}


const Stack = createStackNavigator();


const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
     
      <Stack.Screen
          name="firstScreen" 
          component={firstScreen}
          options={{ title: 'Welcome To LBC C-O-P!' }}
        />
        <Stack.Screen
          name="Signin" 
          component={Signin}
          options={{ title: 'Sign In' }}
        />
        <Stack.Screen
          name="home"
          component={MyRootDrawerNavigator}
          options={{ title: 'HOME PAGE' }}
        />
        <Stack.Screen
          name="senderForm"
          component={senderForm}
          options={{ title: 'Sender Form' }}
        />
        <Stack.Screen
          name="receiverForm"
          component={receiverForm}
          options={{ title: 'Receiver Form', }}
          
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
 

  

      export default function App () {
        return (< MyStack /> ); 
        }
      
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
      },
      
  input: {
    width:200,
    borderWidth: 1,
    borderColor: 'black',
    padding: 8,
    margin: 13.
  }
    });
  
      