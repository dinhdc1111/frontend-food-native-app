import { NavigationContainer, useNavigation, useRoute } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Button, Text, View } from "react-native";
import 'react-native-gesture-handler';
import Ionicons from '@expo/vector-icons/Ionicons';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

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
      {/* Stack Navigator*/}
      {/* <Stack.Navigator
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
      </Stack.Navigator> */}
      {/* Drawer Navigator*/}
      {/* <Drawer.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
        initialRouteName="Home"
      >
        <Drawer.Screen
          name="Details"
          component={DetailsScreen}
        />
        <Drawer.Screen
          name="Home"
          component={HomeScreen}
          options={{
            drawerLabel: 'Trang chủ',
            headerTitle: 'Trang chủ'
          }}
        />
      {/* Tab Navigation */}
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = focused
                ? 'football'
                : 'football-outline';
            } else if (route.name === 'Details') {
              iconName = focused ? 'american-football' : 'american-football-outline';
            }
            return <Ionicons name={iconName as any} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Details" component={DetailsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
