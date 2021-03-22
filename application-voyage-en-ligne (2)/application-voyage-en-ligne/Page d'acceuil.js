import * as React from 'react';
import { Text, View, StyleSheet,Image,ImageBackground, Button ,TextInput,ScrollView,SectionList} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { CreateStackNavigator } from '@react-navigation/stack';
import Constants from 'expo-constants';


export default class PageAcceuil extends React.Component{
  render(){
  return (
    <View style={styles.container}>
 <Text style={styles.title}>
        Voyage en Ligne
      </Text>
      <Button title="Filtre météo"  onPress={()=>{alert("Page météo")}}/> 
           <Button title="Filtre culture" onPress={()=>{}} color="red"/>  
         <Text style={styles.paragraph}> Prendre le soleil</Text>
    <Image source={{uri: 'https://www.magazette.fr/wp-content/uploads/monde-du-voyage.jpg'}}
      style={{width: 200, height: 100}}/>
    </View>
  );
  }

const styles= StyleSheet.create(
  {
  title: {
      fontSize:40
  },

  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },

  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },

});




  