import { useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [products, setProducts] = useState([{
    id: 1,
    name: 'Product 1',
    price: 10.99,
    image: 'https://reactnative.dev/docs/assets/p_cat1.png',
  }])
  const [text, onChangeText] = useState("Useless Text")
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
        <Text>Kết quả tìm kiếm: {text}</Text>
        <View>
          {
            products.map((product) => (
              <View key={product.id} style={{
                margin: 10,
                padding: 10,
                borderWidth: 1,
                borderColor: '#ccc',
                borderRadius: 5,
              }}>
                <Text>{product.name}</Text>
                <Text>{product.price} USD</Text>
                <Image source={{ uri: product.image }} style={{
                  width: 100,
                  height: 100
                }} />
              </View>
            ))
          }
        </View>
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
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    margin: 20,
    padding: 10
  }
});
