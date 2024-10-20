import { Alert, Keyboard, Modal, Pressable, SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { useState } from "react";
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
export default function Index() {
  const [inputVal, setInputVal] = useState('');
  const [editTodoVal, seteditTodoVal] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
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
  const editTodo = () => {
    todos[currentIndex] = editTodoVal
    setTodos([...todos])
  }
  const openModal = (index:number) => {
    setIsModalVisible(true)
    setCurrentIndex(index)
    seteditTodoVal(todos[index])
  }
  const hideModal = () => {
    editTodo()
    setIsModalVisible(!isModalVisible);
  }
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
                onChangeText={seteditTodoVal}
                value={editTodoVal}
                placeholder="Edit Todo!"
                keyboardType="default"
              >
              </TextInput>
              <Pressable
                style={[styles.editButton, styles.buttonClose]}
                onPress={hideModal}>
                <Text style={styles.textStyle}>Edit</Text>
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
                <TouchableOpacity onPress={() => openModal(index)}>
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
