import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import Input from "../../../components/UI/input";
import PrimaryButton from "../../../components/UI/PrimaryButton";

const SignUp = ({ navigation }) => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.outer}
      // enabled
      // keyboardVerticalOffset={400}
    >
      <View style={{ flex: 1 }}>
        <View style={{ paddingTop: 22 }}>
          <View>
            <Input
              placeholder="Firstname"
              containerInput={styles.containerInput}
              value={firstname}
              onChangeText={setFirstname}
            ></Input>
          </View>
          <View>
            <Input
              placeholder="Lastname"
              containerInput={styles.containerInput}
              value={lastname}
              onChangeText={setLastname}
            ></Input>
          </View>
          <View>
            <Input
              placeholder="Email"
              containerInput={styles.containerInput}
              keyboardType="email-address"
              value={email}
              onChangeText={setEmail}
            ></Input>
          </View>
          <View>
            <Input
              placeholder="Password"
              containerInput={styles.containerInput}
              keyboardType="password"
              value={password}
              onChangeText={setPassword}
            ></Input>
          </View>
          <View>
            <Input
              placeholder="Confirm password"
              containerInput={styles.containerInput}
              keyboardType="password"
            ></Input>
          </View>
        </View>
        <View style={styles.btnContainer}>
          <PrimaryButton
            onPress={() => {
              navigation.navigate("Confirm Email");
            }}
            btnStyle={styles.btnStyle}
          >
            <Text style={styles.btnText}>Sign Up</Text>
          </PrimaryButton>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  outer: {
    flex: 1,
  },
  containerInput: {
    marginBottom: 24,
  },
  btnContainer: {
    borderRadius: 10,
    overflow: "hidden",
    marginTop: 22,
    marginBottom: "55%",
  },
  btnStyle: {
    height: 46,
  },
  btnText: {
    fontSize: 20,
    fontWeight: 700,
  },
});
