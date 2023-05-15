import { View, Text, StyleSheet, ScrollView, Pressable } from "react-native";
import { TextInput } from "react-native-paper";
import CompanySetupLayout from "../../components/CompanySetupLayout";
import SwitchToggle from "../../components/UI/switch";
import { useNavigation } from "@react-navigation/native";

const LeaveType = () => {
  const navigation = useNavigation();
  const leaveType = ["Sick Leave", "Casual Leave", "Annual Leave"];
  return (
    <View style={styles.container}>
      <CompanySetupLayout title="Leave Types">
        <ScrollView
          style={styles.contentContainer}
          showsVerticalScrollIndicator={false}
        >
          {leaveType.map((leave, index) => {
            return (
              <View key={index} style={styles.content}>
                <View style={styles.switch}>
                  <SwitchToggle />
                </View>
                <View style={styles.textContainer}>
                  <Text style={styles.leaveText}>{leave}</Text>
                  <TextInput
                    keyboardType="numeric"
                    style={styles.inputField}
                    maxLength={2}
                  />
                  <Text style={styles.leaveText}>days pey year</Text>
                </View>
              </View>
            );
          })}
        </ScrollView>
        <Pressable
          onPress={() => {
            navigation.navigate("Leave Type");
          }}
        >
          <Text style={styles.addBtn}>Add another Leave type</Text>
        </Pressable>
      </CompanySetupLayout>
    </View>
  );
};

export default LeaveType;

const styles = StyleSheet.create({
  container: {
    width: "98%",
  },
  contentContainer: {
    minHeight: 250,
    maxHeight: "75%",
    marginTop: "-5%",
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "10%",
  },
  textContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  leaveText: {
    fontSize: 19,
    fontWeight: 700,
    color: "#8B8686",
  },
  inputField: {
    backgroundColor: "transparent",
    borderBottomWidth: 1,
    borderColor: "#000",
    height: 20,
    marginHorizontal: 8,
    width: "18%",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "700",
  },
  addBtn: {
    color: "#1B4760",
    fontSize: 20,
    fontWeight: 600,
    textAlign: "center",
    marginTop: "5%",
  },
});
