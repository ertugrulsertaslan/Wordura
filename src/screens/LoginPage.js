import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Pressable,
  StatusBar as RNStatusBar,
} from "react-native";
import { useState } from "react";
import CustomTextInput from "../components/CustomTextInput";
import CustomButton from "../components/CustomButton";
export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />

      <CustomTextInput
        title="Email"
        isSecureText={false}
        handleOnChangeText={setEmail}
        handleValue={email}
        handlePlaceholder="Enter Your Email"
      />
      <CustomTextInput
        title="Password"
        isSecureText={true}
        handleOnChangeText={setPassword}
        handleValue={password}
        handlePlaceholder="Create Your Password"
      />
      <CustomButton
        title="Login"
        handleOnPress={() => console.log("login")}
        buttonColor="blue"
        pressedButtonColor="gray"
      />
      <View style={styles.signUpOptions}>
        <Pressable onPress={() => navigation.navigate("Login")}>
          <Text style={styles.loginText}>
            First time using Wordura? Create an account
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: RNStatusBar.currentHeight || 0,
  },
  signUpOptions: {
    marginTop: 20,
    alignItems: "center",
  },
});
