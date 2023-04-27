import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Balance from "../../Sections/BalancePage/Balance";
import Calendar from "../../Sections/CalendarPage/Calendar";
import Employees from "../../Sections/EmployeesPage/Employees";
import Settings from "../../Sections/SettingsPage/Settings";

const Tab = createBottomTabNavigator();

function Home() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Employees" component={Employees} />
      <Tab.Screen name="Calendar" component={Calendar} />
      <Tab.Screen name="Balance" component={Balance} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
}

export default Home;
