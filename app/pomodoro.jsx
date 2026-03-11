import { useRef, useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ActionButton } from "../components/ActionButton";
import { FokusButton } from "../components/FokusButton";
import { IconPause, IconPlay } from "../components/Icons";
import { Timer } from "../components/Timer";

const pomodoro = [
  {
    id: "focus",
    initialValue: 25 * 60,
    image: require("../assets/images/Imagem-foco.png"),
    display: "Foco",
  },
  {
    id: "short",
    initialValue: 5 * 60,
    image: require("../assets/images/Imagem-descanso-curto.png"),
    display: "Pausa curta",
  },
  {
    id: "long",
    initialValue: 15 * 60,
    image: require("../assets/images/Imagem-descanso-longo.png"),
    display: "Pausa longa",
  },
];

export default function Pomodoro() {
  const [timerType, setTimerType] = useState(pomodoro[0]);
  const [seconds, setSeconds] = useState(pomodoro[0].initialValue);
  const [timerRunning, setTimerRunning] = useState(false);

  const timerRef = useRef(null);

  const clear = () => {
    if (timerRef.current != null) {
      clearInterval(timerRef.current);
      timerRef.current = null;
      setTimerRunning(false);
    }
  };

  const toggleTimerType = (newTimerType) => {
    setTimerType(newTimerType);
    setSeconds(newTimerType.initialValue);
    clear();
  };

  const toggleTimer = () => {
    if (timerRef.current) {
      clear();
      return;
    }

    setTimerRunning(true);

    setSeconds((s) => (s === 0 ? timerType.initialValue - 1 : s - 1));

    const id = setInterval(() => {
      setSeconds((oldState) => {
        if (oldState === 0) {
          clear();
          return timerType.initialValue;
        }

        return oldState - 1;
      });
    }, 1000);

    timerRef.current = id;
  };

  return (
    <SafeAreaView style={styles.safeArea} edges={["top", "bottom"]}>
      <View style={styles.container}>
        <View style={styles.topSection}>
          <Image
            source={timerType.image}
            style={styles.heroImage}
            resizeMode="contain"
          />
        </View>

        <View style={styles.actions}>
          <View style={styles.context}>
            {pomodoro.map((p) => (
              <ActionButton
                key={p.id}
                active={timerType.id === p.id}
                onPress={() => toggleTimerType(p)}
                display={p.display}
              />
            ))}
          </View>

          <Timer totalSeconds={seconds} />

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
          <Text style={styles.footerText}>Desenvolvido por Pedro Avelino.</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#021123",
  },
  container: {
    flex: 1,
    backgroundColor: "#021123",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 24,
    paddingTop: 8,
    paddingBottom: 24,
  },
  topSection: {
    width: "100%",
    alignItems: "center",
  },
  heroImage: {
    width: 300,
    height: 300,
  },
  actions: {
    width: "100%",
    maxWidth: 320,
    paddingVertical: 24,
    paddingHorizontal: 20,
    backgroundColor: "#14448080",
    borderRadius: 32,
    borderWidth: 2,
    borderColor: "#144480",
    gap: 28,
  },
  context: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  footer: {
    width: "100%",
    alignItems: "center",
    paddingTop: 8,
  },
  footerText: {
    textAlign: "center",
    color: "#98A0A8",
    fontSize: 12.5,
    lineHeight: 18,
  },
});
