import { View, Text, TextInput, StyleSheet } from "react-native";
import PrimaryButton from "../../components/UI/PrimaryButton";

const AddLeaveType = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Add Leave Type</Text>
      <View style={styles.inputContainer}>
        <TextInput style={styles.inputField} placeholder="Leave type" />
        <TextInput style={styles.inputField} placeholder="days" key="numeric" />
      </View>
      <View style={styles.btnContainer}>
        <PrimaryButton>
          <Text>Continue</Text>
        </PrimaryButton>
      </View>
    </View>
  );
};

export default AddLeaveType;

const styles = StyleSheet.create({
  container: {},
  heading: {
      fontSize: 25,
      fontWeight: 600,
      color: '#1B4760',
  },
  inputContainer: {},
  inputField: {
      borderWidth: 1,
  },
  btnContainer: {}
});
