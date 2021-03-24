
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Accueil from "./accueil";
import Login from "./pages/login";
import Weather from "./pages/weather";
import Interest from "./pages/interest";


const Stack = createStackNavigator();

function Nav() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode= "none" initialRouteName="Login">
      <Stack.Screen name="Weather" component={Weather} />
      <Stack.Screen name="Interest" component={Interest} />
      <Stack.Screen name="Accueil" component={Accueil} />
      
      <Stack.Screen name="Login" component={Login} />
        
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Nav;