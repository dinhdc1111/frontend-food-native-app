import { useState } from 'react';
import { Keyboard, StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import InputTodo from './components/todo/InputTodo';
import ListTodo from './components/todo/ListTodo';

export default function App() {
  const [todoList, setTodoList] = useState<ITodo[]>([])

  function randomInteger(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const addToDo = (text: string) => {
    const todoNew = { id: randomInteger(1, 999999999), title: text }
    setTodoList([...todoList, todoNew])
  }

  const handleRemoveTodo = (id: number) => {
    const newTodoList = todoList.filter(todo => todo.id !== id);
    setTodoList(newTodoList);
  }
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <InputTodo addToDo={addToDo} />
        <ListTodo todoList={todoList} handleRemoveTodo={handleRemoveTodo} />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    fontSize: 60,
    color: "red",
    paddingTop: 20,
    paddingHorizontal: 20,
    marginTop: 50
  },
});
