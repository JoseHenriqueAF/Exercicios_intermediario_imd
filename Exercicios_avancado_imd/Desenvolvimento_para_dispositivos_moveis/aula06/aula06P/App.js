import { StatusBar } from 'expo-status-bar';
import  React, {useState} from 'react';
import { Button, StyleSheet, Switch, Text, TextInput, View  } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';




export default function App() {
  return (
    
    <SafeAreaView style={{ flex: 1 }}>
      <Welcome/>
      <Input/>
      <Botoes texto="Clique aqui"/>
      
    </SafeAreaView>
    
  );
}

function Input(){
  const [text, setText] = useState('')
  
  return(
    <View>
      <TextInput style={{height:40}} placeholder='Digite aqui seu nome!' value={text} onChangeText={(text )=> setText(text)}>
      </TextInput>
      
    </View>
  )
}

function OnPressButton(){
  alert('Você clicou!')
}

function Botoes(props){

  const [ligado, setLigado] = useState(true)

  return(
    <View>
      <Button onPress={OnPressButton} title={props.texto}></Button>
      <Switch onValueChange={()=> setLigado(!ligado)} value={ligado}></Switch>
    </View>
  )
  
  
}

function Welcome(){

  return (<View>
    <Text>Bem Vindo!</Text>
  </View>);
}


