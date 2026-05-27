import { StatusBar } from 'expo-status-bar';
import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const DATA = [
  { id: 0, title: "Primeiro item" },
  { id: 1, title: "Segundo item" },
  { id: 2, title: "Terceiro item" },
  { id: 3, title: "Quarto item" },
  { id: 4, title: "Quinto item"}
]

function Item(props){
  return (
    <View style={{height:30, backgroundColor: '#AFC', pading: 10, margin: 10}}>
      <Text>{props.title}</Text>
    </View>
  )
}


export default function App() {
  return (
    
      <SafeAreaView style={{ flex: 1 }}>
        <FlatList 
          data={DATA}
          renderItem={it => <Item title={it.item.title}/>}
          keyExtractor={it => it.id}  
        >
        
        </FlatList> 
      </SafeAreaView>
    
  );
}
