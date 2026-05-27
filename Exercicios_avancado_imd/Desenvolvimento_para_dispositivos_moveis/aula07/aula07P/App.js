import { StatusBar } from 'expo-status-bar';
import { FlatList, ScrollView, SectionList, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


const DATA = [
  {
    title: "Pratos principais",
    data: ["Pizza", "Burger", "Risoto"]
  },
  {
    title: "Entradas",
    data: ["Batata Frita", "Onion Rings "]
  },
  {
    title: "Sobremesas",
    data: ["Sorvete de Creme", "Petit Gateau"]
  }
]

function Item(props){
  return (
    <View style={{height:60, backgroundColor: '#AFC', padding: 10, margin: 10}}>
      <Text>{props.title}</Text>
    </View>
  )
}


export default function App() {
  return (
    
      <SafeAreaView style={{ flex: 1 }}>
        <SectionList
          style={{margin: 8}}
          sections={DATA}
          renderItem={(it)=> <Item title={it.item}/>}
          renderSectionHeader={(item)=> <Text style={{fontSize:30}}>{item.section.title}</Text>}
          keyExtractor={(item, index) => item+ index}
        />

       
      </SafeAreaView>
    
  );
}


