import { Alert, Keyboard, Modal, Pressable, SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { useState } from "react";
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
export default function Index() {
  const [inputVal, setInputVal] = useState('');
  const [todos, setTodos] = useState<string[]>([]);
  const [isModalVisible, setIsModalVisible] = useState(false)
  const addTodo = () => {
    if (inputVal.length > 0) {
      todos.push(inputVal);
      setTodos([...todos])
      setInputVal('')
      Keyboard.dismiss();
    }
  }
  const deleteTodo = (index: number) => {
    todos.splice(index, 1);
    setTodos([...todos])
  }
  const editTodo = (index: number) => {
    setIsModalVisible(true);
  }
  console.log(todos);
  return (
    <SafeAreaView>
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={isModalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setIsModalVisible(!isModalVisible);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <TextInput
                style={styles.modalInput}
                // onChangeText={setInputVal}
                // value={inputVal}
                placeholder="Edit Todo!"
                keyboardType="default"
              />
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setIsModalVisible(!isModalVisible)}>
                <Text style={styles.textStyle}>Hide Modal</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      </View>
      <ScrollView contentContainerStyle={{
        justifyContent: "center",
        alignItems: "center",
      }}>
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
          {todos.length > 0 ? <Text style={styles.secondText}>Your Todos</Text> : null}
          {todos.length > 0 ? todos.map((item, index) => {
            return <View key={index} style={styles.singleTodoWrapper}>
              <Text style={styles.noTodoText}>
                {item}
              </Text>
              <View style={{ flexDirection: 'row', gap: 30 }}>
                <TouchableOpacity onPress={() => editTodo(index)}>
                  <FontAwesome6 name="edit" size={26} color="green" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => deleteTodo(index)}>
                  <MaterialIcons name="delete" size={30} color="red" />
                </TouchableOpacity>
              </View>
            </View>
          }) : <Text style={styles.noTodoText}>
            Your todos will show here!
          </Text>}
        </View>
        <View>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
