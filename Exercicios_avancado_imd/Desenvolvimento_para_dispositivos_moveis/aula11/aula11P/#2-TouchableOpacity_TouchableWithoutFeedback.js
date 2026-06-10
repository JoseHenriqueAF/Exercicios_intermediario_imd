import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TouchableHighlight, TouchableNativeFeedback, TouchableOpacity, View, Image, TouchableWithoutFeedback } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableWithoutFeedback underlayColor='black' onPress={() => alert('Clicou aqui!')}>
        <View style={styles.button}>
                <Image 
        source={{ uri: 'https://m.media-amazon.com/images/I/71sVQDj0SCL._SY466_.jpg' }} 
        style={styles.imagem} 
      />
        </View>        
      </TouchableWithoutFeedback>
      

      <Button title="Clique aqui!" />
    </SafeAreaView>
  );
}

{/*    <SafeAreaView style={styles.container}>
      <TouchableOpacity background={TouchableNativeFeedback.Ripple('red')} underlayColor='black' onPress={() => alert('Clicou aqui!')}>
        <View style={styles.button}>
                <Image 
        source={{ uri: 'https://m.media-amazon.com/images/I/71sVQDj0SCL._SY466_.jpg' }} 
        style={styles.imagem} 
      />
        </View>        
      </TouchableOpacity>
      

      <Button title="Clique aqui!" />
    </SafeAreaView>
*/}

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
  },
    imagem: {
    width: 200,
    height: 200, 
  }
});