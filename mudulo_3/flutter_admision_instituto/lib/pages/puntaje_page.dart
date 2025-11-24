import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';

class PuntajePage extends StatefulWidget {
  const PuntajePage({super.key});

  @override
  State<PuntajePage> createState() => _PuntajePageState();
}

class _PuntajePageState extends State<PuntajePage> {
  String examenText = '';
  String entrevistaText = '';
  String proyectoText = '';
  String resultado = '';

  void calcularPuntaje() {
    final examen = double.tryParse(examenText) ?? 0;
    final entrevista = double.tryParse(entrevistaText) ?? 0;
    final proyecto = double.tryParse(proyectoText) ?? 0;

    if (examen <= 0 || entrevista <= 0 || proyecto <= 0) {
      setState(() => resultado = 'Ingrese valores válidos');
      return;
    }

    final puntaje =
        (examen * 0.6) + (entrevista * 0.2) + (proyecto * 0.2);

    setState(() {
      resultado = 'Puntaje final: ${puntaje.toStringAsFixed(2)} / 100';
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Cálculo de Puntaje'),
        leading: IconButton(
          icon: const Icon(Icons.arrow_back),
          onPressed: () => context.go('/'),
        ),
      ),
      body: Padding(
        padding: const EdgeInsets.all(16),
        child: Column(
          children: [
            TextField(
              decoration: const InputDecoration(
                labelText: 'Examen (0-100)',
                border: OutlineInputBorder(),
              ),
              keyboardType: TextInputType.number,
              onChanged: (v) => examenText = v,
            ),

            const SizedBox(height: 16),

            TextField(
              decoration: const InputDecoration(
                labelText: 'Entrevista (0-100)',
                border: OutlineInputBorder(),
              ),
              keyboardType: TextInputType.number,
              onChanged: (v) => entrevistaText = v,
            ),

            const SizedBox(height: 16),

            TextField(
              decoration: const InputDecoration(
                labelText: 'Proyecto (0-100)',
                border: OutlineInputBorder(),
              ),
              keyboardType: TextInputType.number,
              onChanged: (v) => proyectoText = v,
            ),

            const SizedBox(height: 16),
            ElevatedButton(
              onPressed: calcularPuntaje,
              child: const Text('Calcular'),
            ),

            const SizedBox(height: 16),
            Text(resultado),
          ],
        ),
      ),
    );
  }
}
