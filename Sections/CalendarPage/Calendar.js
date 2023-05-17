import {
  Text,
  View,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  ScrollView,
  Image
} from "react-native";
import { useState } from "react";
import DatePicker from "react-native-modern-datepicker";
import { getFormatedDate } from "react-native-modern-datepicker";

const Calendar = () => {
  const [openStartDatePicker, setOpenStartDatePicker] = useState(false);
  const today = new Date();
  const startDate = getFormatedDate(
    today.setDate(today.getDate() + 1),
    "YYYY/MM/DD"
  );
  const [selectedStartDate, setSelectedStartDate] = useState("");
  const [startedDate, setStartedDate] = useState("12/12/2023");

  function handleChangeStartDate(propDate) {
    setStartedDate(propDate);
  }

  const handleOnPressStartDate = () => {
    setOpenStartDatePicker(!openStartDatePicker);
  };

  const employees = [
    {
      id: 1,
      name: "Tabitha",
      title: "Product Designer",
      casualLeave: 0,
      sickLeave: 3,
      maternityLeave: 20,
    },
  ];

  return (
    <ScrollView>
        <View style={{ flex: 1, alignItems: "center" }}>

        
               <View style={{width: '100%', display: 'flex', alignItems: 'center', paddingLeft: '2%', paddingRight: '2%', margin: 0}}>
                 <DatePicker
                  mode="calendar"
                  minimumDate={startDate}
                  selected={startedDate}
                  onDateChanged={handleChangeStartDate}
                  onSelectedChange={(date) => setSelectedStartDate(date)}
                  options={{
                    backgroundColor: "#fff",
                    textHeaderColor: "#000",
                    textDefaultColor: "#080516",
                    selectedTextColor: "#080516",
                    mainColor: "orange",
                    textSecondaryColor: "#080516",
                    borderColor: "rgba(122, 146, 165, 0.1)",
                  }}
                />

              <TouchableOpacity onPress={handleOnPressStartDate}> 
                  <Text style={{ color: "white" }}>Close</Text>
                </TouchableOpacity> 
            </View>
              <View style={{width: '100%', display: 'flex', alignItems: 'flex-start', paddingLeft: '5%', paddingRight: '2%', marginTop: "3%" }}>                
                <TouchableOpacity
                  style={styles.inputBtn}
                  onPress={handleOnPressStartDate}
                >
                  <Text style={{ fontSize: 18, fontWeight: 800, }}>{selectedStartDate}</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.contentContainer}>
                {employees.length ? (
                  employees.map((employee) => {
                    return (
                      <View key={employee.id} style={styles.employeeDetailContaier}>
                        <View styles={styles.imgContainer}>
                          <Image style={styles.image} source={require('../../assets/images/img-1.png')}/>
                        </View>
                        <View styles={{ width: "70%", marginLeft: 20}}>
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
                          </View>
                          <View style={styles.rightSection}>                          
                            <Text style={{color: "red"}}>3 Days off</Text>
                            <Text style={{color: "green"}}>Schedule</Text>
                          </View>
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
             </View>                  
     </ScrollView>
  )
}

export default Calendar

const styles = StyleSheet.create({
  // textHeader: {
  //   fontSize: 36,
  //   marginVertical: 60,
  //   color: "#111",
  // },
  // textSubHeader: {
  //   fontSize: 25,
  //   color: "#111",
  // },
  // inputBtn: {
  //   borderWidth: 1,
  //   borderRadius: 4,
  //   borderColor: "#222",
  //   height: 50,
  //   paddingLeft: 8,
  //   fontSize: 18,
  //   justifyContent: "center",
  //   marginTop: 14,
  // },
  // submitBtn: {
  //   backgroundColor: "#342342",
  //   paddingVertical: 22,
  //   alignItems: "center",
  //   justifyContent: "center",
  //   borderRadius: 8,
  //   paddingVertical: 12,
  //   marginVertical: 16,
  // },
  // centeredView: {
  //   flex: 1,
  //   alignItems: "center",
  //   justifyContent: "center",
  // },
  // modalView: {
  //   margin: 20,
  //   backgroundColor: "#080516",
  //   alignItems: "center",
  //   justifyContent: "center",
  //   borderRadius: 20,
  //   padding: 35,
  //   width: "90%",
  //   shadowColor: "#000",
  //   shadowOffset: {
  //     width: 0,
  //     height: 2,
  //   },
  //   shadowOpacity: 0.25,
  //   shadowRadius: 4,
  //   elevation: 5,
  // },
  contentContainer: {
    // paddingLeft: 43,
    // paddingTop: 43,
    marginTop: 43,
    alignItems: 'center',
    height: "75%",
    width: "100%",
  },
  employeeDetailContaier: {
    backgroundColor: "white",
    display: "flex",
    width: "100%",
    padding: 10,
    flexDirection: "row",
    // justifyContent: "center",
    // height: 206,
    // borderTopLeftRadius: 37,
    // borderBottomLeftRadius: 37,
    // paddingTop: 26,
    // paddingLeft: 40,
  },
  // name: {
  //   fontSize: 25,
  //   color: "#fff",
  //   fontWeight: "700",
  //   marginBottom: "15%",
  // },
  // title: {
  //   fontSize: 15,
  //   color: "#fff",
  //   fontWeight: "400",
  //   marginBottom: "10%",
  // },
  // leave: {
  //   color: "#fff",
  //   fontWeight: "400",
  //   fontSize: 13,
  //   marginBottom: "5%",
  // },
  rightSection: {
    marginTop: 14,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  imgContainer: {
    width: 75,
    height: 75,
    // height: 110,
    // width: 110,
    alignItems: "center",
    justifyContent: 'center',
  },
  image: {
   marginRight: "5%",
  //  width: "100%",
  //  height: "100%",
  },
  // noEmployee: {
  //   fontSize: 25,
  //   fontWeight: "700",
  //   marginTop: "40%",
  //   color: "#8B8686",
  //   textAlign: "center",
  //   paddingHorizontal: "4%",
  // },
});
