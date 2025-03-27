import { Pressable, StyleSheet, Text, View } from "react-native"
import Ionicons from '@expo/vector-icons/Ionicons';
type Props = {
  title: string,
  onPress: () => void,
}

const styles = StyleSheet.create({
  text: {
    textTransform: "uppercase",
    color: "#fff",
    fontSize: 13
  },
  buttonContainer: {
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    alignSelf: "flex-start",
    backgroundColor: "#13c2c2"
  }
})
const MineButton = (props: Props) => {
  const { title, onPress } = props;
  return (
    <Pressable
      style={({ pressed }) => ({ opacity: pressed === true ? 0.8 : 1 })}
      onPress={onPress}
    >
      <View style={styles.buttonContainer}>
        <Ionicons name="add-circle" size={24} color="white" />
        <Text style={styles.text}>{title}</Text>
      </View>
    </Pressable>
  )
}
export default MineButton