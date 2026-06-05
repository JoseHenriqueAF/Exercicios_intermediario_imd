import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.box, styles.cor1]}><Text style={{color:'white', fontSize: 30}}>1</Text></View>
      <View style={[styles.box, styles.cor2]}><Text style={{color:'white', fontSize: 30}}>2</Text></View>
      <View style={[styles.box, styles.cor3]}><Text style={{color:'white', fontSize: 30}}>3</Text></View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  container:{
    flex: 1,
    flexDirection: 'collumn',
    direction:  'ltr',
    justifyContent: 'center',
    alignItems: 'center'
  },

  box:{
    width: 100,
    height: 100,
    color: 'white'
  },

  cor1:{
    backgroundColor: '#00F',
  },

  cor2:{
    backgroundColor: '#05F',
  },
  
  cor3:{
    backgroundColor: '#0AF',
  },
})