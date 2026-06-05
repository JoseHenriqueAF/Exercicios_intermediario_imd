import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View   style={[styles.blue, styles.pequeno]}/>
      <View   style={[styles.red, styles.medio]}/>
      <View   style={[styles.blue, styles.grande]}/>
      <View/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#0F0'
  },

  red: {
    backgroundColor: 'red'
  }, 

  pequeno:{
    width:100,
    height: 100
  },
  
  medio:{
    width:200,
    height: 200
  },

  grande:{
    width: '50%',
    height: '10%'
  },

  blue:{
    backgroundColor: 'powderblue'
  }
})