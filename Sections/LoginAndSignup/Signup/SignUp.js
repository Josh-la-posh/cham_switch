import { View, Text, StyleSheet, ScrollView } from "react-native";
import Input from "../../../components/UI/input";
import PrimaryButton from "../../../components/UI/PrimaryButton";

const SignUp = ({ navigation }) => {
  return (
    <ScrollView style={{ paddingBottom: 30 }}>
      <View style={{ paddingTop: 22 }}>
        <View>
          <Input
            placeholder="Firstname"
            containerInput={styles.containerInput}
          ></Input>
        </View>
        <View>
          <Input
            placeholder="Lasttname"
            containerInput={styles.containerInput}
          ></Input>
        </View>
        <View>
          <Input
            placeholder="Email"
            containerInput={styles.containerInput}
          ></Input>
        </View>
        <View>
          <Input
            placeholder="Password"
            containerInput={styles.containerInput}
            keyboardType="password"
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
            // navigation.navigate('On Boarding 1');
          }}
          btnStyle={styles.btnStyle}
        >
          <Text>Sign Up</Text>
        </PrimaryButton>
      </View>
    </ScrollView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  containerInput: {
    marginBottom: 24,
  },
  btnContainer: {
    borderRadius: 10,
    overflow: "hidden",
    marginTop: 22,
  },
  btnStyle: {
    height: 46,
  },
});
