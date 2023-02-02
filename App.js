import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text></Text>
        <Text></Text>
      </View>

      <View>
        <Text style={styles.textHead}>Morning</Text>
      </View>

      <Text style={styles.text}>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      
      <View>

      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  text: {
    color: '#fff',
  },
  textHead:{
    color: 'blue',
    fontSize:40,
  },
});
