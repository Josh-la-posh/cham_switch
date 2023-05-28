import OfficialHolidays from "../../Sections/EmployeesPage//SettingsPage/Holidays/OfficialHolidays";
import OfficialHolidaysSuccessful from "../../Sections/EmployeesPage//SettingsPage/Holidays/OfficialHolidaysSuccessful";
import PushBroadcast from "../../Sections/EmployeesPage//SettingsPage/PushBroadcast";
import PushBroadcastSuccessful from "../../Sections/EmployeesPage//SettingsPage/PushBroadcastSuccessful";
import SettingsPage from "../../Sections/EmployeesPage//SettingsPage/Settings/SettingsPage";
import Header from "../../components/HeaderComponent";

const SettingsSreen = (Stack) => {
  return (
    <>
      <Stack.Screen
        name="Push Broadcast"
        options={{
          headerTitle: () => (
            <Header
              title="Push Broadcast"
              style={{ color: "#fff", fontSize: 27, fontWeight: "800" }}
<<<<<<< HEAD:Navigations/StackNavigation/SettingsSreen.js
<<<<<<< HEAD
              image={require("../../assets/icons/arrow_left.png")}
=======
>>>>>>> origin
=======
              image={require("../../assets/icons/arrow_left.png")}
>>>>>>> origin:src/Navigations/StackNavigation/SettingsSreen.js
            />
          ),
          headerTintColor: "transparent",
          headerStyle: {
            backgroundColor: "#8DC2A9",
            borderBottomColor: "#FFF",
            borderBottomWidth: 1,
          },
        }}
        component={PushBroadcast}
      />
      <Stack.Screen
        name="Sent Successfully"
        options={{ headerShown: false }}
        component={PushBroadcastSuccessful}
      />
      <Stack.Screen
        name="Official Holidays Home"
        options={{
          headerTitle: () => (
            <Header
              title="Official Holidays"
              style={{ color: "#000", fontSize: 27, fontWeight: "800" }}
              image={require("../../assets/icons/arrow_left_black.png")}
            />
          ),
          headerTintColor: "transparent",
<<<<<<< HEAD:Navigations/StackNavigation/SettingsSreen.js
<<<<<<< HEAD
=======
>>>>>>> origin:src/Navigations/StackNavigation/SettingsSreen.js
          headerStyle: {
            backgroundColor: "#fff",
            borderBottomColor: "#000",
            borderBottomWidth: 1,
          },
<<<<<<< HEAD:Navigations/StackNavigation/SettingsSreen.js
=======
          headerTitleStyle: { color: "black", fontSize: "25%" },
          headerStyle: { backgroundColor: "white" },
>>>>>>> origin
=======
>>>>>>> origin:src/Navigations/StackNavigation/SettingsSreen.js
        }}
        component={OfficialHolidays}
      />
      <Stack.Screen
        name="Official Holidays Successful"
        options={{ headerShown: false }}
        component={OfficialHolidaysSuccessful}
      />
      <Stack.Screen
        name="Settings Page"
        options={{
<<<<<<< HEAD:Navigations/StackNavigation/SettingsSreen.js
<<<<<<< HEAD
=======
>>>>>>> origin:src/Navigations/StackNavigation/SettingsSreen.js
          headerTitle: () => (
            <Header
              title="Settings"
              style={{ color: "#000", fontSize: 27, fontWeight: "400" }}
              image={require("../../assets/icons/arrow_left_black.png")}
              imageHeader={require("../../assets/images/GearSettings.png")}
              imageStyle={{width: "100%", height: "100%", resizeMode: 'contain'}}
            />
          ),
          headerTintColor: "transparent",
          headerStyle: {
            backgroundColor: "#fff",
            borderBottomColor: "#000",
            borderBottomWidth: 1,
          },
<<<<<<< HEAD:Navigations/StackNavigation/SettingsSreen.js
=======
          title: "Settings",
          headerTintColor: "transparent",
          headerTitleStyle: { color: "black", fontSize: "25%" },
          headerStyle: { backgroundColor: "white" },
>>>>>>> origin
=======
>>>>>>> origin:src/Navigations/StackNavigation/SettingsSreen.js
        }}
        component={SettingsPage}
      />
    </>
  );
};

export default SettingsSreen;
