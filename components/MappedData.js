import { View, Text, StyleSheet } from "react-native";
import { COLORS } from "../constants";

const MappedData = ({ data, page }) => {
  return (
    <View style={styles.pointerContainer}>
      {data.map((icon, index) => {
        return (
          <View
            key={index}
            style={[
              styles.pointer,
              index === page ? styles.activePointer : styles.inactivePointer,
            ]}
          >
          </View>
        );
      })}
    </View>
  );
};

export default MappedData;

const styles = StyleSheet.create({
  pointerContainer: {
    flexDirection: "row",
    gap: 15,
  },
  pointer: {
    height: 12,
    width: 12,
    borderRadius: "50%",
  },
  activePointer: {
    backgroundColor: COLORS.dangerTextColor,
  },
  inactivePointer: {
    backgroundColor: COLORS.inactivePointer,
  },
});
