import React, { useState, useEffect } from "react";
import { View, Alert } from "react-native";
import GradientBg from "../components/GradientBg";
import GlassCard from "../components/GlassCard";
import AppInput from "../components/AppInput";
import AppButton from "../components/AppButton";
import { createStudent, getStudent, updateStudent } from "../services/students.service";

export default function StudentFormScreen({ route, navigation }: any) {
  const id = route?.params?.id;
  const [names, setNames] = useState("");
  const [dni, setDni] = useState("");
  const [email, setEmail] = useState("");
  const [career, setCareer] = useState("");

  useEffect(() => {
    if (!id) return;
    getStudent(id).then(s => {
      setNames(s.names);
      setDni(s.dni);
      setEmail(s.email);
      setCareer(s.career);
    });
  }, [id]);

  const submit = async () => {
    const payload = { names, dni, email, career };
    try {
      if (id) await updateStudent(id, payload);
      else await createStudent(payload);
      Alert.alert("Guardado");
      navigation.goBack();
    } catch {
      Alert.alert("Error");
    }
  };

  return (
    <GradientBg>
      <View style={{ flex:1, padding:16 }}>
        <GlassCard>
          <AppInput label="Nombres" value={names} onChangeText={setNames} />
          <AppInput label="DNI" value={dni} onChangeText={setDni} />
          <AppInput label="Correo" value={email} onChangeText={setEmail} />
          <AppInput label="Carrera" value={career} onChangeText={setCareer} />
          <AppButton label="Guardar" onPress={submit} />
        </GlassCard>
      </View>
    </GradientBg>
  );
}
