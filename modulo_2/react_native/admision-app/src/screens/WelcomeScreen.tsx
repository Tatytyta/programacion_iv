import React from "react";
import { View, Text } from "react-native";
import GradientBg from "../components/GradientBg";
import GlassCard from "../components/GlassCard";
import AppButton from "../components/AppButton";

export default function WelcomeScreen({ navigation }: any) {
  return (
    <GradientBg>
      <View style={{ flex: 1, justifyContent: "center", padding: 24 }}>
        <GlassCard style={{ padding: 24, marginBottom: 16 }}>
          <Text style={{ color: "#fff", fontSize: 28, fontWeight: "700" }}>Sistema de Admisión</Text>
          <Text style={{ color: "#dcdcff" }}>Accede para gestionar postulantes, inscripciones y revisiones de perfiles.</Text>
        </GlassCard>

        <AppButton label="Ingresar" onPress={() => navigation.navigate("Login")} />
        <View style={{ height: 10 }} />
        <AppButton label="Crear cuenta" outline onPress={() => navigation.navigate("Register")} />
      </View>
    </GradientBg>
  );
}
