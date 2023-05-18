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
import { useState } from "react";

const LeaveType = () => {
  const navigation = useNavigation();
  const [days, setDays] = useState(5);
  const leaveType = [
    {
      name: "Sick Leave",
      days: `${days}`,
    },
    // {
    //   name: "Casual Leave",
    //   days: "1",
    // },
    // {
    //   name: "Annual Leave",
    //   days: "6",
    // },
  ];
  const handleClickForDays = (e) => {
    setDays(e.target.value);
    console.log(e);
  };
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
                  <Text style={styles.leaveText}>days pey year</Text>
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
    paddingHorizontal: "2%",
  },
  textContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  leaveText: {
    fontSize: 18,
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
  },
  editImg: {
    tintColor: "black",
    height: 30,
  },
  addBtn: {
    color: "#1B4760",
    fontSize: 20,
    fontWeight: 600,
    textAlign: "center",
    marginTop: "5%",
  },
});
