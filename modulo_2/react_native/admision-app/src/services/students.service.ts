import api from "./api";
const BASE = "https://fakestoreapi.com";

export type Student = {
  id?: number;
  names: string;
  dni: string;
  email: string;
  career: string;
};

export async function listStudents(): Promise<Student[]> {
  const { data } = await api.get(`${BASE}/products`);
  return data.map((x:any) => ({
    id: x.id,
    names: x.title,
    dni: "0000000000",
    email: "correo@instituto.edu",
    career: "Desarrollo de Software"
  }));
}

export async function getStudent(id: number): Promise<Student> {
  const { data } = await api.get(`${BASE}/products/${id}`);
  return {
    id: data.id,
    names: data.title,
    dni: "0000000000",
    email: "correo@instituto.edu",
    career: "Desarrollo de Software"
  };
}

export async function createStudent(s: Student): Promise<Student> {
  const { data } = await api.post(`${BASE}/products`, s);
  return data;
}

export async function updateStudent(id: number, s: Student): Promise<Student> {
  const { data } = await api.put(`${BASE}/products/${id}`, s);
  return data;
}

export async function removeStudent(id: number): Promise<void> {
  await api.delete(`${BASE}/products/${id}`);
}
