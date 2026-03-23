import { Text, View, Pressable, StyleSheet } from "react-native";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { IconCheck, IconPencil } from "../Icons/";

//Receber via props
const TaskItem = ({ 
  completed, 
  text, 
  onToggleComplete, 
  onPressEdit,
  onPressDelete
}) => {

  const cardStyles = [styles.card];

  if (completed) {
    cardStyles.push(styles.cardCompleted)
  }
  return (
    <View style={cardStyles}>
      <Pressable onPress={onToggleComplete}>
        <IconCheck checked={completed}/>
      </Pressable>
      <Text style={styles.text}>
        {text}
      </Text>
      <View style={styles.actions}>
        <Pressable onPress={onPressEdit}>
          <IconPencil />
        </Pressable>
        <Pressable onPress={onPressDelete}>
          <FontAwesome6 name="trash" size={24} color="black" />
        </Pressable>
      </View>
    </View>
  )
}

const styles = StyleSheet.create ({
  card: {
    flexDirection: "row",
    backgroundColor: "#98A0A8",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 8,
    paddingVertical: 18, 
    borderRadius: 8,
    gap: 8,
  },
  cardCompleted: {
    backgroundColor: "#0F725C",
  },
  text: {
    flex: 1, 
    color: "#021123",
    fontSize: 18,
    fontWeight: "bold",
  },
  actions: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  }
});

export default TaskItem;
