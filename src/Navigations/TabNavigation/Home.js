import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useContext } from "react";
import Balance from "../../Sections/EmployeesPage/BalancePage/Balance";
import Calendar from "../../Sections/EmployeesPage/CalendarPage/Calendar";
import Employees from "../../Sections/EmployeesPage/Employees/Employees";
import Settings from "../../Sections/EmployeesPage/SettingsPage/Settings";
import Header from "../../components/HeaderComponent";
import { AuthContext } from "../../context/AuthContext";

import { Image } from "react-native";
import SettingsPage from "../../Sections/EmployeesPage/SettingsPage/Settings/SettingsPage";

const Tab = createBottomTabNavigator();

function Home() {
  const { role } = useContext(AuthContext);
  return (
    <Tab.Navigator>
      {role === "hr" && (
        <Tab.Screen
          name="Employees"
          component={Employees}
          options={{
            title: "Employees",
            tabBarIcon: ({ size, focused, color }) => {
              return (
                <Image
                  style={{ width: size, height: size }}
                  source={require("../../assets/tab-images/employees-tab.png")}
                />
              );
            },
          }}
        />
      )}
      <Tab.Screen
        name="Calendar"
        component={Calendar}
        options={{
          title: "Calendar",
          tabBarIcon: ({ size, focused, color }) => {
            return (
              <Image
                style={{ width: size, height: size }}
                source={require("../../assets/tab-images/calendar-tab.png")}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Balance"
        component={Balance}
        options={{
          title: "Balance",
          tabBarIcon: ({ size, focused, color }) => {
            return (
              <Image
                style={{ width: size, height: size }}
                source={require("../../assets/tab-images/balance-tab.png")}
              />
            );
          },
        }}
      />
      {role === "hr" ? (
        <Tab.Screen
          name="Settings"
          component={Settings}
          options={{
            tabBarLabel: "Settings",
            tabBarIcon: ({ size, focused, color }) => {
              return (
                <Image
                  style={{ width: size, height: size }}
                  source={require("../../assets/tab-images/settings-tab.png")}
                />
              );
            },
          }}
        />
      ) : (
        <Tab.Screen
          name="Settings Page"
          options={{
            headerTitle: () => (
              <Header
                title="Settings"
                style={{
                  color: "#000",
                  fontSize: 27,
                  fontWeight: "400",
                }}
                settingsHeader={{marginLeft: 0}}
                image={require("../../assets/icons/arrow_left_black.png")}
                imageHeader={require("../../assets/images/GearSettings.png")}
                imageStyle={{
                  width: "100%",
                  height: "100%",
                  resizeMode: "contain",
                }}
              />
            ),
            headerTintColor: "transparent",
            headerStyle: {
              backgroundColor: "#fff",
              borderBottomColor: "rgba(0,0,0,0.17)",
              borderBottomWidth: 1,
            },
            tabBarLabel: "Settings",
            tabBarIcon: ({ size, focused, color }) => {
              return (
                <Image
                  style={{ width: size, height: size }}
                  source={require("../../assets/tab-images/settings-tab.png")}
                />
              );
            },
          }}
          component={SettingsPage}
        />
      )}
    </Tab.Navigator>
  );
}

export default Home;
