import AddedSuccess from "../../Sections/EmployeesPage/AddedSuccess";
import AddEmployee from "../../Sections/EmployeesPage/AddEmployee";
import EmployeeAccount from "../../Sections/EmployeesPage/EmployeeAccount";

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
    </>
  );
};

export default EmployeeScreen;
