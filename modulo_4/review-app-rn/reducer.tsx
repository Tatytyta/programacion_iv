export type Concepto = {
  id: number;
  nombre: string;
  monto: number;
};

export const estadoInicial: Concepto[] = [
  { id: 1, nombre: "Renta base", monto: 300 },
  { id: 2, nombre: "Servicios", monto: 50 },
  { id: 3, nombre: "Mantenimiento", monto: 30 },
];

type Accion = {
  type: "ACTUALIZAR_MONTO";
  id: number;
  monto: number;
};

export function reducer(
  estado: Concepto[],
  accion: Accion
): Concepto[] {
  switch (accion.type) {
    case "ACTUALIZAR_MONTO":
      return estado.map(c =>
        c.id === accion.id ? { ...c, monto: accion.monto } : c
      );
    default:
      return estado;
  }
}