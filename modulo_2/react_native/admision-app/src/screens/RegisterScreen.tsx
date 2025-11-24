import React, { useState } from "react";
import { View, Text, Alert } from "react-native";
import GradientBg from "../components/GradientBg";
import GlassCard from "../components/GlassCard";
import AppInput from "../components/AppInput";
import AppButton from "../components/AppButton";
import { register } from "../services/auth.service";

export default function RegisterScreen({ navigation }: any) {
  const [email, setEmail] = useState("postulante@correo.com");
  const [password, setPassword] = useState("123456");

  const onRegister = async () => {
    try {
      await register(email, password);
      Alert.alert("Cuenta creada", "Ahora puedes iniciar sesión");
      navigation.replace("Login");
    } catch {
      Alert.alert("Error", "No se pudo crear la cuenta");
    }
  };

  return (
    <GradientBg>
      <View style={{ flex: 1, justifyContent: "center", padding: 24 }}>
        <GlassCard>
          <Text style={{ color: "#fff", fontSize: 22, fontWeight: "700" }}>Crear cuenta de postulación</Text>
          <AppInput label="Correo" value={email} onChangeText={setEmail} />
          <AppInput label="Clave" secureTextEntry value={password} onChangeText={setPassword} />
          <AppButton label="Registrarse" onPress={onRegister} />
        </GlassCard>
      </View>
    </GradientBg>
  );
}
