import { useState } from 'react';
import { Button, Image, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [players, setPlayers] = useState([
    { id: 1, name: 'Thibaut Courtois' },
    { id: 2, name: 'Ricardo Carvalho' },
    { id: 3, name: 'Ángel Di María' },
    { id: 4, name: 'Luka Modrić' },
    { id: 5, name: 'Isco' },
    { id: 6, name: 'Mateo Kovačić' },
    { id: 7, name: 'Cristiano Ronaldo' },
    { id: 8, name: 'Toni Kroos' },
    { id: 9, name: 'Lucas Vázquez' },
    { id: 10, name: 'Eden Hazard' },
    { id: 11, name: 'Antonio Rüdiger' },
  ])
  const [text, onChangeText] = useState("Useless Text")
  return (
    <ScrollView style={{
      flex: 1,
      backgroundColor: '#fff',
    }}>
      <View style={styles.container}>
        <Text style={styles.text}>React <Text style={styles.textSecondary}>Native</Text></Text>
        <Text>Learn once, write anywhere</Text>
        <Image source={{ uri: 'https://reactnative.dev/docs/assets/p_cat2.png' }} style={{
          width: 200,
          height: 200
        }} />
      </View>
      <TextInput style={styles.input}
        // keyboardType='numeric'
        // maxLength={6}
        // multiline
        autoCorrect={false}
        autoCapitalize="none"
        placeholder='Nhập thông tin tìm kiếm'
        onChangeText={onChangeText}
        value={text}
      />
      <Text style={{ marginVertical: 10 }}>Kết quả tìm kiếm: {text}</Text>
      <Button title='Thêm mới' onPress={() => alert('Tap me...')} />
      <View style={{ marginVertical: 10 }}>
        {
          players.map((player) => (
            <View key={player.id} style={{
              margin: 10,
              padding: 10,
              borderWidth: 1,
              borderColor: '#ccc',
              borderRadius: 5,
            }}>
              <Text>{player.name}</Text>
            </View>
          ))
        }
      </View>
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
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    margin: 20,
    padding: 10
  }
});
