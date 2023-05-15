import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  Image,
} from "react-native";
import { COLORS } from "../../constants";

const Employees = ({ navigation }) => {
  const employees = [
    {
      id: 1,
      name: "Tabitha",
      title: "Product Designer",
      casualLeave: 0,
      sickLeave: 3,
      annualLeave: 21,
      maternityLeave: 20,
    },
  ];
  return (
    <View style={styles.container}>
      <View style={styles.inputFieldContainer}>
        <TextInput style={styles.inputField} placeholder="All Employees" />
      </View>

      <View style={styles.contentContainer}>
        {employees.length ? (
          employees.map((employee) => {
            return (
              <View key={employee.id} style={styles.employeeDetailContaier}>
                <View>
                  <Text style={styles.name}>{employee.name}</Text>
                  <Text style={styles.title}>{employee.title}</Text>
                  <Text style={styles.leave}>
                    Casual Leave: {employee.casualLeave}/14
                  </Text>
                  <Text style={styles.leave}>
                    Sick Leave: {employee.sickLeave}/7
                  </Text>
                  <Text style={styles.leave}>
                    Maternity Leave: {employee.maternityLeave}/30
                  </Text>
                  <Text style={styles.leave}>
                    Annual Leave: {employee.annualLeave}/365
                  </Text>
                </View>
                <View style={styles.rightSection}>
                  <Image source={require("../../assets/images/img-1.png")} />
                  <Pressable
                    onPress={() => navigation.navigate("Employee Account")}
                  >
                    <Text style={styles.linkText}>View all</Text>
                  </Pressable>
                </View>
              </View>
            );
          })
        ) : (
          <View>
            <Text style={styles.noEmployee}>
              You have no employee on the list.
            </Text>
          </View>
        )}
      </View>

      <View style={styles.btnContainer}>
        <Pressable
          style={styles.btn}
          onPress={() => navigation.navigate("Add Employee")}
        >
          <Text style={styles.btnText}>Invite Employee</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Employees;

const styles = StyleSheet.create({
  // container: { alignItems: "center", width: '100%' },
  inputFieldContainer: {
    width: "100%",
    height: "15%",
    backgroundColor: "#EEE9E9",
    paddingTop: 21,
    paddingBottom: 13,
    paddingHorizontal: 26,
  },
  inputField: {
    borderRadius: 15,
    backgroundColor: "#fff",
    height: "100%",
    padding: 15,
    fontSize: 25,
    fontWeight: "700",
  },
  contentContainer: {
    paddingLeft: 43,
    paddingTop: 43,
    alignItems: "center",
    height: "75%",
    marginBottom: -10,
  },
  employeeDetailContaier: {
    backgroundColor: COLORS.colorPrimaryDark,
    width: "100%",
    height: 206,
    borderTopLeftRadius: 37,
    borderBottomLeftRadius: 37,
    paddingTop: 26,
    paddingLeft: 40,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  name: {
    fontSize: 25,
    color: "#fff",
    fontWeight: "700",
    marginBottom: "15%",
  },
  title: {
    fontSize: 15,
    color: "#fff",
    fontWeight: "400",
    marginBottom: "10%",
  },
  leave: {
    color: "#fff",
    fontWeight: "400",
    fontSize: 13,
    marginBottom: "5%",
  },
  rightSection: {
    justifyContent: "space-between",
    alignItems: "center",
    marginRight: "2%",
    paddingBottom: 10,
  },
  linkText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: 600,
  },
  noEmployee: {
    fontSize: 25,
    fontWeight: "700",
    marginTop: "40%",
    color: "#8B8686",
    textAlign: "center",
    paddingHorizontal: "4%",
  },
  btnContainer: {
    width: "100%",
    height: 68,
    alignItems: "center",
  },
  btn: {
    backgroundColor: COLORS.dangerBtnColorPrimary,
    width: 317,
    height: "100%",
    borderRadius: 22,
    alignItems: "center",
    justifyContent: "center",
  },
  btnText: {
    color: "#fff",
    fontSize: 25,
    fontWeight: "700",
  },
});
