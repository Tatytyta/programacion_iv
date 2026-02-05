//App.tsx
import { useReducer, useState } from "react";
import { View, Text, Button, Switch } from "react-native";
import { reducer, estadoInicial } from "./reducer";
import ConceptItem from "./ConceptItem";
import Result from "./Result";

type Resultado = {
  subtotal: number;
  alicuota: number;
  parqueadero: number;
  descuento: number;
  total: number;
};

export default function App() {
  const [conceptos, dispatch] = useReducer(reducer, estadoInicial);
  const [tieneParqueadero, setTieneParqueadero] = useState(false);
  const [buenPagador, setBuenPagador] = useState(false);
  const [resultado, setResultado] = useState<Resultado | null>(null);

  const calcular = () => {
    const subtotal = conceptos.reduce(
      (suma, c) => suma + c.monto,
      0
    );

    const alicuota = subtotal > 0 ? subtotal * 0.03 : 0;
    const parqueadero =
      tieneParqueadero && subtotal > 0 ? 25 : 0;
    const descuento =
      buenPagador && subtotal >= 400 ? subtotal * 0.05 : 0;

    const total =
      subtotal + alicuota + parqueadero - descuento;

    setResultado({
      subtotal,
      alicuota,
      parqueadero,
      descuento,
      total,
    });
  };

  return (
    <View>
      <Text>Renta Mensual</Text>

      {conceptos.map(c => (
        <ConceptItem
          key={c.id}
          concepto={c}
          onChange={(id, monto) =>
            dispatch({
              type: "ACTUALIZAR_MONTO",
              id,
              monto,
            })
          }
        />
      ))}

      <Text>Parqueadero</Text>
      <Switch
        value={tieneParqueadero}
        onValueChange={setTieneParqueadero}
      />

      <Text>Buen pagador</Text>
      <Switch
        value={buenPagador}
        onValueChange={setBuenPagador}
      />

      <Button title="Calcular" onPress={calcular} />

      {resultado && <Result {...resultado} />}
    </View>
  );
}