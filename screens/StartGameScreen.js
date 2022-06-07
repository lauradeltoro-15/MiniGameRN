import { useState } from "react";
import { TextInput, View, StyleSheet, Alert } from "react-native";

import PrimaryButton from "../components/PrimaryButton";
import { Colors } from "./constants/Colors";

const StartGameScreen = ({ onConfirmNumber }) => {
  const [inputNumber, setInputNumber] = useState("");

  const numberInputHandler = (text) => {
    setInputNumber(text);
  };
  const resetInputHandler = () => setInputNumber("");

  const confirmInputHandler = () => {
    const number = parseInt(inputNumber);
    if (isNaN(number) || number <= 0 || number > 99) {
      Alert.alert(
        "Invalid number",
        "Number has to be a number between 1 and 99",
        [
          {
            text: "Ok",
            style: "destructive",
            onPress: resetInputHandler,
          },
        ]
      );

      return;
    }
    console.log(onConfirmNumber);
    onConfirmNumber(number);
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType="number-pad"
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={numberInputHandler}
        value={inputNumber}
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonsContainer}>
          <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
        </View>
        <View style={styles.buttonsContainer}>
          <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  inputContainer: {
    alignItems: "center",
    marginTop: 100,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: Colors.primary800,
    borderRadius: 8,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: "#ddb52f",
    borderBottomWidth: 2,
    color: "#ddb52f",
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});
