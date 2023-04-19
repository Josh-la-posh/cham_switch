import { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import MappedData from "../../components/MappedData";
import LeaveType from "./LeaveType";
import WorkingDays from "./WorkingDays";

import PrimaryButton from "../../components/UI/PrimaryButton";

const CompanySetupPage = () => {
  const [page, setPage] = useState(0);
  const data = [<WorkingDays />, <LeaveType />];
  return (
    <View style={styles.container}>
      <MappedData data={data} page={page} style={{alignItems: 'center'}} />
      {data[page]}

       <View style={styles.btnContainer}>
          <PrimaryButton
            onPress={() => setPage(1)}
            btnStyle={styles.btnStyle}
          >
            <Text style={styles.btnText}>Continue</Text>
          </PrimaryButton>
        </View>
    </View>
  );
};

export default CompanySetupPage;

const styles = StyleSheet.create({
    container: {      
      width: '100%',
      // justifyContent: 'center',
      alignItems: 'center',
      padding: '17%'
    },
    btnContainer: {
      borderRadius: 19,
      marginBottom: 32,
      overflow: "hidden",
      width: 334
    },
    btnStyle: {
      width: '100%',
      height: 46,
    },   
    btnText: {
      fontSize: 20,
      fontWeight: 700,
    },
})
