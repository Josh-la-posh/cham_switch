import { View, Text, StyleSheet } from "react-native";
import PrimaryButton from "./UI/PrimaryButton";

const SuccessPage = ({ children, text, btnText, onPress }) => {
  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>{children}</View>
      <Text style={styles.text}>{text}</Text>
      <View style={styles.btnContainer}>
        <PrimaryButton
          onPress={() => {
            navigation.navigate("Confirm Email");
          }}
          btnStyle={styles.btnStyle}
        >
          <Text>Sign Up</Text>
        </PrimaryButton>
      </View>
    </View>
  );
};

export default SuccessPage;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#fff",
    paddingTop: 147,
    alignItems: "center",
    paddingHorizontal: 47,
  },
  text: {
    fontSize: 32,
    fontWeight: 700,
    marginTop: 89,
    marginBottom: 104,
  },
  btnContainer: {
    borderRadius: 10,
    overflow: "hidden",
  },
  btnStyle: {
    // width: 334,
    height: 46,
  },
  btnText: {
    fontSize: 20,
    fontWeight: 700,
  },
});
