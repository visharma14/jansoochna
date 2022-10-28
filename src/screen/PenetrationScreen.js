import {View,ActivityIndicator,BackHandler,SafeAreaView} from 'react-native'
import React, {useEffect,useState, useRef} from 'react'
import { useNavigation } from '@react-navigation/native'
import WebView from 'react-native-webview'

function PenetrationScreen(){
    const navigation = useNavigation()

    const WEBVIEW = useRef()

  const [backButtonEnabled, setBackButtonEnabled] = useState(false)

   // Webview navigation state change
function onNavigationStateChange(navState) {
  setBackButtonEnabled(navState.canGoBack)
};

useEffect(() => {
  // Handle back event
  function backHandler() {
    if (backButtonEnabled) {
      WEBVIEW.current.goBack();
      return true;
    }
  };

  // Subscribe to back state vent
  BackHandler.addEventListener("hardwareBackPress", backHandler);

  // Unsubscribe
  return () => BackHandler.removeEventListener("hardwareBackPress", backHandler);
}, [backButtonEnabled])
    
    return(
      
      <SafeAreaView style={{flex:1}}>
  <WebView
  originWhitelist={['*']}
  source={{ uri: 'https://jansoochna.rajasthan.gov.in:8080/penetrations/index?q=mobile' }}
  ref={WEBVIEW}
  useWebKit={true}
  onNavigationStateChange={onNavigationStateChange}  
  startInLoadingState
  renderLoading={() => (
    <View style={{ flex: 1, alignItems: 'center' }}>
      <ActivityIndicator size="large" color='blue'/>
    </View>
  )}

/>
</SafeAreaView>
    )
  }

  export default PenetrationScreen
