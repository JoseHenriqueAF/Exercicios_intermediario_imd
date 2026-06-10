import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TouchableHighlight, TouchableNativeFeedback, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple('red')} underlayColor='black' onPress={() => alert('Clicou aqui!')}>
        <View style={styles.button}>
        <Text style={styles.text}>Clique aqui! Queijo</Text>
      </View>        
      </TouchableNativeFeedback>
      
    {/*
      <TouchableHighlight underlayColor='white' onPress={() => alert('Clicou aqui!')}>
      <View style={styles.button}>
        <Text style={styles.text}>Clique aqui! Queijo</Text>
      </View>        
      </TouchableHighlight> 
    */}
      <Button title="Clique aqui!" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: 'powderblue',
    color: 'white',
    margin: 20
  },
  text: {
    color: '#000',
    padding: 15
  }
});
