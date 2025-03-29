import { Stack } from "expo-router"

const AppLayoutRoot = () => {
  return (
    <Stack
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
      <Stack.Screen name="index" options={{
        headerTitle: "Trang chủ"
      }} />
      <Stack.Screen name="product/index" options={{
        headerTitle: "Sản phẩm"
      }} />
      <Stack.Screen name="(auth)/login" options={{
        headerTitle: "Đăng nhập"
      }} />
    </Stack>
  )
}
export default AppLayoutRoot