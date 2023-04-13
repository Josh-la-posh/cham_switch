import { View, Text, StyleSheet } from "react-native";

const OnboardingLayout = ({ children, text }) => {

  return (
    <View>
      <View style={styles.imageContainer}>{children}</View>
      <Text style={styles.text}>{text}</Text>      
    </View>
  );
};

export default OnboardingLayout;

const styles = StyleSheet.create({
  imageContainer: {
    height: 369,
  },
  text: {
    fontSize: 40,
    textAlign: "center",
    fontWeight: 400,
    marginBottom: 85,
    marginTop: 46,
  },
});
