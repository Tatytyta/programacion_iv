import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';

class RequisitosPage extends StatelessWidget {
  const RequisitosPage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Requisitos de Admisión'),
        leading: IconButton(
          icon: const Icon(Icons.arrow_back),
          onPressed: () => context.go('/'),
        ),
      ),
      body: const Padding(
        padding: EdgeInsets.all(16),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text(
              'Documentos necesarios:',
              style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
            ),
            SizedBox(height: 16),
            Text('• Cédula o pasaporte'),
            Text('• Certificado de votación'),
            Text('• Título de bachiller'),
            Text('• Notas del colegio'),
            Text('• Foto tamaño carnet'),
            Text('• Formulario de inscripción'),
          ],
        ),
      ),
    );
  }
}
