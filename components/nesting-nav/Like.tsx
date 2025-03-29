import { useNavigation } from "@react-navigation/native";
import { Button, Text, View } from "react-native"

type Props = {}
const Like = (props: Props) => {
  const navigation: any = useNavigation();
  return (
    <View>
      <Text>Like</Text>
      <Button title="Go to Like" onPress={() => navigation.navigate("LikeDetail")} />
    </View>
  )
}
export default Like