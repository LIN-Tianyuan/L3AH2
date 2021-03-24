import React from 'react'
import {StyleSheet, View, Text} from 'react-native'

class DetailDestination extends React.Component{
  render(){
    return(
      //View principale
      <View>
      //partie du nom de la destination
        <View>
          <Text>Nom de la destination</Text>
        </View>
        //partie description
        <View>
          <Text>Description</Text>
        </View>

      </View>
    )
  }
}

const styles= StyleSheet.create({

})

export default DetailDestination
