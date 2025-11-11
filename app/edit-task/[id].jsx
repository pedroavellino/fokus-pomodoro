import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

export default function EditTask () {

  const { id } = useLocalSearchParams();

  return (
    <View>
      <Text>
        Precisamos editar essa tarefa com o id: {id}
      </Text>
    </View>
  )
}