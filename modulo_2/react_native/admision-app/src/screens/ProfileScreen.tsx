import React from "react";
import { View, Text, Image } from "react-native";
import GradientBg from "../components/GradientBg";
import GlassCard from "../components/GlassCard";
import AppButton from "../components/AppButton";
import { authStore } from "../store/auth";
import { logout } from "../services/auth.service";

export default function ProfileScreen({ navigation }: any) {
  const { email } = authStore.get();
  return (
    <GradientBg>
      <View style={{ flex:1, padding:16, gap:12 }}>
        <GlassCard style={{ alignItems:"center" }}>
          <Image source={{ uri:"https://i.pravatar.cc/150" }} style={{ width:110, height:110, borderRadius:55 }} />
          <Text style={{ color:"#fff", fontSize:20, fontWeight:"700" }}>Usuario institucional</Text>
          <Text style={{ color:"#ccc" }}>{email}</Text>
        </GlassCard>

        <GlassCard>
          <Text style={{ color:"#fff" }}>Actividades recientes</Text>
          <Text style={{ color:"#ddd" }}>Gestión de postulantes y admisiones</Text>
        </GlassCard>

        <AppButton label="Cerrar sesión" onPress={() => { logout(); navigation.replace("Auth") }} />
      </View>
    </GradientBg>
  );
}
