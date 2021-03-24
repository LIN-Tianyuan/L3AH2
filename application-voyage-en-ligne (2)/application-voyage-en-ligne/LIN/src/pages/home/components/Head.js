import React, {Component} from 'react';
import {View, Text, TouchableOpacity,Image} from 'react-native';
import Svg from "react-native-svg-uri";
import {weather,favor} from "../../../resources/fonts/iconSvg";
import {pxToDp} from "../../../utils/stylesKits";
import { NavigationContext } from '@react-navigation/native';


class Index extends Component {
    static contextType = NavigationContext;
    goToWeather=()=> {
        this.context.navigate("Weather");
    }
    goToInterest=()=> {
        this.context.navigate("Interest");
    }
    render() {
        return (
            <View>
                <Image style={{width:pxToDp(400), height:pxToDp(250)}} source={require("../../../resources/logo.png")}></Image>
                <View style={{flexDirection:"row",justifyContent:"space-around",marginTop:pxToDp(10)}}>
                <TouchableOpacity 
                style={{alignItems:"center"}}
                onPress={()=>this.goToWeather('Weather')}>
                    <View style={{width:pxToDp(70), height:pxToDp(70),borderRadius:pxToDp(35),
                    backgroundColor:'yellow',justifyContent:"center",alignItems:"center"}}>
                        <Svg width="40" height="40" svgXmlData={weather}></Svg>
                    </View>
                    <Text style={{fontSize:pxToDp(18),marginTop:pxToDp(4)}}>Weather</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{alignItems:"center"}}
                onPress={()=>this.goToInterest('Interest')}>
                    <View style={{width:pxToDp(70), height:pxToDp(70),borderRadius:pxToDp(35),
                    backgroundColor:'orange',justifyContent:"center",alignItems:"center"}}>
                        <Svg width="40" height="40" svgXmlData={favor}></Svg>
                    </View>
                    <Text style={{fontSize:pxToDp(18),marginTop:pxToDp(4)}}>Interest</Text>
                </TouchableOpacity>
                </View>
            </View>
        );
    }
}

export default Index;