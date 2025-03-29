import { FlatList, StyleSheet, Text, TouchableOpacity } from "react-native"

type Props = {
  todoList: ITodo[],
  handleRemoveTodo: (id: number) => void,
}

const styles = StyleSheet.create({
  todo: {
    fontSize: 14,
    backgroundColor: "pink",
    marginBottom: 20,
    padding: 15,
    borderRadius: 10,
  },
})
const ListTodo = (props: Props) => {
  const { todoList, handleRemoveTodo } = props;
  return (
    <FlatList
      style={{ marginTop: 20}}
      data={todoList}
      keyExtractor={(item) => item.id + ''}
      renderItem={({ item }) => {
        return (
          <TouchableOpacity onPress={() => handleRemoveTodo(item.id)}>
            <Text key={item.id} style={styles.todo}>
              {item.title}
            </Text>
          </TouchableOpacity>
        )
      }}
    />
  )
}
export default ListTodo