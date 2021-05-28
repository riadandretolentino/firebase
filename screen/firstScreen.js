import React, { useEffect, useState } from 'react';
import { ImageBackground, StyleSheet, Text, View,Button } from 'react-native';

const firstScreen= ({navigation, route}) => {
    

    


const image = { uri: "https://i.vimeocdn.com/portrait/10396753_640x640" };

return (
  <View style={styles.container}>

    <ImageBackground source={image} style={styles.image}>

        <Text style= {{ marginTop:300}} />
    <Button 
      title = "Please Continue" 
      onPress = {() => {
        navigation.navigate("Signin")

      } }
      />
    
    </ImageBackground>
  </View>
)}



export default firstScreen;


const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
    },
    image: {
      flex: 1,
      resizeMode: 'cover',
      justifyContent: 'center',
      height: 650,
      width:390 
    },
    text: {
      color: 'white',
      fontSize: 42,
      fontWeight: 'bold',
      textAlign: 'center',
      backgroundColor: '#000000a0',
    },
  });


// import {Image, StyleSheet, View,  Button} from 'react-native';


// <View style={styles.container}>


// <Image style={{
//         width: 380,height: 150, marginTop: -10, margin:100
//       }} source= 
//       {{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/LBC_Express_logo.svg/1200px-LBC_Express_logo.svg.png'}}></Image>


// <Button title = "Please Continue"
// onPress = {() => {
//   navigation.navigate("Signin")}} />




// </View>