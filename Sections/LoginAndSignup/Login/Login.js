import { View, Text, StyleSheet, Pressable } from "react-native";
import Input from "../../../components/UI/input";
import PrimaryButton from "../../../components/UI/PrimaryButton";
import { COLORS } from "../../../constants";

const Login = ({ navigation }) => {
  return (
    <View>
      <View>
        <View>
          <Input
            placeholder="Firstname"
            containerInput={styles.containerInput}
          ></Input>
        </View>
        <View>
          <Input placeholder="Password" keyboardType="password"></Input>
        </View>
      </View>
      <View style={styles.btnContainer}>
        <PrimaryButton
          onPress={() => {
            // navigation.navigate("On Boarding 1");
          }}
          btnStyle={styles.btnStyle}
        >
          <Text style={styles.btnText}>Login</Text>
        </PrimaryButton>
      </View>
      <View style={{ marginTop: 44 }}>
        <Pressable
          onPress={() => {
            navigation.navigate("Recover Password");
          }}
        >
          <Text style={styles.reset}>Forgot Password?</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  containerInput: {
    marginTop: 24,
    marginBottom: 44,
  },
  btnContainer: {
    borderRadius: 10,
    overflow: "hidden",
    marginTop: 87,
  },
  btnStyle: {
    height: 46,
  },
  btnText: {
    fontSize: 20,
    fontWeight: 700
  },
  reset: {
    color: COLORS.dangerBtnColor,
    textAlign: "center",
    fontSize: 20,
    fontWeight: 600,
  },
});
