import { Keyboard, SafeAreaView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { useState } from "react";
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
export default function Index() {
  const [inputVal, setInputVal] = useState('');
  const [todos, setTodos] = useState<string[]>([]);
  const addTodo = () => {
    if (inputVal.length > 0) {
      todos.push(inputVal);
      setTodos([...todos])
      setInputVal('')
      Keyboard.dismiss();
    }
  }
  console.log(todos);

  return (
    <SafeAreaView
      style={{
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={styles.mainText}>Todo App</Text>
      <TextInput
        style={styles.input}
        onChangeText={setInputVal}
        value={inputVal}
        placeholder="Add your Todo Here!"
        keyboardType="default"
      />
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={addTodo}>
          <Text style={{
            fontSize: 16,
            fontWeight: '600'
          }}>Add</Text>
        </TouchableOpacity>
      </View>
      <View>
        {todos.length > 0 ? todos.map((item, index) => {
          return <View>
            <Text key={index} style={styles.noTodoText}>
              {item}
            </Text>
            <FontAwesome6 name="edit" size={24} color="black" />
          </View>
        }) : <Text style={styles.noTodoText}>
          Your todos will show here!
        </Text>}
      </View>
      <View>

      </View>
    </SafeAreaView>
  );
}
