import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useEffect, useState } from "react";

export const TaskContext = createContext();

const tasksStorageKey = "fokus-tasks";

export function TasksProvider({ children }) {
  const [tasks, setTasks] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem(tasksStorageKey);
        const loadedData = jsonValue != null ? JSON.parse(jsonValue) : [];
        setTasks(loadedData)
        setIsLoaded(true)
      } catch (e) {
        console.warn("Erro ao ler tarefas de AsycStorage", e);
      }
    }
    getData()
  }, [])
  
  useEffect(() => {
    const storeData = async (value) => {
      try {
        const jsonValue = JSON.stringify(value);
        await AsyncStorage.setItem(tasksStorageKey, jsonValue);
      } catch (e) {
        console.warn("Erro ao ler tarefas de AsycStorage", e);
      }
    };
    if (isLoaded) {
      storeData(tasks)
    }
  }, [tasks, isLoaded]);

  const addTask = (description) => {
    console.log("Tarefa vai ser adicionada")
    setTasks((oldState) => {
      return [
        ...oldState,
        {
          description,
          completed: false,
          id: Date.now(),
        },
      ];
    });
  };

  const toggleTaskCompleted = (id) => {
    setTasks((oldState) => 
      oldState.map((t) => 
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    );
  };
  
  const updateTask = (id, newDescription) => {
    setTasks(oldState => 
      oldState.map(t => {
        if (t.id === id) {
          return { ...t, description: newDescription }
        }
        return t
      })
    )
  }
  
  const deleteTask = (id) => {
    setTasks((oldState) => {
      return oldState.filter((t) => (t.id !== id));
    });
  };


  return (
    <TaskContext.Provider
      value={{
        tasks,
        addTask,
        toggleTaskCompleted,
        deleteTask,
        updateTask
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}
