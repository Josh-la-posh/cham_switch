import {
  View,
  Text,
  Image,
  Pressable,
  StyleSheet,
  TextInput,
} from "react-native";
import { COLORS } from "../../constants";
import SelectDropdown from "react-native-select-dropdown";

function LeaveRequest({ navigation }) {
  const leaveType = ["Casual", "Maternity"];
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerContainer}>
          <View style={styles.imgContainer}>
            <Image />
          </View>
          <Text style={styles.name}>Your Request</Text>
          <Text style={styles.name}>Opeyemi</Text>
        </View>
        <Image source={require("../../assets/images/curve-arrow.png")} />
        <View style={styles.headerContainer}>
          <View style={styles.imgContainer}>
            <Image />
          </View>
          <Text style={styles.name}>Approver</Text>
          <Text style={styles.name}>Emmanuel Ojo</Text>
        </View>
      </View>
      <View style={styles.content}>
        <View style={styles.inputContainer}>
          <SelectDropdown
            data={leaveType}
            onSelect={(selectedItem, index) => {
              console.log(selectedItem, index);
            }}
            defaultButtonText={"Select leave type"}
            buttonTextAfterSelection={(selectedItem, index) => {
              return selectedItem;
            }}
            rowTextForSelection={(item, index) => {
              return item;
            }}
            buttonStyle={styles.dropdownStyle}
            buttonTextStyle={styles.dropdownTxtStyle}
            rowStyle={styles.dropdownRowStyle}
            rowTextStyle={styles.dropdown1RowTxtStyle}
          />
        </View>
        <View style={styles.datesContainer}>
          <View style={[styles.inputContainer, styles.dateContainer]}>
            <Text style={[styles.start, styles.dateHeading]}>Start:</Text>
            <Text style={styles.date}>Tue, 2 feb</Text>
          </View>

          <View style={[styles.inputContainer, styles.dateContainer]}>
            <Text style={[styles.end, styles.dateHeading]}>End:</Text>
            <Text style={styles.date}>Tue, 2 feb</Text>
          </View>
        </View>

        <View style={[styles.inputContainer, styles.reason]}>
          <TextInput placeholder="Reason" style={styles.reasonText} />
        </View>

        <View style={styles.btnContainer}>
          <Pressable onPress={() => navigation.navigate("Request Success")}>
            <View style={styles.btn}>
              <Text style={styles.btnText}>Request day off</Text>
            </View>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

export default LeaveRequest;

const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
  header: {
    height: "35%",
    backgroundColor: COLORS.colorPrimaryDark,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    paddingTop: "10%",
    paddingBottom: 2,
    paddingHorizontal: "5%",
  },
  headerContainer: {
    alignItems: "center",
    gap: 12,
  },
  imgContainer: {
    height: 120,
    width: 97,
    backgroundColor: "#fff",
    borderRadius: "70%",
  },
  name: {
    fontSize: 17,
    fontWeight: "700",
    color: "#fff",
  },
  content: {
    paddingHorizontal: 20,
    marginTop: "15%",
  },
  inputContainer: {
    borderWidth: 3,
    borderColor: COLORS.placeholderText,
    height: 67,
    alignItems: "center",
  },
  dropdownStyle: {
    width: "80%",
    height: "100%",
  },
  dropdownTxtStyle: {
    color: COLORS.colorSecondaryLight,
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
  },
  dropdownRowStyle: {
    backgroundColor: "#F5F5F5",
    borderBottomColor: "rgba(0, 0, 0, 0.13)",
    paddingLeft: 20,
    height: 61,
  },
  dropdown1RowTxtStyle: {
    color: "#000",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
  },
  datesContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginTop: "12%",
    marginBottom: "14%",
  },
  dateContainer: {
    width: "45%",
    alignItems: "flex-start",
    justifyContent: "space-around",
    paddingLeft: 20,
  },
  dateHeading: {
    fontSize: 19,
    fontWeight: "700",
    marginLeft: 10,
  },
  start: {
    color: COLORS.colorPrimaryDark,
  },
  end: {
    color: COLORS.dangerTextColor,
  },
  date: {
    fontSize: 17,
    fontWeight: "700",
    color: COLORS.placeholderText,
  },
  reason: {
    height: 80,
    alignItems: "flex-start",
    padding: 25,
  },
  reasonText: {
    fontSize: 19,
    fontWeight: "700",
  },
  btnContainer: {
    alignItems: "center",
    marginTop: 37,
  },
  btn: {
    width: 300,
    height: 65,
    borderWidth: 1,
    borderRadius: 22,
    borderColor: COLORS.colorPrimaryDark,
    alignItems: "center",
    justifyContent: "center",
  },
  btnText: {
    fontSize: 25,
    fontWeight: "700",
    color: COLORS.dangerTextColor,
  },
});
