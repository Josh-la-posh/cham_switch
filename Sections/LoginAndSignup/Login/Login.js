import { View, Text, StyleSheet, Pressable } from "react-native";
import Input from "../../../components/UI/input";
import PrimaryButton from "../../../components/UI/PrimaryButton";
import { COLORS } from "../../../constants";

const Login = ({ navigation }) => {
  return (
    <View style={{height: '100%'}}>
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
            navigation.navigate("Company Setup");
          }}
          btnStyle={styles.btnStyle}
        >
          <Text style={styles.btnText}>Login</Text>
        </PrimaryButton>
      </View>
      <View style={{ marginTop: '10%' }}>
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
    marginTop: '5%',
    marginBottom: '12%',
  },
  btnContainer: {
    borderRadius: 10,
    overflow: "hidden",
    marginTop: '20%',
  },
  btnStyle: {
    height: 46,
  },
  btnText: {
    fontSize: 20,
    fontWeight: 700,
  },
  reset: {
    color: COLORS.dangerBtnColor,
    textAlign: "center",
    fontSize: 20,
    fontWeight: 600,
  },
});
