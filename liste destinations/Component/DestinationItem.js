import React from 'react'
import {StyleSheet, View, Text,Image,Button} from 'react-native'

class DestinationItem extends React.Component{
  render(){
    const destination = this.props.destination
    return(
      <View style={styles.main_container}>
        <View style={styles.zone_nom}>
          <Text style={styles.destination_name_text}>nom:{destination.nom_voyage}</Text>
        </View>

        <View>
          <Image style={styles.image_zone}/>
        </View>


        <View style={styles.description_destination}>
          <Text style={styles.destination_description_text}>NOTE: {destination.note}/5{"\n"}{destination.description}</Text>
        </View>


      </View>
    )
  }
}


const styles =StyleSheet.create({
  main_container:{
    borderRadius:20,
    borderWidth:2,
    borderColor:"white",
    height:400,
    marginBottom:20,
    backgroundColor:'white'
  },
  image_zone:{
    padding:5,
    margin:5,
    height:250,
    backgroundColor:'black'
  },
  zone_nom:{
    borderRadius:20,
    borderWidth:2,
    borderColor:"white",
    padding:5,
    backgroundColor:'#54DBC2',
  },
  location_zone:{
    backgroundColor:'yellow',
    height:40,
    margin:5
  },
  destination_name_text:{
    fontSize:27,
    fontWeight:'bold',
    color:'white',
    textAlign:'center'
  },
  button_zone:{
    marginTop:10,
    marginLeft:10,
    marginRight:10,
    marginBottom:10,
    bottom:0
  },
  description_destination:{
    height:75,
    margin:5,
    borderRadius:20,
    borderColor:"blue",

    backgroundColor:'#77B5FE'

  },
  destination_description_text:{
    padding:5,
    color:'white',
    fontSize:15,
  }
})

export default DestinationItem
