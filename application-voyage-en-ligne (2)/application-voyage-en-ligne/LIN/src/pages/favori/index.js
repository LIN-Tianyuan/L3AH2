import React, {Component} from 'react';
import {View, Text,Image} from 'react-native';
import { pxToDp } from '../../utils/stylesKits';
import SvgUri from "react-native-svg-uri";
import {love} from "../../resources/fonts/iconSvg";
class Index extends Component {
    render() {
        return (
            <View>
                <View style={{height:pxToDp(150),backgroundColor:"#87CEEB",marginTop:pxToDp(40),alignItems:"center"}}>
                    <View style = {{flexDirection:"row",marginTop:pxToDp(10),marginBottom:pxToDp(10)}}>
                        
                        <Image 
                        style={{marginRight:pxToDp(5),width:pxToDp(80),height:pxToDp(80),borderRadius:pxToDp(40)}}
                        source={require("../../resources/UserIcon.jpg")}></Image>
                        
                    </View>
                    <Text style = {{fontSize:pxToDp(16)}}>Phone:0768915934</Text>
                </View>
                <View style={{flexDirection:"row",marginTop:pxToDp(20)}}>
                    <Image 
                    style={{width:pxToDp(120),height:pxToDp(120),marginLeft:pxToDp(0.3)}}
                    source={require("../../resources/DNL.jpg")}></Image>
                    <View style={{flex:1,flexDirection:"row"}}>
                        <View style={{flex:3,justifyContent:"center",alignItems:"center"}}>
                            <View>
                                <Text style={{color:"#555",fontSize:pxToDp(20)}}>Disneyland</Text>
                            </View>
                        </View>
                        <View style={{flex:1,justifyContent:"center"}}>
                            <SvgUri svgXmlData={love} width="50" height="50" />
                        </View>
                    </View>
                </View>
                <View style={{flexDirection:"row",marginTop:pxToDp(20)}}>
                    <Image 
                    style={{width:pxToDp(120),height:pxToDp(120),marginLeft:pxToDp(0.3)}}
                    source={require("../../resources/Versailles.jpg")}></Image>
                    <View style={{flex:1,flexDirection:"row"}}>
                        <View style={{flex:3,justifyContent:"center",alignItems:"center"}}>
                            <View>
                                <Text style={{color:"#555",fontSize:pxToDp(20)}}>Versailles</Text>
                            </View>
                        </View>
                        <View style={{flex:1,justifyContent:"center"}}>
                            <SvgUri svgXmlData={love} width="50" height="50" />
                        </View>
                    </View>
                </View>
                <View style={{flexDirection:"row",marginTop:pxToDp(20)}}>
                    <Image 
                    style={{width:pxToDp(120),height:pxToDp(120),marginLeft:pxToDp(0.3)}}
                    source={require("../../resources/Saint-Michel.webp")}></Image>
                    <View style={{flex:1,flexDirection:"row"}}>
                        <View style={{flex:3,justifyContent:"center",alignItems:"center"}}>
                            <View>
                                <Text style={{color:"#555",fontSize:pxToDp(20)}}>Saint-Michel</Text>
                            </View>
                        </View>
                        <View style={{flex:1,justifyContent:"center"}}>
                            <SvgUri svgXmlData={love} width="50" height="50" />
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

export default Index;