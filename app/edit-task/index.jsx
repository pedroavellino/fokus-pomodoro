import { router, useLocalSearchParams } from "expo-router";
import { useEffect } from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import useTaskContext from "../../components/context/useTaskContext";
import FormTask from "../../components/FormTask";

export default function EditTask() {
  const { id } = useLocalSearchParams();
  const { tasks, isLoaded, updateTask, deleteTask } = useTaskContext();
  const taskId = Number(id);

  const task = tasks.find((t) => t.id === taskId);

  useEffect(() => {
    if (isLoaded && !task) {
      router.replace("/tasks");
    }
  }, [isLoaded, task]);

  const submitTask = (description) => {
    updateTask(taskId, description);
    router.navigate("/tasks");
  };

  const handleDeleteTask = () => {
    deleteTask(taskId);
    router.navigate("/tasks");
  };

  if (!isLoaded) {
    return (
      <View style={styles.feedbackContainer}>
        <ActivityIndicator size="large" color="#FFF" />
      </View>
    );
  }

  if (!task) {
    return (
      <View style={styles.feedbackContainer}>
        <ActivityIndicator size="large" color="#FFF" />
      </View>
    );
  }

  return (
    <FormTask
      onFormSubmit={submitTask}
      onDeleteTask={handleDeleteTask}
      defaultValue={task.description}
    />
  );
}

const styles = StyleSheet.create({
  feedbackContainer: {
    flex: 1,
    backgroundColor: "#021123",
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },
});
