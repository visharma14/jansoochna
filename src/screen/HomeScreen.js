import { View, Text,StyleSheet,ScrollView,Image, Button,TouchableOpacity, Linking } from 'react-native'
import React from 'react'

import { Ionicons } from '@expo/vector-icons';


const HomeScreen = ({navigation}) => {
  // const navigation = useNavigation()

  
    return (
      <ScrollView>
      <View style={styles.mainView}>
      
      <View style={styles.cardView}>
      <TouchableOpacity activeOpacity={1} onPress={()=>navigation.navigate("Department")}>
          <View style={styles.secView}>
            <Image
              source={require("../../assets/department.webp")}
              style={styles.imgStyle}
            />
          </View>
          <View style={styles.thirdStyle}>
          
            <Text style={styles.text1}>Department</Text>
            <Text style={styles.textStyle}>योजनाओं के विभाग </Text>
          </View>
          </TouchableOpacity>
        </View>
        
        
        <View style={styles.cardView}  >
        <TouchableOpacity  activeOpacity={1} onPress={()=>navigation.navigate("InformationScheme")} >
          <View style={styles.secView}>
            <Image
              source={require("../../assets/info.webp")}
              style={styles.imgStyle}
            />
          </View>
          <View style={styles.thirdStyle}>
          
          <Text style={styles.text1}>Info Scheme</Text>
           <Text style={styles.textStyle} >योजना की जानकारी</Text>
          </View>
          </TouchableOpacity>
        </View>


        <View style={styles.cardView}>
        <TouchableOpacity  activeOpacity={1} onPress={()=>navigation.navigate("Scheme")}>
          <View style={styles.secView}>
            <Image
              source={require("../../assets/schemenews.png")}
              style={styles.imgStyle}
            />
          </View>
          <View style={styles.thirdStyle}>
            <Text style={styles.text1}>Scheme</Text>
            <Text style={styles.textStyle}>योजनाओं के लाभार्थी</Text>
            

          </View>
          </TouchableOpacity>
        </View>
        
        <View style={styles.cardView}>
        <TouchableOpacity  activeOpacity={1} onPress={()=>navigation.navigate("Eligibility")}  >
          <View style={styles.secView}>
            <Image
              source={require("../../assets/eligibilty.webp")}
              style={styles.imgStyle}
            />
          </View>
          <View style={styles.thirdStyle}>
            <Text style={styles.text1}>Eligibility</Text>
            <Text style={styles.textStyle}>योजनाओं की पात्रता</Text>
          

          </View>
          </TouchableOpacity>
        </View>
        <View style={styles.cardView}>
          <TouchableOpacity  activeOpacity={1} onPress={()=>navigation.navigate("EligibilityRule")} >
          <View style={styles.secView}>
            <Image
              source={require("../../assets/rules.webp")}
              style={styles.imgStyle}
            />
          </View>
          <View style={styles.thirdStyle}>
            <Text style={styles.text1}>Eligibility Rule </Text>
            <Text style={styles.textStyle}>पात्रता के नियम </Text>
          </View>
          </TouchableOpacity>
        </View>

        <View style={styles.cardView}>
        <TouchableOpacity activeOpacity={1} onPress={()=>navigation.navigate("Penetration")}>
          <View style={styles.secView}>
            <Image
              source={require("../../assets/penetration.webp")}
              style={styles.imgStyle}
            />
          </View>
          <View style={styles.thirdStyle}>
            <Text style={styles.text1}>Penetration</Text>
            <Text style={styles.textStyle}>योजनाओं की पहुँच</Text>
            

          </View>
          </TouchableOpacity>
        </View>
        <View style={styles.cardView}>
        <TouchableOpacity onPress={()=>navigation.navigate("AboutUs")} activeOpacity={1}>
          <View style={styles.secView}>
            <Image
              source={require("../../assets/aboutus.webp")}
              style={styles.imgStyle}
            />
          </View>
          <View style={styles.thirdStyle}>
            <Text style={styles.text1}>About Us</Text>
            <Text style={styles.textStyle}>हमारे बारे में</Text>
           

          </View>
          </TouchableOpacity>
        </View>

        <View style={styles.cardView}>
        <TouchableOpacity activeOpacity={1} onPress={()=>navigation.navigate("Media")}  >
          <View style={styles.secView}>
            <Image
              source={require("../../assets/media.webp")}
              style={styles.imgStyle}
            />
          </View>
          <View style={styles.thirdStyle}>
            <Text style={styles.text1}>Media</Text>
            <Text style={styles.textStyle}>मीडिया</Text>
            

          </View>
          </TouchableOpacity>
        </View>
        <View style={styles.cardView}>
        <TouchableOpacity activeOpacity={1} onPress={()=>navigation.navigate("HelpDesk")} >
          <View style={styles.secView}>
            <Image
              source={require("../../assets/helpdesk.webp")}
              style={styles.imgStyle}
            />
          </View>
          <View style={styles.thirdStyle}>
            <Text style={styles.text1}>HelpDesk</Text>
            <Text style={styles.textStyle}>सहायता</Text>
            

          </View>
          </TouchableOpacity>
        </View>

        <View style={styles.cardView}>
        <TouchableOpacity onPress={()=>navigation.navigate("Circulars")} activeOpacity={1} >
          <View style={styles.secView}>
            <Image
              source={require("../../assets/circular.jpg")}
              style={styles.imgStyle}
            />
          </View>
          <View style={styles.thirdStyle}>
            <Text style={styles.text1}>Circulars</Text>
            <Text style={styles.textStyle}>सर्कुलर</Text>
            

          </View>
          </TouchableOpacity>
        </View>

        <View style={styles.cardView}>
        <TouchableOpacity activeOpacity={1} onPress={()=>navigation.navigate("FeedBack")}>
          <View style={styles.secView}>
            <Image
              source={require("../../assets/feedback.webp")}
              style={styles.imgStyle}
            />
          </View>
          <View style={styles.thirdStyle}>
            <Text style={styles.text1}>FeedBack</Text>
            <Text style={styles.textStyle}>फीडबैक </Text>
            

          </View>
          </TouchableOpacity>
        </View>
        
        <View style={styles.cardView}>
        <TouchableOpacity activeOpacity={1} onPress={()=>navigation.navigate("FAQ")}>
          <View style={styles.secView}>
            <Image
              source={require("../../assets/faq.webp")}
              style={styles.imgStyle}
            />
          </View>
          <View style={styles.thirdStyle}>
            <Text style={styles.text1}>FAQ</Text>
            <Text style={styles.textStyle}>अक्सर पूछे गए  प्रश्न
            </Text>
            

          </View>
          
        </TouchableOpacity>
        </View>
     {/* <View>
      <Image
        source={require('../../assets/information-bg.png')}
        style={{maxHeight:"50%",maxWidth:"100%"}}
        blurRadius={0.2}
      />
      <View style={{flexDirection:"row",justifyContent:"center"}}>
      <Text style={{color:"#fff", fontSize:18,fontWeight:"bold",textAlign:"center"}}> Developed by Department of Information Technology & Communication</Text>
      </View>
    <View style={{flexDirection:"row", justifyContent:"center", marginBottom:-100}}>
    <Ionicons name='logo-facebook' onPress={() => Linking.openURL("https://www.facebook.com/doitcrajasthan/")} style={{margin:5,fontSize:30,color:"#4267B2"}} />
    <Ionicons name='md-logo-twitter' onPress={() => Linking.openURL("https://twitter.com/DoITCRaj")} style={{margin:5,fontSize:30,color:"#1DA1F2"}} />
    <Ionicons name='md-logo-instagram' onPress={() => Linking.openURL("https://www.instagram.com/doitcraj/")} style={{margin:5,fontSize:30,color:"#FD1D1D"}} />

    </View>
  </View> */}
  </View>
    </ScrollView>
   );
}

export default HomeScreen

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-evenly",
    backgroundColor:"#2E4C6D",
    padding: 5,
    
  },
  cardView: {
    
    backgroundColor: "#DADDFC",
    borderRadius: 10,
    overflow: "hidden",
    marginBottom: 6,
    paddingBottom:2,
    
  },
  imgStyle: {
    width: "auto",
    height: "auto",
    aspectRatio: 1,

  },
  secView: {
    height: 135,
    width: 155,
    overflow:"hidden",
    
  },
  thirdStyle: {
    padding: 10,
    width: 155,
    backgroundColor:"#DADDFC",
  },
  textStyle: {
    color: "#630000",
    fontWeight:"bold",
    textAlign:"center",
    paddingTop:2,
    paddingBottom:2,

    
  },
  text1:{
    textAlign:"center",
    fontWeight:"bold",
    textAlign:"center",
  },
  
});
