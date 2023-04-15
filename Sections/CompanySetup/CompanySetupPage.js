import { useState } from "react";
import { View, StyleSheet } from "react-native";
import MappedData from "../../components/MappedData";
import LeaveType from "./LeaveType";
import WorkingDays from "./WorkingDays";

const CompanySetupPage = () => {
  const [page, setPage] = useState(0);
  const data = [<WorkingDays />, <LeaveType />];
  return (
    <View style={styles.container}>
      <MappedData data={data} page={page} />
      {data[page]}
    </View>
  );
};

export default CompanySetupPage;

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        paddingTop: '17%'
    },
})
