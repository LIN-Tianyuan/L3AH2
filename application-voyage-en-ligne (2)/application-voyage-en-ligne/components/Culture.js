import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { CreateStackNavigator } from '@react-navigation/stack';
import {Text,View,StyleSheet,Image,Button} from 'react-native'

export default function Culture({navigation}){
 
  
  const pressHandler=()=>{
           navigation.navigate('Meteo');
  }
  
return(

<View>
<Text style={styles.title}> Page culture </ Text>
<Button title='Page météo'   onPress={pressHandler}/>
</View>
    )
  
}

const styles=StyleSheet.create(
  {
    title:{
      fontSize:25,
    }
  }
)

