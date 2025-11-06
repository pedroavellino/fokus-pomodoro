import { Text, SafeAreaView, View, TextInput, Pressable } from "react-native";
import { IconSave } from "../../components/Icons";

export default function AddTask () {
    return ( 
    <SafeAreaView>
      <Text>
        Adicionar uma tarefa
      </Text>
      <View>
        <Text>
          Em que você está trabalhando? 
        </Text>
        <TextInput />
        <Pressable>
          <IconSave /> 
          <Text> 
            Salvar
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
    )
}
