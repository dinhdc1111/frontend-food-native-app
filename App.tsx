import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import 'react-native-gesture-handler';
import Ionicons from '@expo/vector-icons/Ionicons';
import Home from "./components/nesting-nav/Home";
import HomeDetail from "./components/nesting-nav/HomeDetail";
import Like from "./components/nesting-nav/Like";
import LikeDetail from "./components/nesting-nav/LikeDetail";
import About from "./components/nesting-nav/About";
import ChangePassword from "./components/nesting-nav/ChangePassword";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const TabApp = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Like" component={Like} />
    </Tab.Navigator>
  )
}
const StackApp = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={TabApp}
        options={{ headerTitle: "Trang chủ", headerShown: false }} />
      <Stack.Screen
        name="HomeDetail"
        component={HomeDetail}
        options={
          ({ route }: { route: any }) => ({
            headerTitle: `Xem chi tiết ${route?.params?.userId ?? ''}`,
          })
        }
      />
      <Stack.Screen
        name="LikeDetail"
        component={LikeDetail}
      />
    </Stack.Navigator>
  )
}
export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen
          name="Home"
          component={StackApp}
        />
        <Drawer.Screen
          name="About"
          component={About}
        />
        <Drawer.Screen
          name="ChangePassword"
          component={ChangePassword}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
