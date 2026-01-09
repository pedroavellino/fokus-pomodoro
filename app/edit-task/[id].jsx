import { router, useLocalSearchParams } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import useTaskContext from "../../components/Context/useTaskContext";
import FormTask from "../../components/FormTask";

export default function EditTask () { 

  const { id } = useLocalSearchParams();
  const { tasks, updateTask } = useTaskContext();
  const task = tasks.find(t => t.id == id);

  function SubmitTask(description) {
    if (!description || !task) return;
    updateTask(task.id, description);
    router.navigate("../tasks")
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Editar tarefa:
      </Text>
      <FormTask 
        defaultValue={task?.description ?? ""}
        onFormSubmit={SubmitTask}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#021123",
    padding: 24,
    justifyContent: "center",
    gap: 16,
  },
  title: {
    color: '#fff',
    fontSize: 24,
    textAlign: 'center'
  },
});
