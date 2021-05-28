import React, { useState, useEffect } from 'react';

import {Image, StyleSheet, View, Text, TextInput, TouchableOpacity, Button} from 'react-native';
import { retrieveAUser, saveAUser }  from '../utills/firebaseHelper';
import  FacebookSignIn from '../utills/FacebookSignIn';
import GoogleLogin from '../utills/GoogleLogin';


const Signin = ({navigation}) => {
    const [username, setUsername] = useState(null); 
    const [password, setPassword] = useState(null);

    const [fullname, setFullname] = useState(null);

    const handleOnPress = () => {
        
      
          
        console.log("The button signin is pressed", username);

        navigation.navigate('home', { fullname: fullname});

    } 

   
  
        const placeholder = "Enter your username"
        const placeholderPassword = "Enter your password"



  const saveInfo = async() => {
    const data = {
      fullname : fullname
    }
    saveAUser(data)
    .then(result => {
      console.log("what is the result?", result);
    }
      )
  }

  const retrieveInfo = async() => {
    const data ={
        id : "uyDlbzHONCoAXFmrOUUg",

    }

    retrieveAUser(data)
    .then(result => {
        console.log("Who is the user?", result);
        setFullname(result.fullname)
    })
}
  
const handleOnPressSave = () => {
    saveInfo();
}
const handleOnPressRetrieve = () => {
    retrieveInfo();
}

  return(
   
   <View style={styles.container}>



       <Image style={{
        width: 380,height: 150, marginTop: -10, margin:100
      }} source= {{uri: 'https://o.remove.bg/downloads/3c921fc2-2150-40fc-8d2e-8a9450998317/sdadas-removebg-preview.png'}}></Image>
     
   
<Text style= {{marginTop:-100}}></Text>

<Text style= {{fontSize:20}}>Enter you User Name :</Text>
<TextInput placeholder={placeholder} borderWidth= {2}  value={fullname} 
onChangeText={(text)=>setFullname(text)} style={styles.textInput} />
<Text style= {{fontSize:20}}>Enter you Password :</Text>
<TextInput placeholder={placeholderPassword}  borderWidth= {2} value={password} keyboardType="default" password
onChangeText={(text)=>setPassword(text)} style={styles.textInput} />

<TouchableOpacity onPress={handleOnPress} style={styles.buttom} >
    <Text style= {{fontSize:20}}>SIGN IN</Text>
</TouchableOpacity>

<TouchableOpacity onPress={handleOnPressSave} style={styles.buttom} >
    <Text style= {{fontSize:20}}>SAVE USER INFO</Text>
</TouchableOpacity>

<TouchableOpacity onPress={handleOnPressRetrieve} style={styles.buttom} >
    <Text style= {{fontSize:20}}>RETRIEVE USER INFO</Text>
</TouchableOpacity>



<FacebookSignIn style={{width:1000}} navigation= {navigation} />
<GoogleLogin navigation={navigation} />

</View>
 )
}

const styles = StyleSheet.create({
    container: {
     flex: 1,
      backgroundColor: `#faebd7`,
      alignItems: 'center',
      justifyContent: 'center',
      margin: 20
    },
    
input: {
  width:200,
  borderWidth: 1,
  borderColor: 'black',
  padding: 8,
  
}
  })

export default Signin ;

