import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Button, Text, View } from "react-native";

const Stack = createNativeStackNavigator();

function HomeScreen() {
  const navigation: any = useNavigation();
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <View style={{ marginVertical: 10 }}>
        <Button title="Go to Details" onPress={() => navigation.navigate('Details')} />
      </View>
      <View style={{ marginVertical: 10 }}>
        <Button title="Go to product ID 1" onPress={() => navigation.navigate('Details')} />
      </View>
      <View style={{ marginVertical: 10 }}>
        <Button title="Go to product ID 2" onPress={() => navigation.navigate('Details')} />
      </View>
    </View>
  );
}

function DetailsScreen() {
  const navigation: any = useNavigation();
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <View style={{ marginVertical: 10 }}>
        <Button title="Go back" onPress={() => navigation.goBack()} />
      </View>
      <Text>ID Product = ...</Text>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
