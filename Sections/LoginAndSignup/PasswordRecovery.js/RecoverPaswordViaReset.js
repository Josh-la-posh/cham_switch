import { View, Text, StyleSheet } from "react-native";
import AccountPage from "../../../components/AccountPage";
import PrimaryButton from "../../../components/UI/PrimaryButton";
import Input from "../../../components/UI/input";
import { useState } from "react";
import { COLORS } from "../../../constants";

const RecoverPasswordViaReset = ({ navigation }) => {
  const [pwd, setPwd] = useState("");
  const [confirmPwd, setConfirmPwd] = useState("");
  const [err, setErr] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (pwd !== confirmPwd) {
      setErr("Passwords do not Match!");
      setTimeout(() => {
        setErr("");
      }, 3000);
    } else if ((pwd === confirmPwd) & (pwd.length >= 5)) {
      navigation.navigate("Password Reset Successful");
    } else {
      setErr("Passwords must be greater than 4");
      setTimeout(() => {
        setErr("");
      }, 3000);
    }
  };
  return (
    <View>
      <AccountPage title="Recover your password">
        <View>
          <View style={{ marginVertical: 123, position: "relative" }}>
            <View style={{ marginBottom: 44 }}>
              <Input
                placeholder="New Password"
                keyboardType="password"
                value={pwd}
                onChangeText={setPwd}
              ></Input>
            </View>
            <View>
              <Input
                placeholder="Confirm Password"
                keyboardType="password"
                value={confirmPwd}
                onChangeText={setConfirmPwd}
              ></Input>
            </View>
            <View style={styles.errMsgContainer}>
              <Text style={styles.errMsg}>{err}</Text>
            </View>
          </View>
          <View style={styles.btnContainer}>
            <PrimaryButton onPress={handleSubmit} btnStyle={styles.btnStyle}>
              <Text style={styles.btnText}>Done</Text>
            </PrimaryButton>
          </View>
        </View>
      </AccountPage>
    </View>
  );
};

export default RecoverPasswordViaReset;

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    textAlign: "center",
    marginTop: 123,
    marginBottom: 100,
  },
  btnContainer: {
    borderRadius: 10,
    overflow: "hidden",
  },
  btnStyle: {
    height: 46,
  },
  btnText: {
    fontSize: 20,
    fontWeight: 700,
  },
  errMsg: {
    color: COLORS.dangerTextColor,
    fontSize: 20,
    fontWeight: 600,
    // textAlign: 'center'
  },
  errMsgContainer: {
    position: "absolute",
    bottom: "-60%",
    left: "10%",
  },
});
