import { View, Text } from "react-native";

type Result = {
    subtotal: number;
    alicuota: number;
    parkingFee: number;
    discount: number;
    total: number;
};

type Props = { result: Result };

export default function RentResult({ result }: Props) {
    return (
        <View style={{ marginTop: 14, padding: 16, borderWidth: 1, borderRadius: 8 }}>
            <Text style={{ fontSize: 18, fontWeight: "700" }}>2) Resultado</Text>

            <Text>Subtotal: ${result.subtotal.toFixed(2)}</Text>
            <Text>Alicuota (3%): ${result.alicuota.toFixed(2)}</Text>
            <Text>Parqueadero: ${result.parkingFee.toFixed(2)}</Text>
            <Text>Descuento: ${result.discount.toFixed(2)}</Text>

            <Text style={{ marginTop: 6, fontWeight: "700" }}>
                Total a pagar: ${result.total.toFixed(2)}
            </Text>
        </View>
    );
}