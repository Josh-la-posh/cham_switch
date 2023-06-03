import { View, Text, StyleSheet } from "react-native";
import LeaveType from "../../../CompanySetup/LeaveType";
import PrimaryButton from "../../../../components/UI/PrimaryButton";
import LeaveDays from "./LeaveType";
import { useContext } from "react";
import { AuthContext } from "../../../../context/AuthContext";

const SettingForLeaveTypes = ({ navigation }) => {
  const { role } = useContext(AuthContext);
  return (
    <View
      style={{ width: "100%", alignItems: "center", justifyContent: "center" }}
    >
      {role === "hr" ? <LeaveType /> : <LeaveDays />}

      <View>
        <View style={styles.btnContainer}>
          <PrimaryButton
            onPress={() => {role === 'hr' ? navigation.navigate("Add Official Holidays") : {}}}
            btnStyle={styles.btnStyle}
          >
            <Text style={styles.btnText}>
              {role === "hr" ? "Continue" : "Okay. Got It!"}
            </Text>
          </PrimaryButton>
        </View>
      </View>
    </View>
  );
};

export default SettingForLeaveTypes;

const styles = StyleSheet.create({
  btnContainer: {
    width: "60%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    overflow: "hidden",
  },
  btnStyle: {
    width: 334,
    height: 46,
  },
  btnText: {
    fontSize: 20,
    fontWeight: 700,
  },
});
