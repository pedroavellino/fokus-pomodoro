import { Pressable, Text, StyleSheet } from "react-native";

export const FokusButton = ({ onPress, title, icon, outline }) => {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.button,
        outline && styles.outlineButton,
        pressed && styles.pressed,
      ]}
      onPress={onPress}
    >
      {icon}
      <Text style={[styles.buttonText, outline && styles.outlineButtonText]}>
        {title}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#B872FF",
    borderRadius: 999,
    height: 52,
    paddingVertical: 14,
    paddingHorizontal: 28,
    flexDirection: "row",
    gap: 12,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    width: 280,
  },
  outlineButton: {
    backgroundColor: "transparent",
    borderColor: "#B872FF",
    borderWidth: 2,
  },
  buttonText: {
    textAlign: "center",
    color: "#021123",
    fontSize: 18,
    fontWeight: "700",
  },
  outlineButtonText: {
    color: "#B872FF",
  },
  pressed: {
    opacity: 0.9,
  },
});