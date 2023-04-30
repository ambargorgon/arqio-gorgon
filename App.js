import {
  Button,
  StyleSheet,
  TextInput,
  View,
  FlatList,
  Text,
} from "react-native";
import { useState } from "react";
import DeleteModal from './src/components/Modal';

export default function App() {
  const [textItem, setTextItem] = useState("");
  const [list, setList] = useState([]);

  const [itemSelected, setItemSelected] = useState({});
  const [modalVisible, setModalVisible] = useState(false);

  const onHandleChangeText = (text) => {
    setTextItem(text);
  };

  const addItem = () => {
    if (textItem !== "") {
      setList((prevState) => [
        ...prevState,
        { name: textItem, id: Math.random().toString() },
      ]);
      setTextItem("");
    }
  };

  const onHandleModal = (item) => {
    setItemSelected(item);
    setModalVisible(true);
  };

  const onHandleDelete = (itemId) => {
    setList(list.filter((prod) => prod.id !== itemId));
    setModalVisible(false);
  };

  const renderItem = ({ item }) => (
    <View style={styles.itemList}>
      <Text>{item.name}</Text>
      <Button title="X" onPress={() => onHandleModal(item)} />
    </View>
  );

  const onHandleClose = ()=>{
    setModalVisible(false)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Shopping List</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Escribe el elemento para agregar"
          onChangeText={onHandleChangeText}
          value={textItem}
        ></TextInput>
        <Button title="  +  " onPress={addItem} />
      </View>
      <View>
        <FlatList
          data={list}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
      <DeleteModal isVisible={modalVisible} actionDeleteItem={()=> onHandleDelete(itemSelected.id)} isItemSelected={itemSelected} closeModal={onHandleClose}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    backgroundColor: "#A4D2BE",
  },
  title: {
    fontWeight: "bold",
    fontSize: 30,
    alignSelf: "center",
    marginTop: 60,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    paddingVertical: 30,
    marginHorizontal: 30,
  },
  input: {
    borderBottomWidth: 2,
    width: 220,
    marginHorizontal: 10,
  },
  itemList: {
    backgroundColor: "white",
    borderRadius: 30,
    flex: 1,
    width: 300,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    alignSelf: "center",
    textAlign: "center",
    paddingHorizontal: 30,
    paddingVertical: 10,
    margin: 7,
  },
});
