import { View, Text, StyleSheet } from "react-native";
import React from "react";

const LeaveDays = () => {
  const leaves = [
    {
      title: "Maternity",
      days: 30,
    },
    {
      title: "Casual",
      days: 10,
    },
    {
      title: "Sick",
      days: 10,
    },
  ];
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Leave types for employees</Text>
      <View style={styles.days}>
        {leaves.map((day, index) => {
          return (
            <View style={styles.day}>
              <Text key={index} style={styles.dayText}>
                {day.title} Leave - {day.days} Days
              </Text>
            </View>
          );
        })}
      </View>
    </View>
  );
};

export default LeaveDays;

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
    marginBottom: "12%",
  },
  dayText: {
    fontWeight: "700",
    fontSize: 30,
    color: "#8b8686",
    textAlign: "center",
    lineHeight: 37.65,
  },
});
