import { Pressable, Text, StyleSheet } from "react-native";

export const ActionButton = ({ active, onPress, display }) => {
  return (
    <Pressable
      style={[styles.contextButton, active && styles.contextButtonActive]}
      onPress={onPress}
    >
      <Text style={styles.contextButtonText}>{display}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  contextButton: {
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  contextButtonActive: {
    backgroundColor: "#144480",
  },
  contextButtonText: {
    fontSize: 12.5,
    color: "#FFF",
  },
});
