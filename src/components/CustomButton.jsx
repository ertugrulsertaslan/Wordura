import { StyleSheet, Text, Pressable } from "react-native";
import React from "react";

const CustomButton = ({
  title,
  handleOnPress,
  buttonColor,
  pressedButtonColor,
  flexValue,
}) => {
  return (
    <Pressable
      onPress={() => handleOnPress()}
      style={({ pressed }) => [
        {
          backgroundColor: pressed ? pressedButtonColor : buttonColor,
          flex: flexValue,
        },
        styles.button,
      ]}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </Pressable>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  button: {
    borderWidth: 0.5,
    width: "80%",
    height: 50,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    margin: 5,
  },
  buttonText: {
    fontWeight: "bold",
    color: "white",
  },
});
