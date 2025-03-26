import { StatusBar } from 'expo-status-bar';
import { Image, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <ScrollView style={{
      flex: 1,
      backgroundColor: '#fff',
    }}>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.text}>React <Text style={styles.textSecondary}>Native</Text></Text>
          <Text>Learn once, write anywhere</Text>
          <Image source={{ uri: 'https://reactnative.dev/docs/assets/p_cat2.png' }} style={{
            width: 200,
            height: 200
          }} />
        </View>
        <TextInput style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
          margin: 20,
        }}
          defaultValue="You can type in me" />
      </ScrollView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 80
  },
  text: {
    fontSize: 24,
    color: '#dada'
  },
  textSecondary: {
    color: '#58c4dc'
  }
});
