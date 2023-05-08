import { useState } from "react";
import {
  View,
  Text,
  Image,
  Pressable,
  StyleSheet,
  TextInput,
} from "react-native";
import { COLORS } from "../../constants";
import BalancePage from "./BalancePage";
import RequestPage from "./RequestPage";

function EmployeeAccount() {
  const [page, setPage] = useState(0);
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.imgContainer}>
          <Image />
        </View>
        <Text style={styles.name}>Aderonke</Text>
        <Text style={styles.title}>Developer</Text>
        <View style={styles.btns}>
          <Pressable onPress={() => setPage(0)}>
            <View style={[styles.btn, page === 0 ? styles.btnActive : ""]}>
              <Text style={styles.btnText}>Request</Text>
            </View>
          </Pressable>
          <Pressable onPress={() => setPage(1)}>
            <View
              style={[styles.btn, page === 1 ? styles.btnActive : styles.btn]}
            >
              <Text style={styles.btnText}>Balance</Text>
            </View>
          </Pressable>
        </View>
      </View>
      <View style={styles.content}>
        <View style={styles.searchYear}>
          <TextInput
            placeholder="Search year"
            keyboardType="numeric"
            style={styles.yearInput}
          />
        </View>
        {page === 0 ? <RequestPage /> : <BalancePage />}
      </View>
    </View>
  );
}

export default EmployeeAccount;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    // paddingVertical: 20,
  },
  headerContainer: {
    height: "35%",
    backgroundColor: COLORS.colorPrimaryDark,
    borderRadius: 23,
    paddingTop: "10%",
    paddingBottom: 2,
    paddingHorizontal: "5%",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 15,
  },
  imgContainer: {
    height: 120,
    width: 120,
    backgroundColor: "#fff",
    borderRadius: "70%",
  },
  name: {
    fontSize: 25,
    fontWeight: "700",
    color: "#fff",
  },
  title: {
    fontSize: 19,
    fontWeight: "400",
    color: "#fff",
  },
  content: {
    backgroundColor: "yellow",
  },
  btns: {
    flexDirection: "row",
    gap: 14,
  },
  btn: {
    paddingVertical: 12,
    paddingHorizontal: 18,
    borderRadius: 19,
  },
  btnActive: {
    backgroundColor: "#6BD585",
  },
  btnText: {
    textTransform: "uppercase",
    color: "#fff",
    fontSize: 19,
    fontWeight: "600",
  },
  content: {},
  searchYear: {
    marginVertical: 51,
    backgroundColor: "#fff",
    paddingHorizontal: 38,
    marginHorizontal: 38,
    height: 61,
    alignItems: "center",
    justifyContent: "center",
  },
  yearInput: {
    fontSize: 25,
    color: COLORS.placeholderText,
    fontWeight: "700",
  },
});
