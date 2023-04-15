import { View, Text, StyleSheet } from "react-native";
import CompanySetupLayout from "../../components/CompanySetupLayout";

const WorkingDays = () => {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return (
    <View>
      <CompanySetupLayout title="Working days">
        {days.map((day, index) => {
          return (
            <View key={index}>
              <Text style={styles.day}>{day}</Text>
            </View>
          );
        })}
      </CompanySetupLayout>
    </View>
  );
};

export default WorkingDays;

const styles = StyleSheet.create({
  day: {
    fontSize: 25,
    fontWeight: 700,
    color: '#8B8686',
    marginBottom: 16
  },
});
