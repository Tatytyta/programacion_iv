import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';

class HomePage extends StatelessWidget {
  const HomePage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Sistema de Admisión')),
      body: Padding(
        padding: const EdgeInsets.all(16),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.stretch,
          children: [
            const Text(
              'Seleccione una opción:',
              style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold),
            ),
            const SizedBox(height: 24),

            ElevatedButton(
              onPressed: () => context.go('/registro'),
              child: const Text('Registrar aspirante'),
            ),
            const SizedBox(height: 12),

            ElevatedButton(
              onPressed: () => context.go('/puntaje'),
              child: const Text('Calcular puntaje de ingreso'),
            ),
            const SizedBox(height: 12),

            ElevatedButton(
              onPressed: () => context.go('/requisitos'),
              child: const Text('Requisitos de admisión'),
            ),
          ],
        ),
      ),
    );
  }
}
