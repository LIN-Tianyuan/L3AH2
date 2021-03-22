import { NavigationContainer } from '@react-navigation/native';
import { CreateStackNavigator } from '@react-navigation/stack';
import { CreateAppContainer } from 'react-navigation-stack'
import Culture from '../components/Culture'
import Meteo from '../components/Meteo'
import App from '../App'


const Stack=CreateStackNavigator();
 
  const screens={
    Culture: {
      screen: Culture
    },
    Météo:{
      screen:Meteo
    },
    App:{
         screen:App
    }
                              
  }
  
  
  
 const HomeStack=CreateStackNavigator(screens);

export default CreateAppContainer(HomeStack);
