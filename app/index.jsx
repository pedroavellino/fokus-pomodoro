import { router } from "expo-router";
import { Image, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { FokusButton } from "../components/FokusButton";

export default function Index() {
  return (
    <SafeAreaView style={styles.safeArea} edges={["top", "bottom"]}>
      <View style={styles.container}>
        <Image
          source={require("../assets/images/Logo.png")}
          style={styles.logo}
          resizeMode="contain"
        />

        <View style={styles.inner}>
          <Text style={styles.title}>
            Otimize sua{"\n"}produtividade,{"\n"}
            <Text style={styles.bold}>mergulhe no que{"\n"}importa</Text>
          </Text>

          <Image
            source={require("../assets/images/Home.png")}
            style={styles.heroImage}
            resizeMode="contain"
          />

          <FokusButton
            title="Quero iniciar!"
            onPress={() => router.navigate("/pomodoro")}
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
    paddingTop: 12,
    paddingBottom: 24,
  },
  logo: {
    width: 160,
    height: 52,
    marginTop: 8,
  },
  inner: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    gap: 28,
    flex: 1,
  },
  title: {
    color: "#FFF",
    textAlign: "center",
    fontSize: 28,
    lineHeight: 42,
    fontWeight: "300",
    maxWidth: 320,
  },
  bold: {
    fontWeight: "bold",
  },
  heroImage: {
    width: 320,
    height: 260,
  },
  footer: {
    width: "100%",
    alignItems: "center",
    paddingBottom: 4,
  },
  footerText: {
    textAlign: "center",
    color: "#98A0A8",
    fontSize: 12.5,
    lineHeight: 18,
  },
});
