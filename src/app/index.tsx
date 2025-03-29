import { Link, router } from "expo-router"
import { Button, Text, View } from "react-native"

const handleSubmit = () => {
  alert("Submit");
  // router.navigate("/like/like-detail")
  router.navigate("/user")
}
const AppRoot = () => {
  return (
    <View>
      <Text>Welcome to Expo Router</Text>
      <Link href={"/product"}>Go to Product</Link>
      <Link href={"/like"}>Go to Like</Link>
      <Link href={"/like/like-detail"} asChild>
        <Button title="Go to Like Detail" />
      </Link>
      <View style={{marginTop: 20}}>
        <Button title="Login" onPress={handleSubmit}/>
      </View>
    </View>
  )
}
export default AppRoot