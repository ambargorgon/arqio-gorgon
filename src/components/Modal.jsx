import {
  StyleSheet,
  Text,
  View,
  Modal as NewModal,
  Button,
} from "react-native";
import React from "react";

const DeleteModal = ({
  isVisible,
  actionDeleteItem,
  isItemSelected,
  closeModal,
}) => {
  return (
    <NewModal visible={isVisible} animationType="fade" transparent={true}>
      <View style={styles.modalContainer}>
        <View style={styles.modalStyle}>
          <Text>Eliminar el Item "{isItemSelected.name}" ?</Text>
          <View style={styles.buttonsStyle}>
            <Button title="Si" onPress={() => actionDeleteItem()} />
            <Button title="No" onPress={() => closeModal()} />
          </View>
        </View>
      </View>
    </NewModal>
  );
};

export default DeleteModal;

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
  modalStyle: {
    flexDirection: "column",
    width: 350,
    height: 150,
    backgroundColor: "white",
    borderStyle: "solid",
    borderWidth: 5,
    borderColor: "#687C9E",
    borderRadius: 20,
    padding: 40,
    shadowColor: "#000",
    gap: 10,
  },
  buttonsStyle:{
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
    height: 50,
  }
});
