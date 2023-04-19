import { View, Text, StyleSheet } from "react-native";
import CompanySetupLayout from "../../components/CompanySetupLayout";
import SwitchToggle from "../../components/UI/switch";

const WorkingDays = () => {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return (
    <View style={styles.container}>
      <CompanySetupLayout style={styles.title} title="Working days">
        <View style={{alignItems: 'space-between', width: '100%', border: 2}}>
          {days.map((day, index) => {
            return (
              <View key={index} style={styles.content}>
                <View style={styles.data}>
                  <View style={styles.switch}>
                    <SwitchToggle />
                  </View>
                  <View style={styles.days}>
                    <Text style={styles.day}>{day}</Text>
                  </View>
                </View>
              </View>
            );
          })}
        </View>
       
      </CompanySetupLayout>
    </View>
  );
};

export default WorkingDays;

const styles = StyleSheet.create({
  container: {
    // height: '100%',
    width: '100%',
    alignItems: 'center',  
    borderWidth: 2,
     borderColor: 'purple'   
  },
  title: {
    // width: '100%',
    alignItems: 'center',
    borderWidth: 2,
     borderColor: 'blue'        
  },  
  content: {
    // display: 'flex',     
    width: '100%',
  },
  data: {
    // width: '100%',   
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around', 
    borderWidth: 2,
     borderColor: 'cyan'  
  },
  switch: {    
     width: 20,
     marginRight: 20,
     alignItems: 'center',
     borderWidth: 2,
     borderColor: 'purple'    
  },
  days: {
    //  width: '100%',
    //  gap: 20,
     alignItems: 'center', 
     borderWidth: 2,
     borderColor: 'blue'       
  },
  day: {
     fontSize: 25,
     fontWeight: 700,
     color: '#8B8686',
    //  marginBottom: 16,    
     alignItems: 'center',
     border: 2
  },
});
