import { View, Text, Image, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS } from "../../../constants";
import PrimaryButton from "../../../components/UI/PrimaryButton";

const CalendarDetails = ({ route }) => {
  const id = route.params.id;
  const name = route.params.name;
  const title = route.params.title;
  const start = route.params.start;
  const end = route.params.end;
  const reason = route.params.reason;
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View key={id} style={styles.employeeDetailContaier}>
          <View style={styles.imgContainer}>
            <Image
              style={styles.image}
              source={require("../../../assets/images/img-1.png")}
            />
          </View>
          <View style={styles.textContainer}>
            <View>
              <Text style={styles.name}>{name}</Text>
              <Text style={styles.title}>{title}</Text>
              <Text style={styles.date}>{start}</Text>
              <Text style={styles.date}>{end}</Text>
            </View>
            <View style={styles.rightSection}>
              <Text style={styles.dayOff}>3 Days off</Text>
            </View>
            <Image
              source={require("../../../assets/icons/arrow_down.png")}
              style={styles.icon}
            />
          </View>
        </View>
        <View style={styles.reasonContainer}>
          <Text style={styles.reasonTitle}>REASON</Text>
          <Text style={styles.reason}>{reason}</Text>
        </View>
        <View style={styles.reasonContainer}>
          <Text style={styles.reasonTitle}>Employee Balance</Text>

          <Text style={styles.reason}>{reason}</Text>
        </View>
        <View style={styles.btnContainer}>
          <PrimaryButton
          //   onPress={() => navigation.navigate("Added Success")}
          >
            <View style={styles.btn}>
              <Text style={styles.btnText}>Okay, Got it!</Text>
            </View>
          </PrimaryButton>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default CalendarDetails;

const styles = StyleSheet.create({
  container: {
    padding: "5%",
    alignItems: "center",
  },
  employeeDetailContaier: {
    gap: "30%",
    flexDirection: "row",
  },
  imgContainer: {
    flex: 1,
    width: 80,
    height: 80,
    alignItems: "center",
    justifyContent: "center",
  },
  textContainer: {
    flex: 3,
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
  },
  name: {
    fontSize: 25,
    fontWeight: "800",
    marginBottom: "12%",
  },
  title: {
    fontSize: 19,
    fontWeight: "300",
  },
  date: {
    fontWeight: 600,
    fontSize: 19,
    marginTop: 7,
  },
  icon: {
    position: "absolute",
    bottom: "5%",
    left: "-8%",
  },
  dayOff: {
    fontWeight: 700,
    fontSize: 20,
    color: "#F40909",
  },
  reasonContainer: {
    marginTop: 50,
  },
  reasonTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#8B8686",
  },
  reason: {
    fontWeight: "700",
    fontSize: 20,
    marginTop: 25,
  },
  btnContainer: {
    borderRadius: 10,
    width: 300,
    overflow: "hidden",
    marginTop: "20%",
  },
  btn: {
    height: 46,
    alignItems: "center",
    justifyContent: "center",
  },
  btnText: {
    fontSize: 20,
    fontWeight: 700,
    color: "#fff",
  },
});
