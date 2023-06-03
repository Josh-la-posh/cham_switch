import { View, Text, StyleSheet } from "react-native";
import React from "react";

const WorkDay = () => {
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Working days for employees</Text>
      <View style={styles.days}>
        {days.map((day, index) => {
          return (
            <View style={styles.day}>
              <Text key={index} style={styles.dayText}>
                {day}
              </Text>
            </View>
          );
        })}
      </View>
    </View>
  );
};

export default WorkDay;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
  title: {
    marginTop: "18%",
    fontWeight: "400",
    fontSize: 25,
    color: "#f40606",
    marginBottom: "17%",
    textAlign: "center",
  },
  days: {},
  day: {
    marginBottom: "10%",
  },
  dayText: {
    fontWeight: "700",
    fontSize: 30,
    color: "#8b8686",
    textAlign: "center",
    lineHeight: 37.65,
  },
});
