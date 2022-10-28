import React from 'react';
import { Image, StyleSheet } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreens from './src/screen/HomeScreens';
import AboutScreen from './src/screen/AboutScreen';
import SchemeScreen from './src/screen/SettingScreen';
import Detail from './src/screen/Detail';
import Department from './src/screen/Department';
import InfoSchemeScreen from './src/screen/InfoSchemeScreen';
import EligibilityScreen from './src/screen/EligibilityScreen';
import PenetrationScreen from './src/screen/PenetrationScreen';
import MediaScreen from './src/screen/MediaScreen';
import CircularScreen from './src/screen/CircularScreen';
import FeedScreen from './src/screen/FeedScreen';
import FAQScreen from './src/screen/FAQScreen';
import EligibilityRule from './src/screen/EligibilityRule';
import HomeScreen from './src/screen/HomeScreen';
import {StatusBar} from 'expo-status-bar'



const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();



const DrawerItem =()=>{
  return(
    <Drawer.Navigator>
        <Drawer.Screen name="Home" component={BottomNav} options={{
          headerTitleAlign:"center",headerTitle:"Jansoochna",headerTintColor:"#19023e"}} />
        <Drawer.Screen name="Department" component={Department} options={{
          headerTitleAlign:"center"}} />
        <Drawer.Screen name="InformationScheme" component={InfoSchemeScreen} options={{
          headerTitleAlign:"center"}} />
        <Drawer.Screen name="Scheme" component={SchemeScreen} options={{
          headerTitleAlign:"center"}} />
        <Drawer.Screen name="Eligibility" component={EligibilityScreen} options={{
          headerTitleAlign:"center"}} />
        <Drawer.Screen name="EligibilityRule" component={EligibilityRule} options={{
          headerTitleAlign:"center"}} />
        <Drawer.Screen name="Penetration" component={PenetrationScreen} options={{
          headerTitleAlign:"center"}} />
        <Drawer.Screen name="AboutUs" component={AboutScreen} options={{
          headerTitleAlign:"center"}} />
        <Drawer.Screen name="Media" component={MediaScreen} options={{
          headerTitleAlign:"center"}} />
        <Drawer.Screen name="HelpDesk" component={Detail} options={{
          headerTitleAlign:"center"}} />
        <Drawer.Screen name="Circulars" component={CircularScreen} options={{
          headerTitleAlign:"center"}} />
        <Drawer.Screen name="FeedBack" component={FeedScreen} options={{
          headerTitleAlign:"center"}} />
        <Drawer.Screen name="FAQ" component={FAQScreen} options={{
          headerTitleAlign:"center"}} />

      </Drawer.Navigator>
  )
}

const BottomNav =()=>{
  return(
    <Tab.Navigator
      screenOptions={({route})=>({
        tabBarIcon:({focused,color,size})=>{
          let iconName;

          if(route.name==="Menu"){
            iconName=focused ? "home":"home-outline";
          }
          else if (route.name==="About") {
            iconName=focused?"reader":"reader-outline";
          }
          else if (route.name==="Scheme") {
            iconName=focused?"file-tray-full":"file-tray-full-outline";
          }
          else if (route.name==="Contact") {
            iconName=focused?"chatbox-ellipses":"chatbox-ellipses-outline";
          }
          
          
            return <Ionicons name={iconName} color={color} size={size} />
          
        },
      })}
      >
        <Tab.Screen name="Menu" component={HomeScreen} options={{
          headerTitleAlign:"center", headerTitle:"Home",headerShown:false,
        }}/>
        <Tab.Screen name="About" component={AboutScreen} options={{
          headerTitleAlign:"center", headerTitle:"About Us",headerShown:false,
        }}/>
        <Tab.Screen name="Scheme" component={SchemeScreen} options={{
          headerTitleAlign:"center", headerTitle:"Scheme",headerShown:false,
        }} />
        <Tab.Screen name="Contact" component={Detail} options={{
          headerTitleAlign:"center", headerTitle:"Help-Desk",headerShown:false,
        }}/>
     
          

      </Tab.Navigator>
  )
}

const App = () => {
  return (
<>
  <StatusBar style='auto' />

    <NavigationContainer>
     <DrawerItem/>
      
    </NavigationContainer> 
    </>
  )
  
}

export default App





