import React, { useState } from "react";
import { View, Text, Alert } from "react-native";
import GradientBg from "../components/GradientBg";
import GlassCard from "../components/GlassCard";
import AppInput from "../components/AppInput";
import AppButton from "../components/AppButton";
import { login } from "../services/auth.service";
import colors from "../theme/colors";

export default function LoginScreen({ navigation }: any) {
  const [email, setEmail] = useState("admin@instituto.edu");
  const [password, setPassword] = useState("admin123");
  const [loading, setLoading] = useState(false);

  const onLogin = async () => {
    try {
      setLoading(true);
      await login(email, password);
      navigation.replace("App");
    } catch (e: any) {
      Alert.alert("Error", "Credenciales inválidas");
    } finally {
      setLoading(false);
    }
  };

  return (
    <GradientBg>
      <View style={{ flex: 1, justifyContent: "center", padding: 24 }}>
        <GlassCard>
          <Text style={{ color: "#fff", fontSize: 22, fontWeight: "700" }}>Ingreso institucional</Text>
          <AppInput label="Correo institucional" value={email} onChangeText={setEmail} />
          <AppInput label="Clave" secureTextEntry value={password} onChangeText={setPassword} />
          <AppButton label={loading ? "Accediendo..." : "Ingresar"} onPress={onLogin} />
        </GlassCard>
      </View>
    </GradientBg>
  );
}
