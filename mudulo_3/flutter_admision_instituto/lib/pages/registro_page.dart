import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';

class RegistroPage extends StatefulWidget {
  const RegistroPage({super.key});

  @override
  State<RegistroPage> createState() => _RegistroPageState();
}

class _RegistroPageState extends State<RegistroPage> {
  String nombre = '';
  String cedula = '';
  String carrera = 'Desarrollo de Software';
  String mensaje = '';

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Registro de Aspirante'),
        leading: IconButton(
          icon: const Icon(Icons.arrow_back),
          onPressed: () => context.go('/'),
        ),
      ),
      body: Padding(
        padding: const EdgeInsets.all(16),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.stretch,
          children: [
            TextField(
              decoration: const InputDecoration(
                labelText: 'Nombre completo',
                border: OutlineInputBorder(),
              ),
              onChanged: (v) => nombre = v,
            ),

            const SizedBox(height: 16),

            TextField(
              decoration: const InputDecoration(
                labelText: 'Cédula',
                border: OutlineInputBorder(),
              ),
              keyboardType: TextInputType.number,
              onChanged: (v) => cedula = v,
            ),

            const SizedBox(height: 16),

            DropdownButton<String>(
              value: carrera,
              isExpanded: true,
              items: const [
                DropdownMenuItem(
                  value: 'Desarrollo de Software',
                  child: Text('Desarrollo de Software'),
                ),
                DropdownMenuItem(
                  value: 'Marketing',
                  child: Text('Marketing'),
                ),
                DropdownMenuItem(
                  value: 'Contabilidad',
                  child: Text('Contabilidad'),
                ),
              ],
              onChanged: (v) {
                if (v == null) return;
                setState(() => carrera = v);
              },
            ),

            const SizedBox(height: 16),

            ElevatedButton(
              onPressed: () {
                if (nombre.isEmpty || cedula.isEmpty) {
                  setState(() {
                    mensaje = "Complete todos los campos";
                  });
                  return;
                }

                setState(() {
                  mensaje =
                    "Aspirante registrado:\nNombre: $nombre\nCédula: $cedula\nCarrera: $carrera";
                });
              },
              child: const Text('Registrar'),
            ),

            const SizedBox(height: 16),
            Text(mensaje),
          ],
        ),
      ),
    );
  }
}
