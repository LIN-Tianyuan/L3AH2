import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity,Image} from 'react-native';
import {pxToDp} from "../../utils/stylesKits";
import SvgUri from "react-native-svg-uri";
import {sunny,wind,snow,drop} from "../../res/fonts/iconSvg";


class Index extends Component {
    
    state = {
        weather: "sunny"
    }


    chooseWeather=(weather)=>{
        this.setState({weather});
    }
    render() {
        const {weather} = this.state;
        
    
        return (
            <View style={{marginTop:pxToDp(15), backgroundColor:"#fff",flex:1,padding: pxToDp(20)}}>
                <Image style={{resizeMode:'contain', width:"100%", height:pxToDp(250)}}source={require("../../res/logo.png")}></Image>
                
                {/* /** Title */}
                <Text style={{marginTop:20, justifyContent:"center", textAlign:'center',fontSize:pxToDp(20), color:"#666", fontWeight:"bold"}}>Weather Filter</Text>
                {/* Weather */}
                <View style={{marginTop:pxToDp(20)}}>
                <View style={{justifyContent:"space-around", width: "60%",flexDirection:"row",alignSelf:"center"}}>
                    <TouchableOpacity onPress={this.chooseWeather.bind(this,"sunny")} style={{alignItems:"center"}}>
                <View style={{width:pxToDp(60),height:pxToDp(60),borderRadius:pxToDp(30),
                        backgroundColor:weather==="sunny"?"#87CEEB":"#eee",justifyContent:'center', alignItems:'center'}}>
                <SvgUri svgXmlData={sunny} width="50" height="50" />
                </View>
                <Text style={{fontSize:pxToDp(14),marginTop:pxToDp(10),color:'#4f2f4f'}}>Sunny</Text>
                </TouchableOpacity>
                
                <TouchableOpacity onPress={this.chooseWeather.bind(this,"wind")} style={{alignItems:"center"}}>
                <View style={{width:pxToDp(60),height:pxToDp(60),borderRadius:pxToDp(30),
                        backgroundColor:weather==="wind"?"#87CEEB":"#eee",justifyContent:'center', alignItems:'center'}}>
                <SvgUri svgXmlData={wind} width="50" height="50" />
                </View>
                <Text style={{fontSize:pxToDp(14),marginTop:pxToDp(10),color:'#4f2f4f'}}>Wind</Text>
                </TouchableOpacity>
                </View>
                <View style={{marginTop:pxToDp(20), justifyContent:"space-around", width: "60%",flexDirection:"row",alignSelf:"center"}}>
                <TouchableOpacity onPress={this.chooseWeather.bind(this,"drop")} style={{alignItems:"center"}}>
                <View style={{width:pxToDp(60),height:pxToDp(60),borderRadius:pxToDp(30),
                        backgroundColor:weather==="drop"?"#87CEEB":"#eee",justifyContent:'center', alignItems:'center'}}>          
                <SvgUri svgXmlData={drop} width="50" height="50" />
                </View>
                <Text style={{fontSize:pxToDp(14),marginTop:pxToDp(10),color:'#4f2f4f'}}>Drop</Text> 
                </TouchableOpacity>
                <TouchableOpacity onPress={this.chooseWeather.bind(this,"snow")} style={{alignItems:"center"}}>
                <View style={{width:pxToDp(60),height:pxToDp(60),borderRadius:pxToDp(30),
                        backgroundColor:weather==="snow"?"#87CEEB":"#eee",justifyContent:'center', alignItems:'center'}}>            
                <SvgUri svgXmlData={snow} width="50" height="50" />
                </View>
                <Text style={{fontSize:pxToDp(14),marginTop:pxToDp(10),color:'#4f2f4f'}}>Snow</Text> 
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