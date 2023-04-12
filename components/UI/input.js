import { TextInput, View, Text, StyleSheet } from "react-native";
import { COLORS } from "../../constants";

const Input = ({ children, textInputConfig, invalid }) => {
  // Setting the default container Style
  const defaultContainerStyle = [
    styles.inputContainer,
    invalid ? styles.inputError : null,
  ];

  return (
    <View style={styles.container}>
      <TextInput
        style={defaultInputStyle}
        {...textInputConfig}
        cursorColor="#000000"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginTop: 22,
    // borderRadius: 10
  },
  inputContainer: {
    // borderColor: COLORS.inputBorder,
    marginTop: 6,
    borderWidth: 1,
    borderRadius: 10,
    textAlign: "center",
  },
  input: {
    flex: 1,
    fontSize: 14,
    marginHorizontal: 5,
  },
  inputError: {
    fontSize: 14,
    backgroundColor: "#d49b9b",
  },
});
export default Input;
