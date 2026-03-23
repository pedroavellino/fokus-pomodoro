import { 
  KeyboardAvoidingView,
  Keyboard,
  StyleSheet,
  Platform,
  Text,
  Pressable,
  TextInput,
  View,
  TouchableWithoutFeedback
} from "react-native";
import { IconSave, IconDelete } from "../Icons"
import{ useState } from "react";


export default function FormTask({
  onFormSubmit,
  onDeleteTask,
  defaultValue = ""
}) {

  const [description, setDescription] = useState(defaultValue);

  const submitTask = () => {
    if (!description) {
      return
    }
    onFormSubmit(description)
    setDescription("")
  }
  
  const deleteTask = () => {
    if (!onDeleteTask) {
      return
    }
    onDeleteTask()
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.content}>
          <Text style={styles.title}>
            {defaultValue ? "Editar uma tarefa" : "Adicionar uma tarefa"}
          </Text>
          <View style={styles.inner}>
            <Text style={styles.label}>Em que você está trabalhando?</Text>
            <TextInput 
              style={styles.input}
              numberOfLines={10}
              multiline={true}
              value={description}
              onChangeText={setDescription}
            />
            <View style={styles.action}>
              {onDeleteTask && (
                <View>
                  <Pressable style={styles.button} onPress={deleteTask}>
                    <IconDelete />
                    <Text>Deletar</Text>
                  </Pressable>
                </View>
              )}
              <View>
                <Pressable style={styles.button} onPress={submitTask}>
                  <IconSave />
                  <Text>Salvar</Text>
                </Pressable>
              </View>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#021123",
    alignItems: "center",
  },
  content: {
    marginTop: 40,
    width: "90%",
    gap: 16,
  },
  inner: {
    backgroundColor: "#98A0A8",
    borderRadius: 8,
    padding: 16,
    gap: 32,
  },
  title: {
    textAlign: "center",
    color: "#FFF",
    fontSize: 32,
    marginBottom: 40,
  },
  label: {
    fontWeight: 600,
    fontSize: 22,
  },
  input: {
    backgroundColor: "#FFF",
    padding: 16,
    borderRadius: 8,
    height: 120,
  },
  action: {
    flexDirection: "row",
    justifyContent: "flex-end",
    gap: 24,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
});
