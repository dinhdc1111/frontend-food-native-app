import { Slot } from "expo-router"
import { Text, View } from "react-native"

const AppLayoutRoot = () => {
  return (
    <View style={{ padding: 50 }}>
      <Text>header</Text>
      <Slot />
      <Text>footer</Text>
    </View>
  )
}
export default AppLayoutRoot