import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './component/home';
import styles from './styles';
import BuisnessLogin from './component/BuisnessLogin';
import BuisnessSignUp from './component/BuisnessSignUp';
import Tools from './component/tools';
import LlamaSeo from './component/llamaSeo';
import {NavigationContainer} from '@react-navigation/native';
import AppStack from './AppStack';
export default function App() {
  return (
    <View style={styles.container}>
          <NavigationContainer>
               <AppStack/> 
          </NavigationContainer>
    </View>
  );
}


