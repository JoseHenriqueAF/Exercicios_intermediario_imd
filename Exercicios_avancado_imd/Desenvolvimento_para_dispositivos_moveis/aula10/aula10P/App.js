import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Platform, ImageBackground} from 'react-native';

import ImdLogo from './assets/svg/imd-logo.svg';

export default function App() {


  return (
    <View style={styles.container}>
        <ImdLogo width={100} height={200}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  grande: {
    fontSize:50
  }
});