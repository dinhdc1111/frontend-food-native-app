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
          <Text>Some text</Text>
          <Text>Some more text</Text>
          <Image source={{ uri: 'https://reactnative.dev/docs/assets/p_cat2.png' }} style={{
            width: 200,
            height: 200
          }} />
          <StatusBar style="auto" />
        </View>
        <TextInput style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
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
});
