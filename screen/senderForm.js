import React, { useEffect, useState } from 'react';
import {Image, StyleSheet, View, Text, ScrollView, TextInput,Button} from 'react-native';

const senderForm= ({navigation, route}) => {
    const { params } = route;

    const [user, setUser] = useState(null);
    useEffect(()=> {
        if(params){
            const {userData} = params;
            if(userData){
                setUser(userData);
            }
        }
    }, [])

    

    return (
        <ScrollView>
        <View style = {styles.container} >
           
    
{/* 1st  border */}
     <Text style= {{fontSize: 25,borderWidth:5, 
     width:150, padding: 8, borderColor:'gray'}} > LBC Form: </Text>
 
     <Text style= {{fontSize: 25, 
     width:150, padding: 8,}} > date: </Text>
    <TextInput style={styles.input} />
 {/* 2nd */}
    <Text style= {{fontSize: 25, 
     width:150, padding: 8,}} > Remitance account: </Text>
    <TextInput style={styles.input} />
 {/* 3rd */}
    <Text style= {{fontSize: 25, 
     width:150, padding: 8,}} > Amount Php: </Text>
    <TextInput keyboardType= 'numeric' style ={styles.input} />
{/* 2nd border  */}
    <Text style= {{fontSize: 25,borderWidth:5, 
     width:200, padding: 8, borderColor:'gray'}} > Additional Info: </Text>
 {/* 1st */}
<Text style= {{fontSize: 25, 
     width:150, padding: 8,}} > Name (Sender): </Text>
    <TextInput style={styles.input} />
     {/* 2nd */}
    <Text style= {{fontSize: 25, 
     width:150, padding: 8,}} > Complete address: </Text>
    <TextInput style={styles.input} />
{/* 3rd */}
    <Text style= {{fontSize: 25, 
     width:150, padding: 8,}} > Purpose of Remitance: </Text>
    <TextInput marginBottom = {40} style ={styles.input} />

     <Button style= {{marginBottom:40}}
     title = {"Submit"} onPress= {() => 
       alert("Submitted! Thankyou for supporting LBC C-O-P. We will process your form immediately. ")} 
     />
             <Text style = {{marginTop: 20}}></Text>

       <Button title = "Log Out"
onPress = {() => {
  navigation.navigate("Signin")}} />

       <Text style = {{marginTop: 100}}></Text>

   </View>

     
           
    
        </ScrollView>
    )
     }



export default senderForm;


const styles = StyleSheet.create({
container: {
    
    backgroundColor: `#fff8dc`,
    alignItems: 'center',
    justifyContent: 'center'
  },
  
input: {
width:200,
borderWidth: 1,
borderColor: 'black',
padding: 8,
margin: 13,
backgroundColor: `white`,
}
});