import { KeyboardAvoidingView, Text, View, TextInput, Pressable, StyleSheet, Platform} from "react-native"
import { IconSave } from "../../components/Icons"
import useTaskContext from "../../components/context/useTaskContext";
import { useState } from "react";
import { router } from "expo-router";
import FormTask from "../../components/FormTask";

export default function AddTask () {

  const { addTask } = useTaskContext();

  const submitTask = (description) => {
    addTask(description)
    router.navigate("/tasks")
  }

  return <FormTask onFormSubmit={submitTask}/>
}  