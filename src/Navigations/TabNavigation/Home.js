import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Balance from "../../Sections/EmployeesPage/BalancePage/Balance";
import Calendar from "../../Sections/EmployeesPage/CalendarPage/Calendar";
import Employees from "../../Sections/EmployeesPage/Employees/Employees";
import Settings from "../../Sections/EmployeesPage/SettingsPage/Settings";

import { Image } from "react-native";

const Tab = createBottomTabNavigator();

function Home() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Employees"
        component={Employees}
        options={{
<<<<<<< HEAD:Navigations/TabNavigation/Home.js
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin
=======
>>>>>>> origin:src/Navigations/TabNavigation/Home.js
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
<<<<<<< HEAD:Navigations/TabNavigation/Home.js
<<<<<<< HEAD
=======
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
            tabBarLabel: 'Settings',         
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
>>>>>>> 1f303af12fce8a27d6b5f1d74e9e9733dd380a4f
=======
>>>>>>> origin
=======
>>>>>>> origin:src/Navigations/TabNavigation/Home.js
    </Tab.Navigator>
  );
}

export default Home;
