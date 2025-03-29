import { Link } from "expo-router"
import { Text, View } from "react-native"

const Product = () => {
  return (
    <View>
      <Text>Product Page</Text>
      <Link href={"/"}>Back Home</Link>
    </View>
  )
}
export default Product