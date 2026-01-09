import { 
  KeyboardAvoidingView,
  StyleSheet,
  Platform,
  Text,
  Pressable,
  TextInput,
  View,
  TouchableWithoutFeedback
} from "react-native";
import { IconSave } from "../Icons"
import{ useState, useEffect } from "react";


export default function FormTask({ onFormSubmit, defaultValue = ""}) {
  const [description, setDescription] = useState(defaultValue);

  useEffect(() => {
    setDescription(defaultValue ?? "");
  }, [defaultValue]);

  function submitTask() {
    if (!description) return;
    onFormSubmit?.(description);
    setDescription("");
  }
  
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
          <Text style={styles.text}>Adicionar uma tarefa</Text>
          <Text style={styles.label}>Em que você está trabalhando?</Text>
          <TextInput 
            style={styles.input}
            numberOfLines={10}
            multiline={true}
            value={description}
            onchangeText={setDescription}
          />
          <View style={styles.actions}>
            <Pressable style={styles.button} onPress={submitTask}>
              <IconSave />
              <Text>Salvar</Text>
            </Pressable>
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
    borderRadius: 8,

  },
  text: {
    color: "#FFF",
    width: "90%",
    borderRadius: 8,
    padding: 16,
    gap: 32,
  },
  label: {
    fontWeight: 600,
    fontSize: 18,
  },
  input: {
    backgroundColor: "#FFF",
    padding: 16,
    borderRadius: 8,
    height: 100,
  },
  action: {
    flexDirection: "row",
    justifyContent: "flex-end"
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
});