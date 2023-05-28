import { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Input from "../../../components/UI/input";
import PrimaryButton from "../../../components/UI/PrimaryButton";

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../config/firebase";

const SignUp = ({ navigation }) => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = () => {

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
<<<<<<< HEAD:Sections/LoginAndSignup/Signup/SignUp.js
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin
    <KeyboardAwareScrollView
    // behavior={Platform.OS === "ios" ? "padding" : "height"}
    // style={styles.outer}
    // enabled
    // keyboardVerticalOffset={400}
<<<<<<< HEAD
=======
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.outer}
      // enabled
      // keyboardVerticalOffset={400}
>>>>>>> 1f303af12fce8a27d6b5f1d74e9e9733dd380a4f
=======
>>>>>>> origin
    >
=======
    <KeyboardAwareScrollView>
>>>>>>> origin:src/Sections/LoginAndSignup/Signup/SignUp.js
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
<<<<<<< HEAD:Sections/LoginAndSignup/Signup/SignUp.js
<<<<<<< HEAD
<<<<<<< HEAD
    </KeyboardAwareScrollView>
=======
    </KeyboardAvoidingView>
>>>>>>> 1f303af12fce8a27d6b5f1d74e9e9733dd380a4f
=======
    </KeyboardAwareScrollView>
>>>>>>> origin
=======
    </KeyboardAwareScrollView>
>>>>>>> origin:src/Sections/LoginAndSignup/Signup/SignUp.js
  );
};

export default SignUp;

const styles = StyleSheet.create({
  outer: {
<<<<<<< HEAD:Sections/LoginAndSignup/Signup/SignUp.js
<<<<<<< HEAD
<<<<<<< HEAD
    // flex: 1,
=======
    flex: 1,
>>>>>>> 1f303af12fce8a27d6b5f1d74e9e9733dd380a4f
=======
    // flex: 1,
>>>>>>> origin
=======
    flex: 1,
>>>>>>> origin:src/Sections/LoginAndSignup/Signup/SignUp.js
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