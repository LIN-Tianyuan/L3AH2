import React, {Component} from 'react';
import {View} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import Svg from "react-native-svg-uri";
import { home, favori} from "./resources/fonts/iconSvg";
import Home from "./pages/home";
import Favori from "./pages/Favori";

class Index extends Component {
    state = {
        selectedTab: "home"
    }
    render() {
        return (
            <View style={{flex:1, backgroundColor:"#fff"}}>
                <TabNavigator>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'home'}
                        title="Home"
                        renderIcon={() => <Svg width="20" height="20" svgXmlData={home} />}
                        renderSelectedIcon={() => <Svg width="20" height="20" svgXmlData={home} />}
                        onPress={() => this.setState({ selectedTab: 'home' })}
                        tabStyle={{backgroundColor:"#eee",justifyContent:"center"}}
                        >
                        <Home></Home>
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'favori'}
                        title="Favori"
                        renderIcon={() => <Svg width="20" height="20" svgXmlData={favori} />}
                        renderSelectedIcon={() => <Svg width="20" height="20" svgXmlData={favori} />}
                        onPress={() => this.setState({ selectedTab: 'favori' })}
                        tabStyle={{backgroundColor:"#eee",justifyContent:"center"}}
                        >
                        <Favori></Favori>
                    </TabNavigator.Item>
                    </TabNavigator>
            </View>
        );
    }
}

export default Index;