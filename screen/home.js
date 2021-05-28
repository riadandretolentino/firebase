import React, { useEffect, useState } from 'react';
import {Image, StyleSheet, View, Text, Button, ImageBackground} from 'react-native';
import senderForm from './senderForm';
import { Avatar } from "react-native-elements";

const Home = ({navigation, route}) => {
    const {params} = route;

    const [user, setUser] = useState(null);

    useEffect(()=> {
        if(params){z
            const {userData} = params;
            if(userData){
                setUser(userData);
            }
        }
    }, [])

    return (
      <View style = {styles.container} >
        <ImageBackground style={{
        width: 380,height: 150, marginTop: 20, marginLeft:5  
      }} source= {{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRfp4QUF_O0yusjxqafDh20QUZcD6f4dfH4Q&usqp=CAU"}}/>  

        <Avatar
                    size= "large"
                  rounded
                    source={{
                        uri: user ? user.photoURL : 'https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=3935569159823412&height=100&width=100&ext=1624728840&hash=AeSzQ8upLkhUkGRMmes '                       
                    }}
                />

      <Text style= {{fontSize: 25, marginTop: 35, marginBottom: 100}} >Welcome {}!</Text>
      
      <Text style= {{fontSize: 25, marginTop:-70, marginBottom: 40 }}>Choose what you want to do </Text>
     
      <Button 
      title = "LBC SEND" 
      onPress = {() => {
        navigation.navigate("senderForm");

      } }
      />
        <Button 
      title = "LBC RECEIVE" 
      onPress = {() => {
        navigation.navigate("receiverForm");

      } }
      />
   <Text style = {{marginTop: 40}}></Text>

<Button title = "Log Out"
onPress = {() => {
  navigation.navigate("Signin")}} />


    </View> 
  )
} 



export default Home;

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor:`#b22222`
  },
  bannerContainer: {
      flex: 1,
      height: 30
  },
  banner: {
      flex: 1,
      
      height: 30
  }

})