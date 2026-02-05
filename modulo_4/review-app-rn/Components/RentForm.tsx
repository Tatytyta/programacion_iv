import { View, Text, TextInput, Button } from "react-native";

type Concept = { id: number; name: string; amount: number };

type Action =
    | { type: "SET_AMOUNT"; payload: { id: number; amount: number } };

type Props = {
    concepts: Concept[];
    dispatch: (action: Action) => void;
    parking: string;
    setParking: (v: string) => void;
    goodPayer: string;
    setGoodPayer: (v: string) => void;
    onCalculate: () => void;
};

export default function RentForm({
    concepts,
    dispatch,
    parking,
    setParking,
    goodPayer,
    setGoodPayer,
    onCalculate,
}: Props) {
    return (
        <View style={{ padding: 16, borderWidth: 1, borderRadius: 8 }}>
            <Text style={{ fontSize: 18, fontWeight: "700" }}>1) Conceptos</Text>

            {concepts.map((c) => (
                <View key={c.id} style={{ marginTop: 10 }}>
                    <Text>{c.name} ($)</Text>
                    <TextInput
                        keyboardType="numeric"
                        value={String(c.amount)}
                        onChangeText={(v) =>
                            dispatch({
                                type: "SET_AMOUNT",
                                payload: { id: c.id, amount: Number(v) || 0 },
                            })
                        }
                        style={{ borderWidth: 1, padding: 8, marginTop: 6, width: 200 }}
                    />
                </View>
            ))}

            <Text style={{ marginTop: 12 }}>Parqueadero (SI / NO)</Text>
            <TextInput
                value={parking}
                onChangeText={setParking}
                style={{ borderWidth: 1, padding: 8, marginTop: 6, width: 160 }}
            />

            <Text style={{ marginTop: 12 }}>Buen pagador (SI / NO)</Text>
            <TextInput
                value={goodPayer}
                onChangeText={setGoodPayer}
                style={{ borderWidth: 1, padding: 8, marginTop: 6, width: 160 }}
            />

            <View style={{ marginTop: 14 }}>
                <Button title="Calcular" onPress={onCalculate} />
            </View>
        </View>
    );
}
