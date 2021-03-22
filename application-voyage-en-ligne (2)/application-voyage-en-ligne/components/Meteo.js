import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { CreateStackNavigator } from '@react-navigation/stack';
import {Text,View,StyleSheet,Image} from 'react-native'

export default function Meteo() {

    return(
<View>
<Text style={styles.title}> Page Météo </ Text>
</View>
    )
  
}

const styles=StyleSheet.create(
  {
    title:{
      fontSize:30,
    }
  }
)

