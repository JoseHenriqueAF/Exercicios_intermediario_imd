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
    backgroundColor: '#0F0',
    flex: 1 
  },

  red: {
    backgroundColor: 'red'
  }, 

  pequeno:{
    flex: 1
  },
  
  medio:{
    flex: 2
  },

  grande:{
    flex: 3
  },

  blue:{
    backgroundColor: 'powderblue'
  }
})