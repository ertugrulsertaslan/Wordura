import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Pressable,
  KeyboardAvoidingView,
  Platform,
  StatusBar as RNStatusBar,
  ScrollView,
} from "react-native";
import { useState } from "react";
import CustomButton from "../components/CustomButton";
import CustomTextInput from "../components/CustomTextInput";

const SignUpPage = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {};

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <KeyboardAvoidingView
        style={{ flex: 1, width: "100%" }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={
          Platform.OS === "ios" ? 60 : RNStatusBar.currentHeight || 0
        }
      >
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          keyboardShouldPersistTaps="handled"
        >
          <View style={styles.titleContainer}>
            <Text style={styles.signUpText}>Sign Up</Text>
          </View>
          <View style={styles.textInputContainer}>
            <CustomTextInput
              title="Name"
              isSecureText={false}
              handleOnChangeText={setName}
              handleValue={name}
              handlePlaceholder="Enter Your Name"
            />
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
          </View>
          <View style={styles.signUpOptions}>
            <CustomButton
              title="Sign Up"
              buttonColor="blue"
              handleOnPress={handleRegister}
              pressedButtonColor="lightgray"
            />
            <Pressable onPress={() => navigation.navigate("Login")}>
              <Text style={styles.loginText}>
                Already have an account? Login
              </Text>
            </Pressable>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default SignUpPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: RNStatusBar.currentHeight || 20,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
    paddingHorizontal: 16,
  },
  titleContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  signUpText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#333",
  },
  textInputContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 30,
    width: "100%",
  },
  signUpOptions: {
    marginTop: 20,
    alignItems: "center",
  },
  loginText: {
    fontWeight: "bold",
    color: "#333",
    marginTop: 15,
  },
});
