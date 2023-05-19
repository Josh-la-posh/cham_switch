import Calendar from "../../Sections/CalendarPage/Calendar";

const CalendarScreen = (Stack) => {
  return (
    <Stack.Screen
      name="Calendar"
      options={{ headerShown: false }}
      component={Calendar}
    />
  );
};

export default CalendarScreen;
