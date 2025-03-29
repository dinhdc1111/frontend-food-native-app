import { useNavigation } from "@react-navigation/native"
import { Button, Text, View } from "react-native"

type Props = {}
const Home = (props: Props) => {
  const navigation: any = useNavigation();
  return (
    <View>
      <Text>Home</Text>
      <Button title="Go to Detail" onPress={() => navigation.navigate("HomeDetail")} />
    </View>
  )
}
export default Home