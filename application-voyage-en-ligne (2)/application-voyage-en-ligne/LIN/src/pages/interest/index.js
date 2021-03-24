import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity,Image} from 'react-native';
import {pxToDp} from "../../utils/stylesKits";
import SvgUri from "react-native-svg-uri";
import {nature,culture} from "../../resources/fonts/iconSvg";


class Index extends Component {
    
    state = {
        
        interest: "nature",
    }


    chooseInterest=(interest)=>{
        this.setState({interest});
    }
    render() {
        const {interest} = this.state;
        
        return (
            <View style={{marginTop:pxToDp(15), backgroundColor:"#fff",flex:1,padding: pxToDp(20)}}>
                <Image style={{resizeMode:'contain', width:"100%", height:pxToDp(250)}}source={require("../../resources/logo.png")}></Image>
                
                {/* /** Title */}
                <Text style={{marginTop:20, justifyContent:"center", textAlign:'center',fontSize:pxToDp(20), color:"#666", fontWeight:"bold"}}>Interest Filter</Text>
                {/* Weather */}
                <View style={{marginTop:pxToDp(20)}}>
                <View style={{justifyContent:"space-around", width: "60%",flexDirection:"row",alignSelf:"center"}}>
                    <TouchableOpacity onPress={this.chooseInterest.bind(this,"nature")} style={{alignItems:"center"}}>
                <View style={{width:pxToDp(60),height:pxToDp(60),borderRadius:pxToDp(30),
                        backgroundColor:interest==="nature"?"#87CEEB":"#eee",justifyContent:'center', alignItems:'center'}}>
                <SvgUri svgXmlData={nature} width="50" height="50" />
                </View>
                <Text style={{fontSize:pxToDp(14),marginTop:pxToDp(10),color:'#4f2f4f'}}>Nature</Text>
                </TouchableOpacity>
                
                <TouchableOpacity onPress={this.chooseInterest.bind(this,"culture")} style={{alignItems:"center"}}>
                <View style={{width:pxToDp(60),height:pxToDp(60),borderRadius:pxToDp(30),
                        backgroundColor:interest==="culture"?"#87CEEB":"#eee",justifyContent:'center', alignItems:'center'}}>
                <SvgUri svgXmlData={culture} width="50" height="50" />
                </View>
                <Text style={{fontSize:pxToDp(14),marginTop:pxToDp(10),color:'#4f2f4f'}}>Culture</Text>
                </TouchableOpacity>
                </View>
                
                </View>
                
                <View style={{marginTop:20,alignItems:'center',justifyContent:'center'}}>
                <TouchableOpacity style={styles.touchButton}
                             onPress={() => {
                                 this.props.navigation.navigate('Accueil')
                           }}>
                    <Text style={styles.touchButtonText}>Retour</Text>
                </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    touchButton: {
        height: 40,
        width: 100,
        borderRadius: 20,
        backgroundColor: '#87CEEB',
        justifyContent: 'center',
        overflow: 'hidden',
        marginTop: 20
    },
    touchButtonText: {
        color: 'white',
        textAlign: 'center',
    }
});

export default Index;