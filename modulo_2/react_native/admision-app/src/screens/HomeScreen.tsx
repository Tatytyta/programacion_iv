import React from "react";
import { ScrollView, Text } from "react-native";
import GradientBg from "../components/GradientBg";
import GlassCard from "../components/GlassCard";

export default function HomeScreen() {
  return (
    <GradientBg>
      <ScrollView contentContainerStyle={{ padding: 16, gap: 12 }}>
        <GlassCard>
          <Text style={{ color: "#fff", fontSize: 20, fontWeight: "700" }}>Información institucional</Text>
          <Text style={{ color: "#ddd" }}>Estado de inscripciones, postulaciones y procesos activos.</Text>
        </GlassCard>

        <GlassCard>
          <Text style={{ color: "#fff" }}>Atajos</Text>
          <Text style={{ color: "#ddd" }}>Postulantes, Mi perfil, Procesos.</Text>
        </GlassCard>
      </ScrollView>
    </GradientBg>
  );
}
