import { NavigationContainer, useNavigation, useRoute } from "@react-navigation/native";
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
        <Button title="Go to product ID 1" onPress={() => navigation.navigate('Details', { userId: 1, name: "Product 1" })} />
      </View>
      <View style={{ marginVertical: 10 }}>
        <Button title="Go to product ID 2" onPress={() => navigation.navigate('Details', { userId: 2, name: "Product 2" })} />
      </View>
    </View>
  );
}

function DetailsScreen() {
  const navigation: any = useNavigation();
  const route: any = useRoute();

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <View style={{ marginVertical: 10 }}>
        <Button title="Go back" onPress={() => navigation.goBack()} />
      </View>
      <Text>ID: {route?.params?.userId}</Text>
      <Text>Tên sản phẩm: {route?.params?.name}</Text>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerTitle: "Trang chủ" }} />
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={
            ({ route }: { route: any }) => ({
              headerTitle: `Chi tiết sản phẩm ${route?.params?.userId ?? ''}`,
            })
          }
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
