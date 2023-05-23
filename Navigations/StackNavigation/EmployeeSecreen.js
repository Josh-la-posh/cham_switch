import LeaveRequest from "../../Sections/BalancePage/LeaveRequest";
import RequestSuccess from "../../Sections/BalancePage/RequestSuccess";
<<<<<<< HEAD
import AddedSuccess from "../../Sections/EmployeesPage/Employees/AddedSuccess";
import AddEmployee from "../../Sections/EmployeesPage/Employees/AddEmployee";
import EmployeeAccount from "../../Sections/EmployeesPage/Employees/EmployeeAccount";
=======
import AddedSuccess from "../../Sections/EmployeesPage/AddedSuccess";
import AddEmployee from "../../Sections/EmployeesPage/AddEmployee";
import EmployeeAccount from "../../Sections/EmployeesPage/EmployeeAccount";
>>>>>>> 1f303af12fce8a27d6b5f1d74e9e9733dd380a4f

const EmployeeScreen = (Stack) => {
  return (
    <>
      <Stack.Screen
        name="Add Employee"
        options={{ headerShown: false }}
        component={AddEmployee}
      />
      <Stack.Screen
        name="Added Success"
        options={{ headerShown: false }}
        component={AddedSuccess}
      />
      <Stack.Screen
        name="Employee Account"
        options={{ headerShown: false }}
        component={EmployeeAccount}
      />
      <Stack.Screen
        name="Leave Request"
        options={{ headerShown: false }}
        component={LeaveRequest}
      />
      <Stack.Screen
        name="Request Success"
        options={{ headerShown: false }}
        component={RequestSuccess}
      />
    </>
  );
};

export default EmployeeScreen;
