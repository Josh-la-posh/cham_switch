import { View, Text, StyleSheet } from "react-native";
import WorkingDays from "../../../CompanySetup/WorkingDays";
import PrimaryButton from "../../../../components/UI/PrimaryButton";
import WorkDay from "./WorkingDays";
import { useContext } from "react";
import { AuthContext } from "../../../../context/AuthContext";

const SettingForWorkingDays = ({ navigation }) => {
  const { role } = useContext(AuthContext);
  return (
    <View
      style={{ width: "100%", alignItems: "center", justifyContent: "center" }}
    >
      {role === "hr" ? <WorkingDays /> : <WorkDay />}

      <View>
        <View style={styles.btnContainer}>
          <PrimaryButton
            onPress={() => {
              role === "hr"
                ? navigation.navigate("Add Official Holidays")
                : console.log(role);
            }}
            btnStyle={styles.btnStyle}
          >
            <Text style={styles.btnText}>Continue</Text>
          </PrimaryButton>
        </View>
      </View>
    </View>
  );
};

export default SettingForWorkingDays;

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
