import React, {Component} from 'react';
import {View} from 'react-native';
import Head from "./components/Head";
import Description from "./components/Description";
import Logout from "./components/Logout";
class Index extends Component {
    render() {
        return (
            <View style={{marginTop:40, justifyContent:"center", alignItems:"center"}}>
                <Head />
                <Description />
                <Logout />
            </View>
        );
    }
}

export default Index;