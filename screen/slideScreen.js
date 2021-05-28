import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { View, Button, Text,Image } from 'react-native';

import home from '../screen/home';



// drawer navigation options
const RootDrawerNavigator = createDrawerNavigator();

function homePage({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={() => navigation.navigate('home')}
        title="Go to Logout"
      />
    </View>
  );
}


function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:`#dcdcdc`,  }}>

<Text style= {{marginBottom: 39, fontSize:20}}>

there was no pending request right now :(
 </Text>

<Text style= {{marginBottom: 39, fontSize:20}}>

DO YOU WANT TO REQUEST NOW?
 </Text>
 <Text style= {{marginBottom: 39, fontSize:23}}>

click below :

 </Text>
 <Image style={{
        width: 70,height: 100
      }} source= {{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe53QIbKf-5r3SsYwjvdjxt3gKH-idJtytFA&usqp=CAU'}}></Image>
<Text style= {{marginBottom: 39}}/>
<Button title = " sender Form request?" 
      onPress = {() => {
        navigation.navigate("senderForm");
      }
     }
       />

 <Button 
      title = " receiver Form request?" 
      onPress = {() => {
        navigation.navigate("receiverForm");

      } }
      />
      
      <Button onPress={() => navigation.goBack()} title="Go back home" />

    </View>
  ) 
}


const NavigationDrawerStructure = (props) => {
  //Structure for the navigatin Drawer
  const toggleDrawer = () => {
    //Props to open/close the drawer
    props.navigationProps.toggleDrawer();
  };

  return (
    <View style={{ flexDirection: 'row' }}>
      <TouchableOpacity onPress={toggleDrawer}>
        {/*Donute Button Image */}
        <Image
          source={{
            uri:
              'https://raw.githubusercontent.com/AboutReact/sampleresource/master/drawerWhite.png',
          }}
          style={{ width: 25, height: 25, marginLeft: 5 }}
        />
      </TouchableOpacity>
    </View>
  );
};

export const MyRootDrawerNavigator = ({ navigation }) => {

  return (

    <RootDrawerNavigator.Navigator initialRouteName="home" openByDefault
      drawerContentOptions={{
        activeTintColor: '#e91e63',
        itemStyle: { marginVertical: 5 },
      }} >
      <RootDrawerNavigator.Screen name="Home" component={home} options={{
        headerLeft: () => (
          <NavigationDrawerStructure
            navigationProps={navigation}
          />
        ),
      }} />
    
    
     
      <RootDrawerNavigator.Screen name="Pending Request" component={NotificationsScreen} />

      {/* <RootDrawerNavigator.Screen name="Notifications" component={NotificationsScreen} /> */}
    </RootDrawerNavigator.Navigator>


  );

}



// {
//   Home: {
//     screen: HomeStack,
//   },
//   About: {
//     screen: AboutStack,
//   },
// });

// export default MyRootDrawerNavigator;