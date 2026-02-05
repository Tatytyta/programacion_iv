
import { View, Text, TextInput } from "react-native";
import { Concepto } from "./reducer";

type Props = {
  concepto: Concepto;
  onChange: (id: number, monto: number) => void;
};

export default function ConceptItem({ concepto, onChange }: Props) {
  return (
    <View>
      <Text>{concepto.nombre}</Text>
      <TextInput
        keyboardType="numeric"
        value={concepto.monto.toString()}
        onChangeText={texto =>
          onChange(concepto.id, Number(texto) || 0)
        }
      />
    </View>
  );
}

