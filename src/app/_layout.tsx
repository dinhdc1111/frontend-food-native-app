import { Stack } from "expo-router";
import { StyleSheet } from "react-native";
import { RootSiblingParent } from "react-native-root-siblings";
import { SafeAreaView } from "react-native-safe-area-context";
const AppLayoutRoot = () => {
  return (
    <RootSiblingParent>
      <SafeAreaView style={styles.container}>
        <Stack
          screenOptions={{
            headerStyle: {
              backgroundColor: "#f4511e",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        >
          <Stack.Screen
            name="index"
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="(auth)/signup"
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="(auth)/verify"
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="(tabs)"
            options={{
              headerTitle: "Trang chủ",
            }}
          />
          <Stack.Screen
            name="product/index"
            options={{
              headerTitle: "Sản phẩm",
            }}
          />
          <Stack.Screen
            name="(auth)/login"
            options={{
              headerTitle: "Đăng nhập",
            }}
          />
        </Stack>
      </SafeAreaView>
    </RootSiblingParent>
  );
};
export default AppLayoutRoot;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})