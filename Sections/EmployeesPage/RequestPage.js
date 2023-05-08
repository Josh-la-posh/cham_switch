import { View, Text, StyleSheet } from "react-native";
import { COLORS } from "../../constants";

const RequestPage = () => {
  return (
    <View>
      <Text style={styles.heading}>PENDING</Text>
      <View>
        <Text style={styles.vacRequest}>No pending vacation requests</Text>
      </View>
      <Text style={styles.heading}>HISTORY</Text>
      <View style={styles.historyContainer}>
        <View>
          <Text style={styles.days}>
            4 Days off <Text style={styles.status}> accepted</Text>
          </Text>
          <Text style={styles.day}>2nd Feb, 2023</Text>
          <Text style={styles.day}>6th Feb, 2023</Text>
        </View>
        <View>
          <Text style={styles.view}>View</Text>
        </View>
      </View>
    </View>
  );
};

export default RequestPage;

const styles = StyleSheet.create({
  heading: {
    fontSize: 25,
    fontWeight: "700",
    color: COLORS.colorSecondaryLight,
    marginBottom: 15,
    paddingLeft: 24,
  },
  vacRequest: {
    fontSize: 25,
    color: COLORS.placeholderText,
    backgroundColor: "#fff",
    fontWeight: "700",
    paddingVertical: 15,
    paddingHorizontal: 29,
    marginBottom: 30
  },
  historyContainer: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
    paddingHorizontal: 24,
    paddingVertical: 17,
    backgroundColor: "#fff",
  },
  days: {
    fontSize: 25,
    fontWeight: "700",
  },
  status: {
    color: "green",
    marginLeft: 15,
  },
  day: {
    fontSize: 19,
    fontWeight: "600",
    marginTop: 7,
  },
  view: {
    fontSize: 20,
    fontWeight: "700",
    color: COLORS.dangerBtnColor,
  },
});
