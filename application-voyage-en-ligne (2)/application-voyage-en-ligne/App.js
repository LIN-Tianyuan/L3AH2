import * as React from 'react';
import { Text, View, StyleSheet,Image,ImageBackground, Button ,TextInput} from 'react-native';
import Constants from 'expo-constants';
import { NavigationContainer } from '@react-navigation/native';
import { CreateStackNavigator } from '@react-navigation/stack'
import Meteo from './components/Meteo' 

export default function App({navigation}) {
  
   const pressHandler=()=>{
      navigation.navigate(Meteo)
    }

  return (
    <NavigationContainer>
    <View style={styles.container}>
      <Text style={styles.title}>
        Voyage en Ligne
      </Text>
      <Button title="Filtre météo"  onPress={()=>{pressHandler}}/> 
      
      <Button title="Filtre culture" onPress={()=>{alert("Page culture")}} color="red"/> 
      <Text style={styles.paragraph}>Prendre le soleil</Text>
      <Image source={{uri:'https://i.f1g.fr/media/madame/640x454_crop/sites/default/files/img/2017/06/zoetry-punta-cana.jpg'}} 
      style={{width:200,height:200}}/>  
    </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  title: {
      fontSize:40
  },

  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ffffff',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
