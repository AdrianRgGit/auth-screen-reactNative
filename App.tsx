import { StatusBar } from "expo-status-bar";
import { Button, Image, StyleSheet, Text, TextInput, View } from "react-native";
import Constants from "expo-constants";

import background from "./public/images/background.jpg";

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View>
        <Image source={background} />
      </View>

      <View>
        <Text>Holaa</Text>
        <Text>Sign in to your account</Text>
      </View>

      <View>
        <TextInput placeholder="email@email.es" />
        <TextInput placeholder="********" />
        <Text>Forgot your Password?</Text>
        <Button title="SIGN IN"></Button>
      </View>

      <Text>Don't have an account? Create</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    height: 50,
    resizeMode: "cover",
  },
});

export default App;
