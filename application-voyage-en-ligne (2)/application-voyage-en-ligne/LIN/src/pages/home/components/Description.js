import React, {Component} from 'react';
import {Text,View,Image} from 'react-native';
import {pxToDp} from "../../../utils/stylesKits";
class Index extends Component {
    
    render() {
        return (
            <View>
            <View style={{flexDirection:"row",justifyContent:"space-around",marginTop:pxToDp(10)}}>
            <View style={{position:"relative",paddingRight:pxToDp(40)}}>
                {/* image  */}
                <Image 
                style={{width:pxToDp(120),height:pxToDp(120)}}
                source={require("../../../resources/DNL.jpg")}/>
                <View
                style={{width:pxToDp(70),height:pxToDp(30),backgroundColor:"#DC143C",
                justifyContent:"center",alignItems:"center",borderRadius:pxToDp(10),
                position:"absolute",left:0,bottom:pxToDp(0)}}>
                    <Text style={{color:"#fff",fontSize:pxToDp(16)}}>Top1</Text>
                </View>
            </View>
            <View style={{position:"relative"}}>
                {/* image  */}
                <Image 
                style={{width:pxToDp(120),height:pxToDp(120)}}
                source={require("../../../resources/Mont-Blanc.jpg")}/>
                <View
                style={{width:pxToDp(70),height:pxToDp(30),backgroundColor:"#0000FF",
                justifyContent:"center",alignItems:"center",borderRadius:pxToDp(10),
                position:"absolute",left:0,bottom:pxToDp(0)}}>
                    <Text style={{color:"#fff",fontSize:pxToDp(16)}}>Top2</Text>
                </View>
            </View>            
            </View>
            <View style={{flexDirection:"row",justifyContent:"space-around",marginTop:pxToDp(10)}}>
            <View style={{position:"relative",paddingRight:pxToDp(40)}}>
                {/* image  */}
                <Image 
                style={{width:pxToDp(120),height:pxToDp(120)}}
                source={require("../../../resources/Versailles.jpg")}/>
                <View
                style={{width:pxToDp(70),height:pxToDp(30),backgroundColor:"#FFA500",
                justifyContent:"center",alignItems:"center",borderRadius:pxToDp(10),
                position:"absolute",left:0,bottom:pxToDp(0)}}>
                    <Text style={{color:"#fff",fontSize:pxToDp(16)}}>Top3</Text>
                </View>
            </View>
            <View style={{position:"relative"}}>
                {/* image  */}
                <Image 
                style={{width:pxToDp(120),height:pxToDp(120)}}
                source={require("../../../resources/Saint-Michel.webp")}/>
                <View
                style={{width:pxToDp(70),height:pxToDp(30),backgroundColor:"#3CB371",
                justifyContent:"center",alignItems:"center",borderRadius:pxToDp(10),
                position:"absolute",left:0,bottom:pxToDp(0)}}>
                    <Text style={{color:"#fff",fontSize:pxToDp(16)}}>Top4</Text>
                </View>
            </View>            
            </View>
            </View>
        );
    }
}

export default Index;