import { router } from "expo-router";
import { FlatList, StyleSheet, Text, View } from "react-native";
import useTaskContext from "../../components/context/useTaskContext";
import { FokusButton } from "../../components/FokusButton";
import { IconPlus } from "../../components/Icons";
import TaskItem from "../../components/TaskItem";

export default function Tasks() {
  const { tasks, toggleTaskCompleted, deleteTask } = useTaskContext();

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.inner}>
          <FlatList
            data={tasks}
            renderItem={({ item }) => (
              <TaskItem
                completed={item.completed}
                text={item.description}
                onToggleComplete={() => toggleTaskCompleted(item.id)}
                onPressEdit={() => router.navigate(`/edit-task/${item.id}`)}
                onPressDelete={() => deleteTask(item.id)}
              />
            )}
            keyExtractor={(item) => item.id}
            ItemSeparatorComponent={() => <View style={{ height: 8 }} />}
            ListHeaderComponent={
              <Text style={styles.text}>Lista de tarefas:</Text>
            }
            ListEmptyComponent={
              <Text style={styles.emptyText}>
                Ainda não há tarefas na sua lista, que tal adicionar?
              </Text>
            }
            ListFooterComponent={
              <View style={{ marginTop: 16 }}>
                <FokusButton
                  title="Adicionar nova tarefa"
                  icon={<IconPlus outline={true} />}
                  outline
                  onPress={() => router.navigate("/add-task")}
                />
              </View>
            }
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#021123",
    alignItems: "center",
  },
  wrapper: {
    gap: 40,
    width: "90%",
  },
  text: {
    textAlign: "center",
    color: "#FFF",
    fontSize: 32,
    marginBottom: 40,
  },
  inner: {
    gap: 8,
  },
  emptyText: {
    color: "#98A0A8",
    fontSize: 24,
    textAlign: "center",
    marginBottom: 40,
  },
});
