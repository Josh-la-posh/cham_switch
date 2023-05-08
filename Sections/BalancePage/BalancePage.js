import { View, Text, StyleSheet, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { COLORS } from "../../constants";
import PrimaryButton from "../../components/UI/PrimaryButton";

const BalancePage = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {/* YEAR */}

      <View style={styles.searchYear}>
        <TextInput
          placeholder="Search year"
          keyboardType="numeric"
          style={styles.yearInput}
        />
      </View>

      {/* TABLE */}

      <View style={styles.leaves}>
        <View style={styles.leave}>
          <View style={styles.leaveTextContainer}>
            <Text style={styles.leaveText}>0/14</Text>
          </View>
          <Text style={styles.leaveText}>Maternity</Text>
        </View>
        <View style={styles.leave}>
          <View style={styles.leaveTextContainer}>
            <Text style={styles.leaveText}>3/14</Text>
          </View>
          <Text style={styles.leaveText}>Casual</Text>
        </View>
      </View>

      {/* PENDING REQUEST */}

      <Text style={styles.heading}>PENDING</Text>
      <View>
        <Text style={styles.vacRequest}>No pending vacation requests</Text>
      </View>

      {/* HISTORY */}

      <Text style={styles.heading}>HISTORY</Text>
      <View style={styles.historyContainer}>
        <View>
          <Text style={styles.days}>4 Days off</Text>
          <Text style={styles.day}>2nd Feb, 2023</Text>
          <Text style={styles.day}>6th Feb, 2023</Text>
        </View>
        <View>
          <Text style={styles.status}>accepted</Text>
        </View>
      </View>
      <View style={styles.btnContainer}>
        <PrimaryButton
          onPress={() => navigation.navigate("Leave Request")}
          btnContainer={styles.btn}
        >
          <Text style={styles.btnText}>Request day off</Text>
        </PrimaryButton>
      </View>
    </View>
  );
};

export default BalancePage;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    height: "100%",
  },
  searchYear: {
    marginTop: 12,
    paddingHorizontal: 38,
    paddingVertical: 19,
    height: 99,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#D9D9D9",
  },
  yearInput: {
    width: "100%",
    height: "100%",
    fontSize: 25,
    color: COLORS.placeholderText,
    backgroundColor: "#fff",
    fontWeight: "700",
    textAlign: "center",
  },
  leaves: {
    flexDirection: "row",
    justifyContent: "center",
    gap: "35%",
    marginVertical: 16,
  },
  leave: {
    alignItems: "center",
    justifyContent: "center",
    width: 170,
    height: 148,
    borderWidth: 5,
    borderColor: "#808080",
    borderRadius: 15,
    gap: 12,
  },
  leaveTextContainer: {
    borderColor: COLORS.colorPrimaryDark,
    borderWidth: 15,
    width: 88,
    height: 92,
    borderRadius: "70%",
    alignItems: "center",
    justifyContent: "center",
  },
  leaveText: {
    fontSize: 15,
    fontWeight: "700",
  },
  heading: {
    fontSize: 25,
    fontWeight: "700",
    color: COLORS.colorSecondaryLight,
    marginBottom: 7,
    paddingLeft: 30,
  },
  vacRequest: {
    fontSize: 25,
    color: COLORS.placeholderText,
    backgroundColor: "#fff",
    fontWeight: "700",
    paddingVertical: 15,
    paddingHorizontal: 30,
    marginBottom: 30,
  },
  historyContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 30,
    paddingVertical: 17,
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#F2EEEE",
  },
  days: {
    fontSize: 25,
    fontWeight: "700",
  },
  status: {
    color: COLORS.colorPrimaryDark,
    marginLeft: 15,
    fontSize: 19,
    fontWeight: "700",
  },
  day: {
    fontSize: 19,
    fontWeight: "600",
    marginTop: 7,
  },
  btnContainer: {
    alignItems: "center",
    height: 65,
    overflow: "hidden",
    marginTop: 10,
  },
  btn: {
    height: "100%",
    width: 300,
    borderRadius: 22,
    justifyContent: "center",
  },
  btnText: {
    fontSize: 25,
    fontWeight: "700",
    color: "#fff",
  },
});
