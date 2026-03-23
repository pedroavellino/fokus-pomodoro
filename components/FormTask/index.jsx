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
        <View style={styles.inner}>
          <Text style={styles.text}>
            {defaultValue ? "Editar uma tarefa:" : "Adicionar uma tarefa:"}
          </Text>
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
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#021123",
    gap: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  inner: {
    backgroundColor: "#98A0A8",
    width: "90%",
    height: 310,
    borderRadius: 8,
    padding: 16,
    gap: 32,

  },
  text: {
    color: "#FFF",
    width: "90%",
    borderRadius: 8,
    gap: 32,
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
