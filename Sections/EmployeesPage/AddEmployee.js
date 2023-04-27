import { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import AccountPage from "../../components/AccountPage";
import Input from "../../components/UI/input";
import PrimaryButton from "../../components/UI/PrimaryButton";

const AddEmployee = ({ navigation }) => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [email, setEmail] = useState("");
  const [position, setPosition] = useState("");
  const [joiningDate, setJoiningDate] = useState("");

  return (
    <View>
      <AccountPage title="Add Employee">
        <View style={styles.formContainer}>
          <View style={styles.inputContainer}>
            <Input
              placeholder="Firstname"
              style={styles.inputField}
              value={firstname}
              onChangeText={setFirstname}
            />
          </View>
          <View style={styles.inputContainer}>
            <Input
              placeholder="Lastname"
              style={styles.inputField}
              value={lastname}
              onChangeText={setLastname}
            />
          </View>
          <View style={styles.inputContainer}>
            <Input
              placeholder="Phone Number"
              style={styles.inputField}
              value={phoneNo}
              onChangeText={setPhoneNo}
              keyboardType="numeric"
            />
          </View>
          <View style={styles.inputContainer}>
            <Input
              placeholder="Email"
              style={styles.inputField}
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
            />
          </View>
          <View style={styles.inputContainer}>
            <Input
              placeholder="Position"
              style={styles.inputField}
              value={position}
              onChangeText={setPosition}
            />
          </View>
          <View style={styles.inputContainer}>
            <Input
              placeholder="Joining Date"
              style={styles.inputField}
              value={joiningDate}
              onChangeText={setJoiningDate}
            />
          </View>
          <View style={styles.btnContainer}>
            <PrimaryButton onPress={() => navigation.navigate("Added Success")}>
              <View style={styles.btn}>
                <Text style={styles.btnText}>Invite Employer</Text>
              </View>
            </PrimaryButton>
          </View>
        </View>
      </AccountPage>
    </View>
  );
};

export default AddEmployee;

const styles = StyleSheet.create({
  formContainer: {
    paddingVertical: "10%",
  },
  inputContainer: {
    marginBottom: "8%",
  },
  btnContainer: {
    borderRadius: 10,
    overflow: "hidden",
  },
  btn: {
    height: 46,
    alignItems: "center",
    justifyContent: "center",
  },
  btnText: {
    fontSize: 20,
    fontWeight: 700,
    color: "#fff",
  },
});
