import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
  Image,
} from "react-native";
import { TextInput } from "react-native-paper";
import CompanySetupLayout from "../../components/CompanySetupLayout";
import SwitchToggle from "../../components/UI/switch";
import { useNavigation } from "@react-navigation/native";
<<<<<<< HEAD
import { useState } from "react";

const LeaveType = () => {
  const navigation = useNavigation();
  const [days, setDays] = useState(5);
  const leaveType = [
    {
      name: "Sick Leave",
      days: `${days}`,
    },
    {
      name: "Casual Leave",
      days: "143",
    },
    {
      name: "Annual Leave",
      days: "6",
    },
  ];
  const handleClickForDays = (e) => {
    setDays(e.target.value);
    console.log(e);
  };
=======

const LeaveType = () => {
  const navigation = useNavigation();
  const leaveType = ["Sick Leave", "Casual Leave", "Annual Leave"];
>>>>>>> 1f303af12fce8a27d6b5f1d74e9e9733dd380a4f
  return (
    <View style={styles.container}>
      <CompanySetupLayout title="Leave Types">
        <ScrollView
          style={styles.contentContainer}
          showsVerticalScrollIndicator={false}
        >
          {leaveType.map(({ name, days }, index) => {
            return (
              <View key={index} style={styles.content}>
                <View style={styles.switch}>
                  <SwitchToggle />
                </View>
                <View style={styles.textContainer}>
                  <Text style={styles.leaveText}>{name}</Text>
                  <TextInput
                    keyboardType="numeric"
                    style={styles.inputField}
                    maxLength={2}
                    value={days}
                    onChange={(e) => setDays(e.target.value)}
                  />
                  <Text style={styles.leaveText}>days per year</Text>
                </View>
                <Pressable onPress={handleClickForDays}>
                  <Image
                    source={require("../../assets/icons/edit.png")}
                    style={styles.editImg}
                  />
                </Pressable>
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
    paddingHorizontal: "1%",
    flex: 1,
  },
  contentContainer: {
    minHeight: 250,
    maxHeight: "75%",
    marginTop: "-5%",
    // flex: 1,
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "10%",
    paddingHorizontal: "2%",
  },
  switch: {
    // width: "15%",
    flex: 1,
  },
  textContainer: {
    flexDirection: "row",
    flex: 5,
    width: "60%",
  },
  leaveText: {
    fontSize: 16,
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
    fontSize: 18,
    fontWeight: "700",
    padding: 0,
  },
  editImg: {
    tintColor: "black",
    height: 30,
    flex: 1,
  },
  addBtn: {
    color: "#1B4760",
    fontSize: 20,
    fontWeight: 600,
    textAlign: "center",
    marginTop: "5%",
  },
});
