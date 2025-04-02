import { useState } from "react"
import { Alert, Button, StyleSheet, TextInput, View } from "react-native"
import MineButton from "../../shared/components/button/MineButton";

const styles = StyleSheet.create({
  todoInput: {
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 10,
    marginBottom: 20,
    borderRadius: 5
  }
})
interface Props {
  addToDo: (value: string) => void;
}

const InputTodo = (props: Props) => {
  const { addToDo } = props
  const [text, setText] = useState<string>("")

  const handleAddTodo = () => {
    if (!text) {
      Alert.alert(
        "Thông báo",
        "Nội dung không được để trống. Vui lòng nhập thông tin và thử lại.",
        [
          {text: "Đã hiểu", style: "default"}
        ]
      );
      return;
    };
    addToDo(text)
    setText("")
  };

  return (
    <View>
      <TextInput
        onChangeText={value => setText(value)}
        value={text}
        autoCapitalize='none'
        autoCorrect={false}
        style={styles.todoInput} />
      <MineButton
        title='Thêm mới'
        onPress={handleAddTodo}
      />
    </View>
  )
}
export default InputTodo