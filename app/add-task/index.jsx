import FormTask from "../../components/FormTask";
import useTaskContext from "../../components/Context/useTaskContext";
import { router } from "expo-router";

export default function AddTask () {
  const { addTask } = useTaskContext();

  function onFormSubmit(description) {
    addTask(description);
    router.navigate("../tasks")
  }

  return <FormTask onFormSubmit={onFormSubmit}/>
}  