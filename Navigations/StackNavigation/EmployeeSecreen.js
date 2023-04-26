import AddEmployee from "../../Sections/EmployeesPage/Employees/AddEmployee";

const EmployeeScreen = (Stack) => {
  return (
    <>
      <Stack.Screen
        name="Add Employee"
        options={{ headerShown: false }}
        component={AddEmployee}
      />
    </>
  );
};

export default EmployeeScreen;
