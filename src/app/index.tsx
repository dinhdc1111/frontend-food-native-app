import { Link } from "expo-router"
import { Text, View } from "react-native"
const HomePage = () => {
  return (
    <View>
      <Text>Welcome to Home Page</Text>
      <Link href={"/product"}>Go to Product</Link>
      <Link href={"/login"}>Go to Login</Link>
    </View>
  )
}
export default HomePage