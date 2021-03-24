import React, {Component} from 'react';
import {View} from 'react-native';
import VFButton from '../../../components/VFButton';
import {pxToDp} from "../../../utils/stylesKits";
import { NavigationContext } from '@react-navigation/native';
class Index extends Component {
    static contextType = NavigationContext;
    goToPage=()=>{
        this.context.navigate("Login");
    }
    render() {
        return (
            <View style={{marginTop:40, width:"55%",height:pxToDp(40), alignSelf:"center"}}><VFButton 
            style={{borderRadius:pxToDp(20)}}
            onPress={()=>this.goToPage("Login")}>
                Deconnexion</VFButton></View>
        );
    }
}

export default Index;