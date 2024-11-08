import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Loading = () => {
  return (
    <View style={styles.container}>
      <Pressable onPress={() => changeIsLoading()}></Pressable>
      <ActivityIndicator size={"large"} color={"blue"} />
      <Text style={styles.loadingText}>Loading...</Text>
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "absolute",
    width: "100%",
    height: "100%",

    alignItems: "center",
    justifyContent: "center",
  },
  loadingText: {
    fontWeight: "bold",
    fontSize: 16,
    marginTop: 20,
  },
});
