import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function App() {
  return (
    <ScrollView style={{margin: 16}}>
      <SafeAreaView style={{ flex: 1 }}>
        <Text style={{ fontSize: 28 }}>"At that moment he had a thought that he'd never imagine he'd consider. "I could just cheat," he thought, "and that would solve the problem." He tried to move on from the thought but it was persistent. It didn't want to go away and, if he was honest with himself, he didn't want it to. "</Text>
        <Text style={{ fontSize: 28 }}>"At that moment he had a thought that he'd never imagine he'd consider. "I could just cheat," he thought, "and that would solve the problem." He tried to move on from the thought but it was persistent. It didn't want to go away and, if he was honest with himself, he didn't want it to. "</Text>
        <Text style={{ fontSize: 28 }}>"At that moment he had a thought that he'd never imagine he'd consider. "I could just cheat," he thought, "and that would solve the problem." He tried to move on from the thought but it was persistent. It didn't want to go away and, if he was honest with himself, he didn't want it to. "</Text>
      </SafeAreaView>
    </ScrollView>
  );
}

