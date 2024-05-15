import { StatusBar } from "expo-status-bar";
import {
  Button,
  Image,
  StyleSheet,
  Text,
  TextInput,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";
import Constants from "expo-constants";
import React from "react";

const App = () => {
  return (
    <View style={styles.mainContainer}>
      <StatusBar style="auto" />

      <Image
        style={styles.image}
        source={require("./public/images/background.jpg")}
      />

      <View style={styles.loginContainer}>
        <Text style={styles.title}>Hello</Text>
        <Text style={styles.subTitle}>Sign in to your account</Text>

        <View style={styles.formContainer}>
          <TextInput style={styles.formInput} placeholder="Email" />
          <TextInput
            style={styles.formInput}
            placeholder="Password"
            secureTextEntry={true}
          />
          <Text style={styles.forgotPasswordText}>Forgot your Password?</Text>
          <TouchableOpacity
            style={styles.submitButton}
            onPress={() => console.log("Sign in button pressed")}
          >
            <Text>SIGN IN</Text>
          </TouchableOpacity>
        </View>

        <Text>Don't have an account? Create</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "#F1F1F1",
    flex: 1,
  },

  loginContainer: {
    flex: 1,
    padding: 16,
    alignItems: "center",
    // justifyContent: "center",
    gap: 12,
  },

  image: {
    width: "100%",
    height: 300,
    borderBottomRightRadius: 100,
  },

  title: {
    fontSize: 64,
    fontWeight: "bold",
    fontFamily: "Arial",
    marginBottom: -10,
  },

  subTitle: {
    fontSize: 16,
    marginBottom: 16,
  },

  formContainer: {
    width: "100%",
    padding: 16,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },

  formInput: {
    width: "100%",
    backgroundColor: "#F9F9F9",
    marginBottom: 12,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    borderWidth: 0.5,
    borderColor: "#240750",
  },

  forgotPasswordText: {
    alignSelf: "flex-end",
    marginBottom: 24,
    color: "#445069",
  },

  submitButton: {
    backgroundColor: "#F7E987",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginTop: 24,
  },
});

export default App;
