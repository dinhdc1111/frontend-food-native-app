import { useState } from 'react';
import { Button, FlatList, Image, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [text, onChangeText] = useState<string>("Default Value")

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

  return (
    <View style={styles.container}>
      <View>
        <TextInput
          onChangeText={onChangeText}
          value={text}
          autoCapitalize='none'
          autoCorrect={false}
          // keyboardType='numeric'
          // maxLength={2} //textarea
          // multiline
          style={{
            borderColor: "violet",
            borderWidth: 1,
            padding: 10
          }} />

        <Text style={styles.text}>{text}</Text>
      </View>

      <Button
        title='Add new'
        onPress={() => alert("tap me")}
      />
      <FlatList
      style={{
        marginTop: 20,
        borderColor: "red", borderWidth: 1
      }}
        data={players}
        keyExtractor={(item) => item.id +''}
        renderItem={({item}) => {
          return (
            <Text key={item.id}
              style={styles.todo}
            >
              {item.name}
            </Text>
          )
        }}
      />
      {/* <ScrollView >
        {players.map(player => {
          return (
            <Text key={player.id}
              style={styles.todo}
            >
              {player.name}
            </Text>
          )
        })}
      </ScrollView> */}
    </View>
  );
}
//css-in-js /styled component
const styles = StyleSheet.create({
  todo: {
    fontSize: 30,
    backgroundColor: "pink",
    marginBottom: 20,
    padding: 15
  },
  hoidanit: {
    color: "green",

  },

  text: {
    fontSize: 30,
    color: "red"
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    fontSize: 60, color: "red",
    paddingTop: 20,
    paddingHorizontal: 20,
    marginTop: 50

  },
});
