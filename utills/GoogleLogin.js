import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { ResponseType } from 'expo-auth-session';
import * as Google from 'expo-auth-session/providers/google';


import firebase from "firebase";
import "firebase/auth";
import { retrieveAUser, saveAUser } from '../utills/firebaseHelper';
import { SocialIcon } from 'react-native-elements';

//import * as Google from 'expo-google-app-auth';

const GoogleLogin = ({ navigation }) => {

    const [request, response, promptAsync] = Google.useIdTokenAuthRequest(
        {
          clientId: '786714062630-73u8gk5s115j9dt3jlq694ljuknpu0cr.apps.googleusercontent.com',
          },
      );
    
      React.useEffect(() => {
        if (response?.type === 'success') {
          const { id_token } = response.params;
          
          const credential = firebase.auth.GoogleAuthProvider.credential(id_token);
          firebase.auth().signInWithCredential(credential)
          .then(user => {
              console.log("successful google signin, who is user", user, user.additionalUserInfo);
              let userData = {
                provider: user.additionalUserInfo.providerId,
                displayName: user.additionalUserInfo.profile.name,
                email: user.additionalUserInfo.profile.email,
                lastLoginAt: new Date().toString(),
                uid: user.user.uid,
              
                

            }
            console.log("userdata", userData)
            saveAUser(userData);
            navigation.navigate("home");
          });
        }
      }, [response]);


    
    return (
        <View style={styles.container} >
<SocialIcon
                title='Sign In With Google'
                button
                type='google'
                onPress={() => {promptAsync();}}
                style={{borderRadius: 15, marginHorizontal: 35, width:300, height:45}}
            /> 


        </View>
    )

}





export default GoogleLogin

const styles = StyleSheet.create({
    container: {
       
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
});