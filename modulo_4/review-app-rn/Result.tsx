
import { View, Text } from "react-native";

type Props = {
  subtotal: number;
  alicuota: number;
  parqueadero: number;
  descuento: number;
  total: number;
};

export default function Result({
  subtotal,
  alicuota,
  parqueadero,
  descuento,
  total,
}: Props) {
  return (
    <View>
      <Text>Subtotal: ${subtotal.toFixed(2)}</Text>
      <Text>Alicuota: ${alicuota.toFixed(2)}</Text>
      <Text>Parqueadero: ${parqueadero.toFixed(2)}</Text>
      <Text>Descuento: ${descuento.toFixed(2)}</Text>
      <Text>Total: ${total.toFixed(2)}</Text>
    </View>
  );
}