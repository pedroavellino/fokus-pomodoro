import { useRef, useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { ActionButton } from "../components/ActionButton";
import { FokusButton } from "../components/FokusButton";
import { IconPause, IconPlay } from "../components/Icons";
import { Timer } from "../components/Timer";

const pomodoro = [
  {
    id: "focus",
    initialValue: 25 * 60 ,
    image: require("../assets/images/Imagem-foco.png"),
    display: "Foco"
  },
  {
    id: "short",
    initialValue: 5 * 60,
    image: require("../assets/images/Imagem-descanso-curto.png"),
    display: "Pausa curta"
  },
  {
    id: "long",
    initialValue: 15 * 60,
    image: require("../assets/images/Imagem-descanso-longo.png"),
    display: "Pausa longa"
  },
]

export default function Pomodoro() {

  const [timerType, setTimerType] = useState(pomodoro[0]);
  const [seconds, setSeconds] = useState(pomodoro[0].initialValue)
  const [timerRunning, setTimerRunning] = useState(false);

  const timerRef = useRef(null);

  //Função da "limpeza": faz um double check, limpa o intervalo, limpa o Ref atual e para o cronômetro;
  const clear = () => {
    if(timerRef.current != null) {
      clearInterval(timerRef.current)
      timerRef.current = null
      setTimerRunning(false)
    }
  }

  //Função que troca o tipo do timer (foco normal, pausa curta e pausa longa): define o novo tipo, reseta o contador de segundos e limpa o intervalo;
  const toggleTimerType = (newTimerType) => {
    setTimerType(newTimerType)
    setSeconds(newTimerType.initialValue)
    clear();
  }

  //Função que olha pra o current e verifica se tem um timer; se tiver o timer, limpa e para; se não tiver, ele coloca o time pra rodar e define um novo intervalo que vai decrementando o contador;
  const toggleTimer = () => {
    if (timerRef.current) {
      //pausar
      clear();
      return
    }

    setTimerRunning(true);

    // PRIMEIRO TICK IMEDIATO
    setSeconds(s => (s === 0 ? timerType.initialValue - 1 : s - 1));
    
    //JavaScript puro
    const id = setInterval(() => {
      setSeconds(oldState => {
        if (oldState === 0) {
          clear()
          return timerType.initialValue;
        }
        return oldState - 1;
      })
    }, 1000)
    timerRef.current = id;
  };

  return (
    <View
      style={styles.container}
    >
      <Image source={timerType.image}/>
      <View style={styles.actions}> {/*A View não consegue renderizar texto; quem consegue é o Text */}
        <View style={styles.context}>
          {pomodoro.map(p => (
            <ActionButton
              //Abaixo temos três props: propriedades que passam de um componenente pai para um filho;
              key={p.id}
              active={ timerType.id === p.id }
              onPress={() => toggleTimerType(p)}
              display={p.display}
            />
          ))}
        </View>
        <Timer totalSeconds={seconds}/>
        <FokusButton 
          title={timerRunning ? "Pausar" : "Começar"}
          icon={timerRunning ? <IconPause /> : <IconPlay />}
          onPress={toggleTimer}
        />
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Projeto fictício e sem fins comerciais. 
        </Text>
        <Text style={styles.footerText}>
          Desenvolvido por Pedro Avelino.
        </Text>
      </View>
    </View>
  );
}

//Componente que importamos do React Native;
//OBS: no React Native, eu posso usar uma variável antes de declarar, devido ao hoisting do JavaScript;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#021123",
    gap: 40
  },
  actions: {
    padding: 24,
    backgroundColor: "#14448080",
    width: "80%",
    borderRadius: 32,
    borderWidth: 2,
    borderColor: "#144480",
    gap: 32
  },
  context: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center"
  },
  footer: {
    width: "80%"
  },
  footerText: {
    textAlign: "center",
    color: "#98A0A8",
    fontSize: 12.5
  }
});
