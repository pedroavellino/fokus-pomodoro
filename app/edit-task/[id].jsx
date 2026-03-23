import { router, useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";
import useTaskContext from "../../components/context/useTaskContext";
import FormTask from "../../components/FormTask";

export default function EditTask() {
  const { id } = useLocalSearchParams();
  const { tasks, updateTask, deleteTask } = useTaskContext();
  const taskId = Number(id);

  const task = tasks.find((t) => t.id === taskId);

  const submitTask = (description) => {
    updateTask(taskId, description);
    router.navigate("/tasks");
  };

  const handleDeleteTask = () => {
    deleteTask(taskId);
    router.navigate("/tasks");
  };

  if (!task) {
    return (
      <View>
        <Text>Não foi encontrada uma tarefa com o id: {id}</Text>
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
