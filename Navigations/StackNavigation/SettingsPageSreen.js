import LeaveType from "../../Sections/CompanySetup/LeaveType";
import WorkingDays from "../../Sections/CompanySetup/WorkingDays";
import Header from "../../components/HeaderComponent";
import ProfilePage from "../../Sections/EmployeesPage/SettingsPage/Profile/ProfilePage";

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
      <Stack.Screen
        name="Custom Settings for Leave Type"
        options={{
          headerTitle: () => (
            <Header
              title="Leave Type"
              style={{ color: "#000", fontSize: 27, fontWeight: "800" }}
              image={require("../../assets/icons/arrow_left_black.png")}
              icon2={require("../../assets/icons/trash_dark.png")}
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
      <Stack.Screen
        name="Profile Page"
        options={{
          headerShown: false,
        }}
        component={ProfilePage}
      />
    </>
  );
};

export default SettingsPageSreen;
