import LeaveType from "../../Sections/CompanySetup/LeaveType";
import WorkingDays from "../../Sections/CompanySetup/WorkingDays";
<<<<<<< HEAD
import Header from "../../components/HeaderComponent";
=======
>>>>>>> origin

const SettingsPageSreen = (Stack) => {
  return (
    <>
      <Stack.Screen
        name="Custom Settings for Working Days"
        options={{
          headerTitle: () => (
            <Header
              title="Working Days"
              style={{ color: "#000", fontSize: 27, fontWeight: "800" }}
              image={require("../../assets/icons/arrow_left_black.png")}
            />
          ),
          headerTintColor: "transparent",
          headerStyle: {
            backgroundColor: "#fff",
            borderBottomColor: "#000",
            borderBottomWidth: 1,
          },
        }}
        component={WorkingDays}
      />
<<<<<<< HEAD
       <Stack.Screen
        name="Custom Settings for Leave Type"
        options={{
          headerTitle: () => (
            <Header
              title="Leave Types"
              style={{ color: "#000", fontSize: 27, fontWeight: "800" }}
              image={require("../../assets/icons/arrow_left_black.png")}
              imageHeader={require("../../assets/icons/trash_dark.png")}
              imageStyle={{width: "100%", height: "100%", resizeMode: 'contain'}}
            />
          ),
          headerTintColor: "transparent",
          headerStyle: {
            backgroundColor: "#fff",
            borderBottomColor: "#000",
            borderBottomWidth: 1,
          },
        }}
        component={LeaveType}
      />
=======
      <Stack.Screen name="Settings for Leave Type" component={LeaveType} />
>>>>>>> origin
    </>
  );
};

export default SettingsPageSreen;
