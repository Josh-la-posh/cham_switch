import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Balance from "../../Sections/BalancePage/Balance";
import Calendar from "../../Sections/CalendarPage/Calendar";
import Employees from "../../Sections/EmployeesPage/Employees";
import Settings from "../../Sections/SettingsPage/Settings";

import { Image } from "react-native";

const Tab = createBottomTabNavigator();

function Home() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Employees" component={Employees}
        options={{
            title: 'Employees',
            tabBarIcon: ({size,focused,color}) => {
              return (
                <Image
                  style={{ width: size, height: size }}
                  source={require("../../assets/tab-images/employees-tab.png")}
                />
              );
            },
          }}
        />
        <Tab.Screen name="Calendar" component={Calendar}
          options={{
            title: 'Calendar',
            tabBarIcon: ({size,focused,color}) => {
              return (
                <Image
                  style={{ width: size, height: size }}
                  source={require("../../assets/tab-images/calendar-tab.png")}
                />
              );
            },
          }} 
        />
        <Tab.Screen name="Balance" component={Balance} 
          options={{
            title: 'Balance',
            tabBarIcon: ({size,focused,color}) => {
              return (
                <Image
                  style={{ width: size, height: size }}
                  source={require("../../assets/tab-images/balance-tab.png")}
                />
              );
            },
          }}
        />
        <Tab.Screen name="Settings" component={Settings} 
          options={{
            title: 'Settings',
            tabBarIcon: ({size,focused,color}) => {
              return (
                <Image
                  style={{ width: size, height: size }}
                  source={require("../../assets/tab-images/settings-tab.png")}
                />
              );
            },
          }}
        />
    </Tab.Navigator>
  );
}

export default Home;
