import { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Input from "../../../components/UI/input";
import PrimaryButton from "../../../components/UI/PrimaryButton";

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// import { auth } from "../../../config/firebase";

const SignUp = ({ navigation }) => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = () => {
    const auth = getAuth();

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user.email);
        console.log(user.password);
        user && navigation.navigate("Confirm Email");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(error.message);
        // ..
      });

    // setEmail("");
    // setPassword("");
  };

  return (
    <KeyboardAwareScrollView>
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
          <PrimaryButton onPress={handleSignUp} btnStyle={styles.btnStyle}>
            <Text style={styles.btnText}>Sign Up</Text>
          </PrimaryButton>
        </View>
      </View>
    </KeyboardAwareScrollView>
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
