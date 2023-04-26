import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Balance from "../../Sections/EmployeesPage/Balance/Balance";
import Calendar from "../../Sections/EmployeesPage/Calendar/Calendar";
import Employees from "../../Sections/EmployeesPage/Employees/Employees";
import Settings from "../../Sections/EmployeesPage/Settings/Settings";

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
