//test de l'affichage d'une liste de destinations

import React from 'react'
import {StyleSheet,View,TextInput,Button,Text,FlatList} from 'react-native'
//test
import destinations from '../Helpers/destinationExemple.js'
import DestinationItem from './DestinationItem.js'
class Search extends React.Component {
/*
_displayDetailDestination=(idDestination)=>{
  console.log("display"+idDestination)
}*/

  render() {
    return(
      //penser à faire un style
      <View style={[styles.motherview]}>
        <FlatList
          style={[styles.flatlist]}
          data={destinations}
          keyExtractor={(item)=>item.nom_voyage.toString()}
          renderItem={({item})=> <DestinationItem destination={item}/* displayDetailDestination={this._displayDetailDestination}*//>}
        />
      </View>
      )

  }
}

const styles = StyleSheet.create({
  motherview:{
    flex:1,
    backgroundColor: '#54DBC2',

  },
  childview:{
    marginTop:20,
    backgroundColor: 'blue',
  },
  flatlist:{
    padding:10,
    marginTop:100,
    marginLeft:25,
    marginRight:25,
    marginBottom:25,
  //  backgroundColor:'red'
  }
})
export default Search
