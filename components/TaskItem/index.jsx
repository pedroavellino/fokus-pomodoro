import { Text, View, Pressable, StyleSheet } from "react-native";
import { IconCheck, IconPencil } from "../Icons/";

//Receber via props
const TaskItem = ({ 
  completed, 
  text, 
  onToggleComplete, 
  onPressEdit 
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
      <Pressable onPress={onPressEdit}>
        <IconPencil />
      </Pressable>
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
  }
});

export default TaskItem;
