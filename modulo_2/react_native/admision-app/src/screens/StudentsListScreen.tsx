import React, { useEffect, useState } from "react";
import { View, Text, FlatList, Pressable, ActivityIndicator, Alert } from "react-native";
import GradientBg from "../components/GradientBg";
import GlassCard from "../components/GlassCard";
import { listStudents, removeStudent } from "../services/students.service";
import colors from "../theme/colors";

export default function StudentsListScreen({ navigation }: any) {
  const [items, setItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const load = async () => {
    setLoading(true);
    const data = await listStudents();
    setItems(data);
    setLoading(false);
  };

  useEffect(() => { load() }, []);

  if (loading)
    return (
      <GradientBg>
        <View style={{ flex:1, justifyContent:"center", alignItems:"center" }}>
          <ActivityIndicator size="large" color={colors.primary} />
        </View>
      </GradientBg>
    );

  return (
    <GradientBg>
      <View style={{ flex: 1, padding: 12 }}>
        <Pressable
          onPress={() => navigation.navigate("StudentForm")}
          style={{ alignSelf:"flex-end", borderWidth:1, borderColor:colors.primary, paddingVertical:8, paddingHorizontal:12, borderRadius:10 }}
        >
          <Text style={{ color: colors.primary }}>+ Nuevo postulante</Text>
        </Pressable>

        <FlatList
          data={items}
          keyExtractor={(it) => String(it.id)}
          ItemSeparatorComponent={() => <View style={{ height: 8 }} />}
          renderItem={({ item }) => (
            <GlassCard>
              <Text style={{ color:"#fff", fontWeight:"700" }}>{item.names}</Text>
              <Text style={{ color:colors.subtle }}>{item.career}</Text>

              <View style={{ flexDirection:"row", marginTop:10, gap:10 }}>
                <Pressable
                  onPress={() => navigation.navigate("StudentForm", { id: item.id })}
                  style={{ borderWidth:1, borderColor:colors.primary, padding:6, borderRadius:8 }}
                >
                  <Text style={{ color: colors.primary }}>Editar</Text>
                </Pressable>

                <Pressable
                  onPress={() => {
                    Alert.alert("Eliminar", "¿Seguro?", [
                      { text:"Cancelar" },
                      { text:"Eliminar", style:"destructive", onPress: async () => { await removeStudent(item.id); load() } }
                    ])
                  }}
                  style={{ borderWidth:1, borderColor:colors.danger, padding:6, borderRadius:8 }}
                >
                  <Text style={{ color: colors.danger }}>Eliminar</Text>
                </Pressable>
              </View>
            </GlassCard>
          )}
        />
      </View>
    </GradientBg>
  );
}
