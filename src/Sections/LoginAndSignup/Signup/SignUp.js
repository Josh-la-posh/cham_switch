import { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Input from "../../../components/UI/input";
import PrimaryButton from "../../../components/UI/PrimaryButton";
import RadioButtonSelect from "../../../components/UI/radioButton";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../../config/firebase";
import { ref, set } from "firebase/database";

const SignUp = ({ navigation }) => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [conPass, setConPass] = useState("");
  const [selectedValue, setSelectedValue] = useState("");

  const radioOptions = [
    { label: "Employee", value: "employee" },
    { label: "Line Manager", value: "lineManager" },
    { label: "Human Resource Manager", value: "hr" },
  ];

  const handleValueChange = (value) => {
    setSelectedValue(value);
  };

  function create() {
    set(ref(db, "users/" + password), {
      firstname: firstname,
      lastname: lastname,
      email: email,
      password: password,
      role: selectedValue,
    })
      .then(() => {
        alert("data submitted");
      })
      .catch((error) => {
        alert(error);
      });
  }

  const handleSignUp = () => {
    console.log(selectedValue);
    if (firstname && lastname && selectedValue) {
      if (password === conPass) {
        createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            const user = userCredential.user;
            user && navigation.navigate("Confirm Email");
            user && create();
            setFirstname("");
            setLastname("");
            setEmail("");
            setPassword("");
            setConPass("");
            setSelectedValue("");
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(error.message, errorCode, errorMessage);
            // ..
          });
      } else {
        alert("Password do not match");
      }
    } else {
      alert("Some fields are missing");
    }
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
              onChangeText={(name) => setFirstname(name)}
            ></Input>
          </View>
          <View>
            <Input
              placeholder="Lastname"
              containerInput={styles.containerInput}
              value={lastname}
              onChangeText={(name) => setLastname(name)}
            ></Input>
          </View>
          <View>
            <Input
              placeholder="Email"
              containerInput={styles.containerInput}
              keyboardType="email-address"
              value={email}
              onChangeText={(email) => setEmail(email)}
            ></Input>
          </View>
          <View>
            <Input
              placeholder="Password"
              containerInput={styles.containerInput}
              keyboardType="password"
              value={password}
              onChangeText={(pass) => setPassword(pass)}
            ></Input>
          </View>
          <View>
            <Input
              placeholder="Confirm password"
              containerInput={styles.containerInput}
              keyboardType="password"
              value={conPass}
              onChangeText={(pass) => setConPass(pass)}
            ></Input>
          </View>
          <View>
            <RadioButtonSelect
              radioOptions={radioOptions}
              selectedValue={selectedValue}
              onValueChange={handleValueChange}
            />
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
